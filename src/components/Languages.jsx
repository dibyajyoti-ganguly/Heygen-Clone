import HerovideoEnglish from "../assets/HeroEnglish2.webm";
import HerovideoSpanish from "../assets/HeroSpanish2.webm";
import HerovideoChinese from "../assets/HeroChinese2.webm";

const Languages = ({ videoRef }) => {
  return (
    <div className="absolute z-10 w-1/8 right-16 mt-32 bg-white py-8 rounded-4xl shadow-2xl">
      <div className="flex flex-col font-noto text-xl font-medium ">
        <button
          className="cursor-pointer"
          onClick={() => {
            videoRef.current.src = HerovideoEnglish;
            videoRef.current.play();
          }}
        >
          <span className="text-base font-black">US</span> English
        </button>
        <br />
        <button
          className="cursor-pointer"
          onClick={() => {
            videoRef.current.src = HerovideoChinese;
            videoRef.current.play();
          }}
        >
          <span className="text-base font-black">CN</span> Chinese
        </button>
        <br />
        <button
          className="cursor-pointer"
          onClick={() => {
            videoRef.current.src = HerovideoSpanish;
            videoRef.current.play();
          }}
        >
          <span className="text-base font-black">ES</span> Spanish
        </button>
        <br />
        <button
          onClick={() => {
            videoRef.current.src =
              "https://dynamic.heygen.ai/www/Home%20-%20Page/HeroGerman2.mp4?tr=orig&updatedAt=1745968087303#t=0.01";
            videoRef.current.play();
          }}
          className="cursor-pointer"
        >
          <span className="text-base font-black">DE</span> German
        </button>
      </div>
      <br />
      <button
        onClick={() => {
          if (videoRef.current.muted) {
            videoRef.current.muted = false;
          } else videoRef.current.muted = true;
        }}
        className="text-base ml-14 cursor-pointer"
      >
        🔇Unmute
      </button>
    </div>
  );
};

export default Languages;
