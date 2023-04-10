import { MdAdd, MdAutoGraph } from "react-icons/md";
import { BsCalendarHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);

  useEffect(() => {
    function handleResize() {
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.clientHeight;

      // calculate the difference between the viewport and document heights
      const heightDifference = documentHeight - viewportHeight;

      // if the difference is greater than 100 pixels, assume that the keyboard is shown
      if (heightDifference > 100) {
        setIsKeyboardShown(true);
      } else {
        setIsKeyboardShown(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isKeyboardShown) {
    return <></>;
  }

  return (
    <div className="z-50 flex items-center justify-around w-full h-16 p-4 shadow-xl bg-primary-200 rounded-t-2xl">
      {/* <div className="mt-1 rounded-full text-primary-800">
        <BsCalendarHeart size={20} />
      </div> */}
      <div className="mt-1 rounded-full text-primary-800">
        <Link to={"/stats"}>
          <MdAutoGraph size={20} />
        </Link>
      </div>
      <div className="flex items-center justify-center w-10 h-10 rounded-full shadow-2xl bg-primary-50">
        <Link to={"/intentionally"}>
          <MdAdd className="font-semibold text-primary-800" size={26} />
        </Link>
      </div>
      <div className="mt-1 rounded-full text-primary-800">
        <Link to={"/calendar"}>
          {" "}
          <BsCalendarHeart size={20} />{" "}
        </Link>
      </div>
      {/* <div className="mt-1 rounded-full text-primary-800">
        <MdAutoGraph size={20} />
      </div> */}
    </div>
  );
};

export default NavBar;
