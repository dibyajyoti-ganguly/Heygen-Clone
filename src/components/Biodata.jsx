const Biodata = () => {
  return (
    <div className="absolute z-10 w-3/10 ml-16 mt-28 font-noto">
      <p className="text-sm text-black font-handwriting font-black">
        <span className="text-xs">🟣</span> 2025 #1 Fastest Growing Product by
        G2
      </p>
      <br />
      <p className="text-4xl text-indigo-700 font-semibold">
        AI Video Generator
      </p>
      <p className="text-4xl font-semibold">unlimited AI Videos</p>
      <p className="text-4xl font-semibold">No Camera Needed</p>
      <br />
      <p className="text-lg text-zinc-500 font-medium tracking-tighter opacity-90">
        HeyGen AI turns text to video in only a few minutes. It's easy, and it's
        the future.
      </p>
      <br />
      <button
        onClick={() => (window.location.href = "https://app.heygen.com/signup")}
        className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-medium py-2 px-4 rounded-full flex items-center gap-2 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 fill-white"
          viewBox="0 0 20 20"
        >
          <path d="M6 4l10 6-10 6V4z" />
        </svg>
        Get Started for Free
      </button>
    </div>
  );
};

export default Biodata;
