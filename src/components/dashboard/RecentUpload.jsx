import { CiMenuKebab } from "react-icons/ci";
import { IoDocumentsSharp } from "react-icons/io5";
import { IoVideocam } from "react-icons/io5";
import { GiPieChart } from "react-icons/gi";
import { PiDownloadLight } from "react-icons/pi";
import { handleDownload } from "../../actions/files/DownloadFile";
import { GoTrash } from "react-icons/go";
import { DeleteFile } from "../../actions/files/DeleteFile";
import { FileContext } from "../../Home";
import { useContext } from "react";
function Menu({ file }) {
  const { uploads, setUploads } = useContext(FileContext);
  return (
    <div className="absolute right-[100%] w-[200px] h-max p-2 flex flex-col items-center bg-slate-200 rounded-xl">
      <div
        onClick={() => {
          handleDownload(file.file, file.name);
        }}
        className="w-full cursor-pointer p-1 flex items-center gap-2"
      >
        <PiDownloadLight />
        Download
      </div>
      <div className="w-[100%] h-[1px] bg-slate-600"></div>
      <div
        onClick={async () => {
          await DeleteFile(file);
          const updated_uploads = uploads.filter((el) => el.id != file.id);
          setUploads(updated_uploads);
        }}
        className="w-full cursor-pointer p-1 flex items-center gap-2"
      >
        <GoTrash />
        Delete
      </div>
    </div>
  );
}

export default function RecentUpload({ file, openMenuId, onToggleMenu }) {
  function formatTimestamp() {
    const date = new Date(file?.created_at);
    const options = { hour: "2-digit", minute: "2-digit" };
    const time = date.toLocaleTimeString("en-US", options);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    return `${time}, ${day} ${month}`;
  }

  const isMenuOpen = openMenuId === file.id;

  return (
    <div className="flex w-full h-full items-center justify-between p-1">
      <div className="h-full flex gap-5 items-center">
        <div
          className={`w-[52px] h-[52px] grid place-items-center overflow-hidden rounded-full ${
            file?.file_type === "document" ? "bg-[#FF7474]" : ""
          } ${file?.file_type === "media" ? "bg-[#3DD9B3]" : ""} ${
            file?.file_type === "other" ? "bg-[#EEA8FD]" : ""
          }`}
        >
          {file?.file_type === "document" && (
            <IoDocumentsSharp size={25} color="white" />
          )}
          {file?.file_type === "image" && (
            <img
              className="w-full h-full object-cover object-center rounded-full"
              src={file.file}
              alt=""
            />
          )}
          {file?.file_type === "media" && (
            <IoVideocam size={25} color="white" />
          )}
          {file?.file_type === "other" && (
            <GiPieChart size={25} color="white" />
          )}
        </div>
        <div className="flex flex-col">
          <p className="text-lg font-bold">{file?.name}</p>
          <p className="text-slate-500">{formatTimestamp()}</p>
        </div>
      </div>
      <div className="relative">
        {isMenuOpen && <Menu file={file} />}
        <CiMenuKebab
          onClick={() => onToggleMenu(file.id)}
          className="cursor-pointer"
          size={25}
        />
      </div>
    </div>
  );
}
