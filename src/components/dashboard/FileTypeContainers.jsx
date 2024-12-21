export default function FileTypeContainers({
  img,
  filetype,
  space,
  lastUpdate,
}) {
  return (
    <>
      <div className="w-full h-full bg-white rounded-xl relative flex flex-col p-2 justify-between gap-2">
        <div
          className={`absolute -top-3 -left-3 w-14 h-14 rounded-full grid place-items-center  ${
            filetype == "Documents" && "bg-[#FF7474]"
          } ${filetype == "Images" && "bg-[#56B8FF]"} ${
            filetype == "Video/Audio" && "bg-[#3DD9B3]"
          } ${filetype == "Other" && "bg-[#EEA8FD]"}`}
        >
          {img}
        </div>
        <div className="w-full flex justify-end">
          <p className="font-semibold">{space} GB</p>
        </div>
        <div className="w-full flex items-center justify-center">
          <p className="text-lg font-bold">{filetype}</p>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-[80%] h-[1px] bg-slate-300"></div>
        </div>
        <div className="flex w-full flex-col gap-1 items-center">
          <p className="text-slate-500">Last Update</p>
          <p>{lastUpdate}</p>
        </div>
      </div>
    </>
  );
}
