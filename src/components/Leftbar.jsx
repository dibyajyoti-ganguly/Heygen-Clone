import Logo from "../assets/heygen-logo.svg";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FiAlignJustify } from "react-icons/fi";

const Leftbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className="w-full flex items-center justify-between lg:w-2/3">
      {/* Logo */}
      <img src={Logo} alt="Heygen Logo" className="h-8" />

      {/* Nav Items - Only visible on lg+ */}
      <ul className="hidden lg:flex w-4/5 ml-8 justify-around font-noto font-medium text-lg">
        <li>Platform</li>
        <li>Solutions</li>
        <li>Resources</li>
        <li>Pricing</li>
        <li>Enterprise</li>
        <li>Company</li>
      </ul>

      {/* Hamburger icon - shown only < lg */}
      <div
        className="lg:hidden text-2xl mr-4 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <HiOutlineX /> : <FiAlignJustify />}
      </div>

      {/* Dropdown menu - visible only on small screens */}
      {menuOpen && (
        <ul className="absolute top-20 opacity-75 left-6 z-50 flex flex-col gap-4 text-lg font-medium font-handwriting">
          <li>Platform</li>
          <li>Solutions</li>
          <li>Resources</li>
          <li>Pricing</li>
          <li>Enterprise</li>
          <li>Company</li>
        </ul>
      )}
    </div>
  );
};

export default Leftbar;
