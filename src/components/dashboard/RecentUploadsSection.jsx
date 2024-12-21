import { FileContext } from "../../Home";
import { useContext, useState } from "react";
import RecentUpload from "./RecentUpload";

export default function RecentUploadsSection() {
  const { uploads } = useContext(FileContext);
  const recent_uploads = uploads.slice(0, 7);
  const [openMenuId, setOpenMenuId] = useState(null);
  const handleMenuToggle = (fileId) => {
    setOpenMenuId((prevOpenMenuId) =>
      prevOpenMenuId === fileId ? null : fileId
    );
  };

  return (
    <div className="flex max-h-full items-start w-full flex-col gap-2">
      {recent_uploads?.map((el) => (
        <RecentUpload
          file={el}
          key={el.id}
          openMenuId={openMenuId}
          onToggleMenu={handleMenuToggle}
        />
      ))}
    </div>
  );
}
