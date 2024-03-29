import { Reveal } from "@/components/others/RevealAnimation";
import ProjectCard from "./ProjectCard";
import projectsData from "./ProjectDataConst";

function Projects() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center gap-1 text-lg">
      <Reveal>
        <h1 className="flex justify-center text-7xl md:text-8xl italic text-center text-accent">
          recent projects
        </h1>
      </Reveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-4">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            projectName={project.title}
            projectImages={project.image}
            projectDescription={project.description}
            stack={project.stack}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
