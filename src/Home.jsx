import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/home/navbar/NavBar";
import SideBar from "./components/home/sidebar/SideBar";
import Dashboard from "./Dashboard/Dashboard";
import { createContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { GetRecentFiles } from "./actions/files/GetRecentFiles";
import Files from "./Files/Files";
export const FileContext = createContext();
export default function Home() {
  const [uploads, setUploads] = useState([]);
  const { data } = useQuery({
    queryKey: ["recentuplods"],
    queryFn: GetRecentFiles,
  });
  useEffect(() => {
    if (data) {
      setUploads(data);
    }
  }, [data]);
  return (
    <>
      <FileContext.Provider value={{ uploads, setUploads }}>
        <div className="w-full h-[100vh] flex flex-col">
          <NavBar />
          <div className="h-full w-full flex gap-5 pr-4">
            <SideBar />
            <div className="h-[98%] w-full bg-slate-200 rounded-3xl">
              <Routes>
                <Route path="*" element={<Navigate to={"/"} />}></Route>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/:filetype" element={<Files />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </FileContext.Provider>
    </>
  );
}
