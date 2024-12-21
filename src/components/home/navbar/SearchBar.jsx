import { IoIosSearch } from "react-icons/io";
export default function SearchBar() {
  return (
    <>
      <div className="rounded-full p-2 h-full shadow-xl w-[40%] flex items-center gap-2">
        <IoIosSearch className="cursor-pointer" size={25} />
        <input
          className="w-full h-full p-2 rounded-full bg-transparent outline-none text-lg"
          type="text"
          name=""
          id=""
          placeholder="Search file..."
        />
      </div>
    </>
  );
}
