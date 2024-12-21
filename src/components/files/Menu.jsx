import { PiDownloadLight } from "react-icons/pi";
import { GoTrash } from "react-icons/go";
import { handleDownload } from "../../actions/files/DownloadFile";
import { DeleteFile } from "../../actions/files/DeleteFile";
export default function Menu({ file, refetch, setOpenMenuId }) {
  return (
    <>
      <div className="flex w-[250px] flex-col p-2 rounded-xl gap-5 bg-white shadow-lg absolute right-[0%] top-[100%]">
        <p className="text-2xl font-bold text-[#333F4E]">{file.name}</p>
        <div className="flex flex-col w-full gap-2">
          <div
            onClick={() => {
              handleDownload(file.file, file.name);
              setOpenMenuId(null);
            }}
            className="flex gap-4 items-center p-1 cursor-pointer hover:bg-slate-100"
          >
            <div className="w-[20%] bg-[rgb(86,184,255,0.2)] grid place-items-center aspect-square rounded-full">
              <PiDownloadLight className="w-[50%] h-[50%]" color="#56B8FF" />
            </div>
            <p className="text-lg font-semibold text-[#333F4E]">Download</p>
          </div>
          <div className="w-full h-[1px] bg-slate-400"></div>
          <div
            onClick={async () => {
              await DeleteFile(file);
              setOpenMenuId(null);
              refetch();
            }}
            className="flex gap-4 items-center p-1 cursor-pointer hover:bg-slate-100"
          >
            <div className="w-[20%] bg-[rgb(255,116,116,0.2)] grid place-items-center aspect-square rounded-full">
              <GoTrash className="w-[50%] h-[50%]" color="#FF7474" />
            </div>
            <p className="text-lg font-semibold text-[#333F4E]">Delete</p>
          </div>
        </div>
      </div>
    </>
  );
}
