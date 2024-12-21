import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useSelector } from "react-redux";
import { filesize } from "filesize";
export default function AvailableStorageContainer() {
  const user = useSelector((state) => state.auth.user);
  const total_storage = user?.total_storage;
  const used_storage = user?.used_storage;
  const available_storage = filesize(total_storage - used_storage);
  const readable_total_storage = filesize(total_storage);
  const percentageUsed =
    total_storage > 0
      ? parseFloat(((used_storage / total_storage) * 100).toFixed(2))
      : 0;

  return (
    <>
      <div className="w-full h-[35%] shadow-lg rounded-3xl p-3 bg-green-500 flex items-center gap-10">
        <div style={{ width: "170px", height: "170px" }}>
          <CircularProgressbar
            value={percentageUsed}
            maxValue={100}
            text={`${percentageUsed}% Used`}
            styles={buildStyles({
              rotation: 0.75,
              strokeLinecap: "round",
              pathColor: "white",
              trailColor: "rgb(235,235,235,0.4)",
              textSize: "15px",
              textColor: "white",
            })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-3xl text-white font-bold">Available Storage</p>
          <p className="text-xl text-white font-bold">
            {available_storage} / {readable_total_storage}
          </p>
        </div>
      </div>
    </>
  );
}
