import ca from "../assets/content-auth.avif";
import c2 from "../assets/c2-pa.avif";
import sm1 from "../assets/social-media/linkedin.png";
import sm2 from "../assets/social-media/youtube.png";
import sm3 from "../assets/social-media/twitter.png";

const Footer = () => {
  return (
    <div className="min-w-full h-[150px] bg-zinc-50 flex justify-between items-center px-32 pt-4">
      <div className="text-[9px] font-noto leading-5">
        <p className="shadow-2xl">@Copyright Heygen</p>
        <p className="shadow-2xl">
          12130 Millennium Drive Suits 300, Los Angeles, CA 90094
        </p>
      </div>
      <div className="flex justify-evenly w-32">
        <img className="w-12 h-6" src={ca} alt="content_auth" />
        <img className="w-6 h-6" src={c2} alt="content_auth" />
      </div>
      <div className="flex justify-between w-32">
        <img
          className="w-4 h-4 cursor-pointer"
          src={sm1}
          alt="linkedin"
          onClick={() =>
            (window.location.href = "https://www.linkedin.com/company/heygen/")
          }
        />
        <img
          className="w-4 h-4 cursor-pointer"
          src={sm2}
          alt="youtube"
          onClick={() =>
            (window.location.href = "https://www.youtube.com/@heygen_official")
          }
        />
        <img
          className="w-4 h-4 cursor-pointer"
          src={sm3}
          alt="twitter"
          onClick={() =>
            (window.location.href = "https://x.com/heygen_official?mx=2")
          }
        />
      </div>
    </div>
  );
};

export default Footer;
