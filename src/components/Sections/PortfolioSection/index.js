import ProjectTile from "./components/ProjectTile";
import { projects } from "../../../data";

const PortfolioSection = () => {
  return (
    <div className="p-6 md:p-12 text-[0.8rem] w-full font-normal flex flex-wrap overflow-x-auto h-full gap-2 custom_scrollbar">
      {projects.map((project) => (
        <>
          <ProjectTile
            name={project.name}
            imageUrl={project.imageUrl}
            deployLink={project.deployLink}
            githubRepoLink={project.githubRepoLink}
          ></ProjectTile>
        </>
      ))}
    </div>
  );
};

export default PortfolioSection;
