import SideBar from "../components/auth/SideBar";
import OtpModal from "../components/auth/OtpModal";
import { useState } from "react";
import RegisterForm from "../components/auth/RegisterForm";
export default function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [isModalOpen, SetIsModalOpen] = useState(false);
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
            <p className=" text-gray-800 text-[40px] font-bold">
              Create Account
            </p>
            <RegisterForm
              SetIsModalOpen={SetIsModalOpen}
              username={username}
              setUsername={setUsername}
              email={email}
              setEmail={setEmail}
            />
          </div>
        </div>
      </div>
    </>
  );
}
