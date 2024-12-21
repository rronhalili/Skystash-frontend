import React from "react";
import folders from "../../../../images/folders.svg";
import { RiAccountCircleFill } from "react-icons/ri";
import { useSelector } from "react-redux";
export default function Profile() {
  const user = useSelector((state) => state.auth.user);
  return (
    <>
      <div className="w-full h-max flex flex-col gap-10 items-center">
        <div className="w-full h-max relative">
          <img
            draggable="false"
            className="w-[160px] z-10 h-[160px] absolute top-[-100%] left-[23%]"
            src={folders}
            alt=""
          />
          <div className="w-full h-[100px] bg-[#3DD9B3] rounded-xl opacity-40"></div>
        </div>
        <div className="w-full h-max flex items-center gap-3">
          <RiAccountCircleFill size={45} />
          <div className="flex flex-col">
            <p className="text-sm">{user.username}</p>
            <p className="text-sm">{user.email}</p>
          </div>
        </div>
      </div>
    </>
  );
}
