import { useRef } from "react";
import HerovideoEnglish from "../assets/HeroEnglish2.webm";
import Biodata from "./Biodata";
import Languages from "./Languages";
import AutoscrollList from "./AutoscrollList";

const Hero = () => {
  const videoRef = useRef(null);

  return (
    <div className="relative w-full aspect-video overflow-hidden">
      {/* Background video */}
      <video
        ref={videoRef}
        src={HerovideoEnglish}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="https://dynamic.heygen.ai/www/Home%20-%20Page/HeroEnglish2.mp4/ik-thumbnail.jpg?updatedAt=1745968087303"
        className="absolute inset-0 w-full h-full object-cover will-change-transform"
      />

      {/* Overlay content */}
      <div className="hidden lg:block">
        <Biodata />
      </div>
      <div className="hidden lg:block">
        <Languages videoRef={videoRef} />
      </div>
      <div className="hidden lg:block">
        <AutoscrollList />
      </div>

      <div className="hidden lg:block">
        <div className="flex justify-center absolute z-10 w-full bottom-16 font-micro text-xl font-medium">
          <h1>
            Trusted over by <span className="font-black">85000+ customers</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
