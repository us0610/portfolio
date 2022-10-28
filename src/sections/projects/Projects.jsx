import styles from "./Projects.module.scss";

import SectionHeading from "../../ui/section_heading/SectionHeading";
import ProjectCard from "./ProjectCard";

import PROJECTS from "./ProjectsList";

const Projects = () => {
  return (
    <section id="projects" className={styles.projects__section}>
      <div className="container">
        <SectionHeading text="Projects" />
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            desc={project.desc}
            img={project.img}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
