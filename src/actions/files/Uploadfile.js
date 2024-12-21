import axiosInterceptor from "../../libs/axios/axios";
import toast from "react-hot-toast";

export async function UploadFile(data, filename) {
  const toastId = toast.loading(`Uploading: ${filename}`, {
    position: "bottom-right",
  });
  try {
    let resp = await axiosInterceptor.post(
      "http://127.0.0.1:8000/files/upload/",
      data
    );
    if (resp.status === 201) {
      toast.success("Upload successful!", { id: toastId });
      return resp.data.file;
    }
  } catch (error) {
    const errorMessage = error.response?.data?.error || "Upload failed.";
    toast.error(errorMessage, { id: toastId });
  }
  return null;
}
