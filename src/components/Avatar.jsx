import { useRef, useState } from "react";
import play from "../assets/play-button.png";
import pause from "../assets/pause.png";

const Avatar = (props) => {
  const [click, setClick] = useState(0);
  const videoRef = useRef(null);
  const link = props.data;

  return (
    <div className="relative w-[300px] h-[300px] mb-6 rounded-4xl overflow-hidden">
      <video
        src={link}
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover rounded-4xl"
        loop
        muted
        playsInline
      />
      <button
        onClick={() => {
          setClick(!click);
          const video = videoRef.current;
          if (video.paused) {
            video.play();
          } else {
            video.pause();
          }
          if (videoRef.current.muted) {
            videoRef.current.muted = false;
          } else videoRef.current.muted = true;
        }}
        className="absolute ml-4 w-[47px] h-[47px] bottom-5 bg-gray-100 rounded-full flex items-center justify-center"
      >
        <img src={click ? pause : play} className="w-4" />
      </button>
    </div>
  );
};

export default Avatar;
