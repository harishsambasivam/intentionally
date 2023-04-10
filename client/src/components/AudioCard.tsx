import { FaRegClock } from "react-icons/fa";
import { BsFillPlayFill } from "react-icons/bs";

const AudioCard = () => {
  return (
    <div className="flex items-center p-2 rounded-lg shadow-sm bg-primary-50">
      <div className="">
        <div className="text-sm text-slate-700">Best Hike Ever!</div>
        <div className="flex items-center text-xs text-slate-500">
          <FaRegClock />
          <p className="ml-1">15 mins</p>
        </div>
      </div>
      <div className="flex-shrink-0 p-2 ml-auto rounded-full shadow-sm bg-primary-100">
        <BsFillPlayFill />
      </div>
    </div>
  );
};

export default AudioCard;
