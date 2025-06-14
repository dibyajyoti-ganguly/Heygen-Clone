import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";

const Navbar = () => {
  return (
    <div className="ml-6 mt-7 mb-8 flex items-center">
      <Leftbar />
      <Rightbar />
    </div>
  );
};

export default Navbar;
