import React from "react";
import Carousel from "./Carousel";

const CarouselContainer = () => {
  const videos = [
    {
      link: "https://dynamic.heygen.ai/www/Avatar%20Hub%20-%20Page/AvatarIVCard.mp4?updatedAt=1748021546847#t=0.01",
      title: "Avatar IV",
      description:
        " Avatar IV is our most advanced model ever. Turn a single photo and script into a lifelike talking avatar, for humans, pets, aliens or anything you can imagine.",
    },
    {
      link: "https://dynamic.heygen.ai/www/Avatar%20Types%20Slider/VideoAvatarCard.webm/ik-video.mp4?updatedAt=1741892853532#t=0.01",
      title: "Video Avatar",
      description:
        "Film yourself, without being on camera. Generate an avatar that looks and sounds like you.",
    },
    {
      link: "https://dynamic.heygen.ai/www/Avatar%20Types%20Slider/PhotoAvatarCard.webm/ik-video.mp4?updatedAt=1741897136841#t=0.01",
      title: "Photo Avatar",
      description:
        "Turn a single image into a talking avatar, ideal for professional videos or interactive content.",
    },
  ];

  return (
    <>
      {/* Desktop view - unchanged */}
      <div className="hidden md:flex flex-wrap justify-between mx-28 mb-48">
        {videos.map((item, index) => (
          <Carousel key={index} data={item} index={index} />
        ))}
      </div>

      {/* Mobile view - horizontal scrollable */}
      <div className="md:hidden mb-28 mt-16 px-4">
        <div className="flex overflow-x-auto overflow-y-hidden gap-24 pb-4 scrollbar-hide">
          {videos.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-[calc(100vw-2rem)]">
              <Carousel data={item} index={index} isMobile={true} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CarouselContainer;
