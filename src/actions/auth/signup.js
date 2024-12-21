import axios from "axios";
export async function Signup(email, username) {
  try {
    let resp = await axios.post("http://127.0.0.1:8000/auth/signup/", {
      email,
      username,
    });
  } catch (error) {
    return error.response.data;
  }
}
