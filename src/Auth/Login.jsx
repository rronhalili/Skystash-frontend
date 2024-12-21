import SideBar from "../components/auth/SideBar";
import LoginForm from "../components/auth/LoginForm";
import OtpModal from "../components/auth/OtpModal";
import { useState } from "react";
export default function Login() {
  const [isModalOpen, SetIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  return (
    <>
      <div className="w-full h-[100vh] flex relative">
        {isModalOpen ? (
          <OtpModal SetIsModalOpen={SetIsModalOpen} email={email} />
        ) : (
          ""
        )}
        <SideBar />
        <div className="h-full w-full flex items-center justify-center bg-slate-200">
          <div className="w-[75%] flex flex-col gap-5">
            <p className=" text-gray-800 text-[40px] font-bold">Login</p>
            <LoginForm
              SetIsModalOpen={SetIsModalOpen}
              email={email}
              setEmail={setEmail}
            />
          </div>
        </div>
      </div>
    </>
  );
}
