import Logo from "../assets/heygen-logo.svg";

const Leftbar = () => {
  return (
    <div className="flex w-2/3 items-center">
      <img src={Logo} alt="Heygen Logo" />
      <ul className="w-4/5 ml-8 flex justify-around font-noto font-medium text-lg">
        <li>Platform</li>
        <li>Solutions</li>
        <li>Resources</li>
        <li>Pricing </li>
        <li>Enterprise</li>
        <li>Company </li>
      </ul>
    </div>
  );
};

export default Leftbar;
