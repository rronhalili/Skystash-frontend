import { useState } from "react";
import { OtpInput } from "reactjs-otp-input";
import { IoClose } from "react-icons/io5";
import { VerifyOtp } from "../../actions/auth/verifyOTP";
import { setUser } from "../../libs/redux/slices/AuthSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function OtpModal({ email, SetIsModalOpen }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  async function HandleSubmit() {
    setError("");
    const resp = await VerifyOtp(otp);
    if (resp?.error) {
      setError(resp.error);
    } else {
      localStorage.setItem("authtoken", resp.data.access);
      localStorage.setItem("refresh", resp.data.refresh);
      dispatch(setUser(resp.data.user));
      SetIsModalOpen(false);
      navigate("/");
    }
  }
  return (
    <>
      <div className="w-full absolute  h-full z-10 bg-[rgb(0,0,0,0.8)]  flex items-center justify-center">
        <div className="w-[30%] h-[37%] bg-slate-100 rounded-3xl flex flex-col justify-between items-center p-5 relative">
          <IoClose
            onClick={() => {
              SetIsModalOpen(false);
            }}
            className="absolute right-3 cursor-pointer top-3"
            size={"25"}
          />
          <p className="text-2xl font-bold text-black">Enter OTP</p>
          <p className="text-lg">
            We've sent a code to <span className="text-green-500">{email}</span>
          </p>
          <OtpInput
            containerStyle="w-[85%] justify-between items-center justify-center"
            inputStyle={{
              fontSize: "25px",
              width: "45px",
              height: "45px",
              border: "1px solid gray",
              fontWeight: "bold",
              outline: "none",
            }}
            value={otp}
            onChange={(otp) => setOtp(otp)}
            numInputs={6}
          />
          {error && <p className="text-red-500 text-lg">{error}</p>}
          <button
            onClick={HandleSubmit}
            className="w-[85%] h-[50px] rounded-full text-lg text-slate-100 bg-green-500"
          >
            Submit
          </button>
          <p className="text-lg">
            Didn't get a code?{" "}
            <span className="text-green-500 cursor-pointer">
              Click to resend.
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
