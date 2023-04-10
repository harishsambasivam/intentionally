import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="flex items-center justify-center px-6 py-6 font-semibold">
      {/* <HiOutlineArrowSmallLeft size={24} className="mr-4 text-slate-600" /> */}
      <p className="mr-auto text-2xl font-semibold tracking-wide text-primary-700 ">
        <Link to="/">Intentionally</Link>
      </p>
      <img
        className="w-8 h-8 p-1 ml-auto rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
      />
    </div>
  );
};

export default TopBar;
