import axios from "axios";

const axiosInterceptor = axios.create({
  baseURL: "http://localhost:8000",
});

// Set up the interceptor
axiosInterceptor.interceptors.response.use(
  (response) => response, // If response is successful, just return it
  async (error) => {
    const originalRequest = error.config;

    // Check if the error status is 401 (unauthorized) and it hasn't been retried yet
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true; // Prevents infinite retry loop

      // Attempt to get a new access token using the refresh token
      try {
        const refreshResponse = await axios.post(
          "http://localhost:8000/auth/token/refresh/",
          {
            refresh: localStorage.getItem("refresh"), // Retrieve the refresh token from storage
          }
        );

        const newAccessToken = refreshResponse.data.access;
        localStorage.setItem("authtoken", newAccessToken); // Save new access token

        // Set the new access token in the original request headers
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

        // Retry the original request with the new access token
        return axiosInterceptor(originalRequest);
      } catch (refreshError) {
        // If refresh token also fails (e.g., it’s expired), log out or handle accordingly
        console.error("Refresh token expired. Please log in again.");
        // Optionally, remove tokens from storage
        localStorage.removeItem("authtoken");
        localStorage.removeItem("refresh");
        // Redirect to login page or show an alert
      }
    }
    return Promise.reject(error);
  }
);

axiosInterceptor.interceptors.request.use((config) => {
  const token = localStorage.getItem("authtoken");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default axiosInterceptor;
