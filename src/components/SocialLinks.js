import SocialLinkTile from "./SocialLinkTile";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import EmailIcon from "./icons/EmailIcon";
import FacebookIcon from "./icons/FacebookIcon";
import TwitterIcon from "./icons/TwitterIcon";

const SocialLinks = () => {
  return (
    <div className="flex flex-col">
      <SocialLinkTile
        icon={<GithubIcon />}
        name={"GITHUB"}
        href={"https://github.com/Bhaveshverma2077"}
      ></SocialLinkTile>
      <SocialLinkTile
        icon={<LinkedinIcon />}
        name={"Linkedin"}
        href={"https://www.linkedin.com/in/bhaveshverma1/"}
      ></SocialLinkTile>
      <SocialLinkTile
        icon={<EmailIcon />}
        name={"Email"}
        href={"mailto:bhaveshverma2077@gmail.com"}
        text={"bhaveshverma2077@gmail.com"}
      ></SocialLinkTile>
      <SocialLinkTile
        icon={<FacebookIcon />}
        name={"Facebook"}
        href={"#"}
        text={"I am not on facebook"}
      ></SocialLinkTile>
      <SocialLinkTile
        icon={<TwitterIcon />}
        name={"X"}
        href={"#"}
        text={"I am not on X"}
      ></SocialLinkTile>
    </div>
  );
};

export default SocialLinks;
