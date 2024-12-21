import axios from "axios";
export async function VerifyOtp(OTP) {
  try {
    let resp = await axios.post("http://127.0.0.1:8000/auth/verify-code/", {
      token: OTP,
    });
    return resp;
  } catch (error) {
    return error.response.data;
  }
}
