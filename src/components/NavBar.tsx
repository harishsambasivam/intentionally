import { MdAdd, MdAutoGraph } from "react-icons/md";
import { BsCalendarHeart } from "react-icons/bs";

const NavBar = () => {
  return (
    <div className="fixed bottom-0 left-0 z-50 flex items-center justify-around w-full h-16 shadow-xl bg-primary-200 rounded-t-2xl">
      {/* <div className="mt-1 rounded-full text-primary-800">
        <BsCalendarHeart size={20} />
      </div> */}
      <div className="mt-1 rounded-full text-primary-800">
        <MdAutoGraph size={20} />
      </div>
      <div className="flex items-center justify-center w-10 h-10 rounded-full shadow-2xl bg-primary-50">
        <MdAdd className="font-semibold text-primary-800" size={26} />
      </div>
      <div className="mt-1 rounded-full text-primary-800">
        <BsCalendarHeart size={20} />
      </div>
      {/* <div className="mt-1 rounded-full text-primary-800">
        <MdAutoGraph size={20} />
      </div> */}
    </div>
  );
};

export default NavBar;
