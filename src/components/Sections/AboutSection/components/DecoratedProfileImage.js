// import Image from "next/image";
import DecoratedLines from "./DecoratedLines";

const IMGURL = "/images/my_photo.jpeg";

const DecoratedProfileImage = () => {
  return (
    <div className="scale-[80%] md:scale-100 origin-left mb-6 md:mb-12 mt-12 md:mt-20 relative">
      <DecoratedLines></DecoratedLines>
      <img
        className="h-44 w-44 object-cover  hover:scale-110 transition-transform"
        src={IMGURL}
        // priority
        // loading="eager"
        // width={300}
        // height={300}
        alt=""
      ></img>
    </div>
  );
};
export default DecoratedProfileImage;
