import { CiMenuKebab } from "react-icons/ci";
import { IoDocumentsSharp } from "react-icons/io5";
import { IoVideocam } from "react-icons/io5";
import { GiPieChart } from "react-icons/gi";
import { filesize } from "filesize";
import Menu from "./Menu";
export default function File({
  file,
  onToggleMenu,
  openMenuId,
  setOpenMenuId,
  refetch,
}) {
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
    <>
      <div className="w-full h-full rounded-xl bg-white flex flex-col gap-3 p-2">
        <div className="w-full h-full flex justify-between items-center">
          <div
            className={`w-[35%] overflow-hidden aspect-square rounded-full grid place-items-center ${
              file?.file_type === "document" ? "bg-[#FF7474]" : ""
            } ${file?.file_type === "media" ? "bg-[#3DD9B3]" : ""} ${
              file?.file_type === "other" ? "bg-[#EEA8FD]" : ""
            }`}
          >
            {file?.file_type === "document" && (
              <IoDocumentsSharp className="w-[50%] h-[50%]" color="white" />
            )}
            {file?.file_type === "image" && (
              <img
                className="w-full h-full object-cover object-center rounded-full"
                src={file.file}
                alt=""
              />
            )}
            {file?.file_type === "media" && (
              <IoVideocam className="w-[50%] h-[50%]" color="white" />
            )}
            {file?.file_type === "other" && (
              <GiPieChart className="w-[50%] h-[50%]" color="white" />
            )}
          </div>
          <div className="flex flex-col items-end justify-between h-full">
            <div className="relative">
              {isMenuOpen && (
                <Menu
                  file={file}
                  setOpenMenuId={setOpenMenuId}
                  refetch={refetch}
                />
              )}
              <CiMenuKebab
                onClick={() => {
                  onToggleMenu(file.id);
                }}
                className="cursor-pointer"
                size={30}
              />
            </div>
            <p className="text-[#333F4E]">{filesize(file?.size)}</p>
          </div>
        </div>
        <div className="w-full h-full flex flex-col justify-center gap-6">
          <div className="w-[80%]">
            <p className="truncate text-xl font-bold text-[#333F4E]">
              {file?.name}
            </p>
          </div>
          <p className="text-lg text-[#333F4E]">{formatTimestamp()}</p>
        </div>
      </div>
    </>
  );
}
