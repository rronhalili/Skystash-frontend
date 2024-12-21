import axiosInterceptor from "../../libs/axios/axios";
export async function GetUser() {
  const authtoken = localStorage.getItem("authtoken");
  try {
    let resp = await axiosInterceptor.get("http://127.0.0.1:8000/auth/user/", {
      headers: {
        Authorization: `Bearer ${authtoken}`,
      },
    });
    return resp.data;
  } catch (error) {
    console.log(error);
  }
}
