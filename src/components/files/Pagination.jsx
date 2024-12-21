import ReactPaginate from "react-paginate";

export default function Pagination({ pageCount, onPageChange }) {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={onPageChange}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      renderOnZeroPageCount={null}
      containerClassName="flex items-center font-bold justify-center gap-2 mt-4"
      pageClassName="text-gray-600 px-4 py-2 border border-gray-400 rounded-md"
      activeClassName="bg-green-500"
      previousClassName="text-gray-600 hover:bg-slate-300  px-4 py-2 border border-gray-400 rounded-md"
      nextClassName="text-gray-600 hover:bg-slate-300 cursor-pointer px-4 py-2 border border-gray-400 rounded-md"
      breakClassName="text-gray-600 px-4 py-2"
    />
  );
}
