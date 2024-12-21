import AvailableStorageContainer from "../components/dashboard/AvailableStorageContainer";
import FileTypeContainers from "../components/dashboard/FileTypeContainers";
import { IoDocumentsSharp } from "react-icons/io5";
import { IoMdImages } from "react-icons/io";
import { IoVideocam } from "react-icons/io5";
import { GiPieChart } from "react-icons/gi";
import RecentUploadsSection from "../components/dashboard/RecentUploadsSection";
export default function Dashboard() {
  return (
    <>
      <div className="w-full h-full flex justify-between rounded-3xl p-6">
        <div className="w-[47%] h-full flex flex-col justify-between items-center ">
          <AvailableStorageContainer />
          <div className="w-full h-[60%] grid  gap-8 grid-cols-2 grid-rows-2">
            <FileTypeContainers
              img={<IoDocumentsSharp size={25} color="white" />}
              filetype={"Documents"}
              lastUpdate={"10:15am, 10Oct"}
              space={"10"}
            />
            <FileTypeContainers
              img={<IoMdImages size={25} color="white" />}
              filetype={"Images"}
              lastUpdate={"10:15am, 10Oct"}
              space={"10"}
            />
            <FileTypeContainers
              img={<IoVideocam size={25} color="white" />}
              filetype={"Video/Audio"}
              lastUpdate={"10:15am, 10Oct"}
              space={"10"}
            />
            <FileTypeContainers
              img={<GiPieChart size={25} color="white" />}
              filetype={"Other"}
              lastUpdate={"10:15am, 10Oct"}
              space={"10"}
            />
          </div>
        </div>
        <div className="h-full flex flex-col p-5 gap-2  w-[48%] bg-white rounded-3xl">
          <p className="text-3xl font-bold">Recent files uploaded</p>
          <RecentUploadsSection />
        </div>
      </div>
    </>
  );
}
