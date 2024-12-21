import axiosInterceptor from "../../libs/axios/axios";
export async function GetRecentFiles() {
  try {
    let resp = await axiosInterceptor.get(
      "http://127.0.0.1:8000/files/recent/"
    );
    return resp.data;
  } catch (error) {
    console.log(error);
  }
}
