import axiosInterceptor from "../../libs/axios/axios";
import toast from "react-hot-toast";
export async function DeleteFile(file) {
  const toastId = toast.loading(`Deleting: ${file.name}`, {
    position: "bottom-right",
  });
  try {
    let resp = await axiosInterceptor.delete(
      `http://127.0.0.1:8000/files/${file.id}/delete/`
    );
    if (resp.status === 200) {
      toast.success(resp.data.success, { id: toastId });
    }
  } catch (error) {
    const errorMessage = error.response?.data?.error || "Failed to delete file";
    toast.error(errorMessage, { id: toastId });
  }
}
