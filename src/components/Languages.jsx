import HerovideoEnglish from "../assets/HeroEnglish2.webm";
import HerovideoSpanish from "../assets/HeroSpanish2.webm";
import HerovideoChinese from "../assets/HeroChinese2.webm";
import HerovideoGerman from "../assets/HeroGerman2.webm";

const Languages = ({ videoRef }) => {
  return (
    <div className="absolute z-10 w-1/8 right-16 mt-32 bg-white py-8 rounded-4xl shadow-2xl flex flex-col items-center font-noto text-xl font-medium">
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
          videoRef.current.src = HerovideoGerman;
          videoRef.current.play();
        }}
        className="cursor-pointer"
      >
        <span className="text-base font-black">DE</span> German
      </button>
      <br />
      <button
        onClick={() => {
          if (videoRef.current.muted) {
            videoRef.current.muted = false;
          } else videoRef.current.muted = true;
        }}
        className="text-base cursor-pointer"
      >
        🔇Unmute
      </button>
    </div>
  );
};

export default Languages;
