import { useParams, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { GetFilesByFileType } from "../actions/files/GetFilesByFileType";
import { filesize } from "filesize";
import File from "../components/files/File";
import { useState } from "react";
import Pagination from "../components/files/Pagination";

export default function Files() {
  const [openMenuId, setOpenMenuId] = useState(null);

  const handleMenuToggle = (fileId) => {
    setOpenMenuId((prevOpenMenuId) =>
      prevOpenMenuId === fileId ? null : fileId
    );
  };

  const [params, setSearchParams] = useSearchParams();
  const { filetype } = useParams();
  const currentpage = params.has("page") ? parseInt(params.get("page"), 10) : 1;

  const {
    data: files,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["files", filetype, currentpage],
    queryFn: () => GetFilesByFileType(filetype, currentpage),
  });

  const onPageChange = ({ selected }) => {
    setSearchParams({ page: selected + 1 });
    refetch();
  };

  return (
    <div className="w-full h-full flex flex-col gap-3 rounded-3xl p-6">
      <div className="flex flex-col gap-5">
        <p className="text-3xl font-bold text-[#333F4E] uppercase">
          {filetype}
        </p>
        <p className="text-xl text-[#333F4E] font-light">
          Total:{" "}
          <span className="font-bold">{filesize(files?.total_space || 0)}</span>
        </p>
      </div>

      {!isFetching && files?.files.length === 0 && (
        <p className="text-2xl font-bold text-[#333F4E]">
          No Files of {filetype} type
        </p>
      )}

      <div className="w-full h-full grid grid-cols-4 grid-rows-2 gap-5">
        {files?.files.map((el) => (
          <File
            file={el}
            key={el.id}
            openMenuId={openMenuId}
            onToggleMenu={handleMenuToggle}
            setOpenMenuId={setOpenMenuId}
            refetch={refetch}
          />
        ))}
      </div>

      <div className="w-full flex items-center justify-end h-[10%]">
        <Pagination pageCount={files?.num_pages} onPageChange={onPageChange} />
      </div>
    </div>
  );
}
