import { NavLink } from "react-router-dom";
export default function SideBarLink({ logo, text, link }) {
  return (
    <>
      <NavLink
        to={link}
        className={({ isActive }) =>
          `w-full px-2 py-3 flex items-center text-xl font-semibold gap-3 rounded-full transition-colors ${
            isActive ? "bg-green-500 text-white shadow-lg" : ""
          }`
        }
      >
        {logo}
        <span>{text}</span>
      </NavLink>
    </>
  );
}
