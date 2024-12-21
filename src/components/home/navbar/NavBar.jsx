import logo from "../../../../images/logo.svg";
import SearchBar from "./SearchBar";
import { TbLogout2 } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { logout } from "../../../libs/redux/slices/AuthSlice";
import UploadButton from "./UploadButton";
export default function NavBar() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex items-center p-5 justify-between w-full">
        <img draggable="false" src={logo} alt="" />
        <SearchBar />
        <div className="flex gap-5 items-center">
          <UploadButton />
          <TbLogout2
            onClick={() => {
              dispatch(logout());
            }}
            className="cursor-pointer text-bold"
            size={25}
            color="rgb(34 197 94)"
          />
        </div>
      </div>
    </>
  );
}
