import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";

const Navbar = () => {
  return (
    <div className="mx-6 mt-7 flex items-center">
      <Leftbar />
      <Rightbar />
    </div>
  );
};

export default Navbar;
