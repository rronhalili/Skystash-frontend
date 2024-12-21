import { MdCloudUpload } from "react-icons/md";
import { useContext } from "react";
import { FileContext } from "../../../Home";
import { UploadFile } from "../../../actions/files/Uploadfile";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../../libs/redux/slices/AuthSlice";
export default function UploadButton() {
  const { setUploads } = useContext(FileContext);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  async function HandleFileUpload(e) {
    const file = e.target.files[0];
    const filetype = getFileType(file.name);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("filename", file.name);
    formData.append("filetype", filetype);
    formData.append("filesize", file.size);
    const new_upload = await UploadFile(formData, file.name);
    const updated_user = {
      ...user,
      used_storage: user?.used_storage + file.size,
      available_storage: user?.available_storage - file.size,
    };
    dispatch(setUser(updated_user));
    if (new_upload) {
      setUploads((prev) => [new_upload, ...prev]);
    }
  }
  const getFileType = (fileName) => {
    const extension = fileName.split(".").pop()?.toLowerCase();
    if (!extension) return "other";

    const documentExtensions = [
      "pdf",
      "doc",
      "docx",
      "txt",
      "xls",
      "xlsx",
      "csv",
      "rtf",
      "ods",
      "ppt",
      "odp",
      "md",
      "html",
      "htm",
      "epub",
      "pages",
      "fig",
      "psd",
      "ai",
      "indd",
      "xd",
      "sketch",
      "afdesign",
      "afphoto",
      "afphoto",
    ];
    const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp", "svg", "webp"];
    const videoExtensions = ["mp4", "avi", "mov", "mkv", "webm"];
    const audioExtensions = ["mp3", "wav", "ogg", "flac"];

    if (documentExtensions.includes(extension)) return "document";
    if (imageExtensions.includes(extension)) return "image";
    if (videoExtensions.includes(extension)) return "media";
    if (audioExtensions.includes(extension)) return "media";

    return "other";
  };
  return (
    <>
      <label
        htmlFor="file"
        className="rounded-full cursor-pointer w-max h-max flex items-center text-white text-lg font-semibold justify-center gap-3 px-3 py-2 bg-green-500"
      >
        <MdCloudUpload size={25} color="white" />
        Upload
      </label>
      <input
        className="hidden"
        onChange={HandleFileUpload}
        type="file"
        name="file"
        id="file"
      />
    </>
  );
}
