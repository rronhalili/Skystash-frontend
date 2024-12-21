import axiosInterceptor from "../../libs/axios/axios";
export async function GetFilesByFileType(file_type, page) {
  try {
    let resp = await axiosInterceptor.get(
      `http://127.0.0.1:8000/files/${file_type}/?page=${page}`
    );
    return resp.data;
  } catch (error) {
    console.log(error);
  }
}
