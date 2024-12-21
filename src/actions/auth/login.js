import axios from "axios";
export async function Login(email) {
  try {
    let resp = await axios.post("http://127.0.0.1:8000/auth/login/", {
      email,
    });
  } catch (error) {
    return error.response.data;
  }
}
