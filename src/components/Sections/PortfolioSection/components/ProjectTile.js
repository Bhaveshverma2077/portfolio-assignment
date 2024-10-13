import { Link } from "react-router-dom";
import CheronRightIcon from "../../../icons/ChevronRightIcon";
import GithubIcon from "../../../icons/GithubIcon";

const ProjectTile = ({ name, githubRepoLink, deployLink, imageUrl }) => {
  return (
    <div className="w-full md:w-80 flex flex-col gap-2">
      <div className="border border-K-GREY-LIGHT w-full h-64 relative overflow-hidden">
        <img
          className="object-cover h-full w-full origin-left hover:scale-110 transition-transform"
          src={imageUrl}
          alt={`${name} project image`}
        ></img>
      </div>
      <div className="flex gap-2">
        <div className="border border-K-GREY-LIGHT w-1/2 h-12 flex items-center justify-center">
          <p>{name.toUpperCase()}</p>
        </div>
        <Link
          to={githubRepoLink}
          className="hover:bg-K-GREY-DARK border border-K-GREY-LIGHT w-1/4 h-12 flex items-center justify-center"
        >
          <div className="scale-[0.3] ">
            <GithubIcon></GithubIcon>
          </div>
        </Link>
        <Link
          to={deployLink}
          className={`${
            deployLink == "#" ? "bg-K-GREY-LIGHT" : "bg-K-ASCENT"
          } border border-K-GREY-LIGHT w-1/4 h-12 flex items-center justify-center text-black group`}
        >
          <div
            className={`${
              deployLink == "#" ? "" : "group-hover:scale-125"
            } transition-transform`}
          >
            <CheronRightIcon></CheronRightIcon>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectTile;
