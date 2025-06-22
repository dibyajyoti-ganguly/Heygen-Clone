import { FaGlobeAsia } from "react-icons/fa";

const Rightbar = () => {
  return (
    <div className="w-full lg:w-1/4 ml-0 lg:ml-28 lg:font-semibold lg:text-sm lg:mr-4">
      <ul className="flex justify-end lg:justify-evenly font-sans items-center gap-3">
        <li className="hidden lg:block">
          <div className="flex items-center gap-1">
            <FaGlobeAsia className="text-blue-500 text-base" />
            <span>English</span>
          </div>
        </li>

        <li>
          <button className="bg-gray-100 w-20 rounded-2xl p-2">Login</button>
        </li>

        <li>
          <button className="bg-black w-32 p-2.5 rounded-2xl text-white shadow-md text-xs">
            Sign up for free
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Rightbar;
