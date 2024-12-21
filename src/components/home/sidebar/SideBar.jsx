import React from "react";
import Profile from "./Profile";
import SideBarLink from "./SideBarLink";
import { MdDashboard } from "react-icons/md";
import { IoDocumentsSharp } from "react-icons/io5";
import { IoMdImages } from "react-icons/io";
import { IoVideocam } from "react-icons/io5";
export default function SideBar() {
  return (
    <>
      <div className="min-w-[20%] h-full flex flex-col items-center p-5 justify-between">
        <div className="w-full h-max flex items-center gap-4 flex-col">
          <SideBarLink
            logo={<MdDashboard size={27} />}
            link={"/"}
            text={"Dashboard"}
          />
          <SideBarLink
            logo={<IoDocumentsSharp size={27} />}
            link={"/document"}
            text={"Documents"}
          />
          <SideBarLink
            logo={<IoMdImages size={27} />}
            link={"/image"}
            text={"Images"}
          />
          <SideBarLink
            logo={<IoVideocam size={27} />}
            link={"/media"}
            text={"Media"}
          />
        </div>
        <Profile />
      </div>
    </>
  );
}
