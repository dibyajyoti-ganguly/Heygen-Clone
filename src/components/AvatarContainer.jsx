import React from "react";
import Avatar from "./Avatar";

const avatarList = [
  "https://dynamic.heygen.ai/www/Home%20-%20Page/HomeAvatar0001%20(2).mp4?updatedAt=1742837143307#t=0.01",
  "https://dynamic.heygen.ai/www/Home%20-%20Page/HomeAvatar0002-Compressed.mp4?updatedAt=1742837626785#t=0.01",
  "https://dynamic.heygen.ai/www/Home%20-%20Page/HomeAvatar0003%20(Compressed).mp4?updatedAt=1742838975657#t=0.01",
  "https://dynamic.heygen.ai/www/Home%20-%20Page/HomeAvatar0004%20(Compressed).mp4?updatedAt=1742838975696#t=0.01",
  "https://dynamic.heygen.ai/www/Home%20-%20Page/HomeAvatar0005%20(Compressed).mp4?updatedAt=1742838976074#t=0.01",
  "https://dynamic.heygen.ai/www/Home%20-%20Page/HomeAvatar0006%20(Compressed).mp4?updatedAt=1742838976134#t=0.01",
  "https://dynamic.heygen.ai/www/Home%20-%20Page/HomeAvatar0007%20(Compressed).mp4?updatedAt=1742838975485#t=0.01",
  "https://dynamic.heygen.ai/www/Home%20-%20Page/HomeAvatar0008%20Compressed.mp4?updatedAt=1742839136046#t=0.01",
];

const AvatarContainer = () => {
  return (
    <div className="flex flex-wrap justify-evenly mx-28 my-5">
      {avatarList.map((item) => {
        return <Avatar data={item} />;
      })}
    </div>
  );
};

export default AvatarContainer;
