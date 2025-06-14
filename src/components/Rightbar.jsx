const Rightbar = () => {
  return (
    <div className="w-1/3 font-semibold text-sm">
      <ul className="flex justify-evenly font-sans items-center">
        <li>🌐 English</li>
        <button className="bg-gray-100 w-20 rounded-2xl p-2">Login</button>
        <li>Contact Sales</li>
        <button className="bg-black w-32 p-2.5 rounded-2xl text-white shadow-md text-xs">
          Sign up for free
        </button>
      </ul>
    </div>
  );
};

export default Rightbar;
