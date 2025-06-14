import React, { useRef } from "react";
import Herovideo from "../assets/HeroEnglish2.webm";
import Biodata from "./Biodata";

const Hero = () => {
  const videoRef = useRef(null);

  return (
    <div className="relative w-full aspect-video overflow-hidden">
      {/* Background video */}
      <video
        ref={videoRef}
        src={Herovideo}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="https://dynamic.heygen.ai/www/Home%20-%20Page/HeroEnglish2.mp4/ik-thumbnail.jpg?updatedAt=1745968087303"
        className="absolute inset-0 w-full h-full object-cover will-change-transform"
      />

      {/* Overlay content */}
      <Biodata videoRef={videoRef} />
    </div>
  );
};

export default Hero;
