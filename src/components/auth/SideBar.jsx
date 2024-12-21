import React from "react";
import folders from "../../../images/folders.svg";
export default function SideBar() {
  return (
    <>
      <div className="min-w-[35%] h-full bg-green-500 flex-col flex items-center justify-center gap-10 p-10">
        <p className="text-slate-100 text-[50px] font-semibold">SkyStash</p>
        <div className="flex  flex-col gap-6 w-full">
          <p className="font-bold text-[45px] text-slate-100">
            Manage your files the best way
          </p>
          <img
            className="w-[300px] h-[300px]"
            src={folders}
            alt=""
            draggable="false"
          />
        </div>
      </div>
    </>
  );
}
