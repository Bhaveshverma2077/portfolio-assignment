import DecoratedProfileImage from "./components/DecoratedProfileImage";
import TalkButton from "./components/TalkButton";
import BottomTalkButton from "./components/BottomTalkButton";
import { aboutMe } from "../../../data";

const AboutSection = () => {
  return (
    <div>
      <div className="relative m-6 md:m-12 animate-fade_translate">
        <TalkButton></TalkButton>
        <DecoratedProfileImage></DecoratedProfileImage>
        <p className="text-[5vw] md:text-5xl text-K-GREY-LIGHT">
          HELLO THERE<span className="text-K-ASCENT">,</span>
        </p>
        <p className="text-[4vw] md:text-3xl pb-4 text-nowrap">
          MY NAME IS BHAVESH VERMA
        </p>
        <p className="text-[6vw] md:text-6xl pb-4">
          <span className="text-K-GREY-DARK"> I AM A</span>
          <br />
          FULL STACK DEVELOPER<span className="text-K-ASCENT">.</span>
        </p>
        <BottomTalkButton></BottomTalkButton>
        <p className="pt-4 max-w-[35rem]">{aboutMe}</p>
      </div>
    </div>
  );
};

export default AboutSection;
