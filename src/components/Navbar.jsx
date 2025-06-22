import { useState } from "react";
import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="ml-6 mt-7 mb-8 flex justify-between items-center lg:items-center">
      <Leftbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Rightbar hidden on smaller than lg screens */}
      <div className="hidden lg:block">
        <Rightbar />
      </div>
    </div>
  );
};

export default Navbar;
