import styles from "./Experience.module.scss";

//components
import SectionHeading from "../../ui/section_heading/SectionHeading";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <section className={styles.experience__section}>
      <div className="container">
        <SectionHeading text="Experience" />
        <ExperienceCard
          role="Front-end Developer"
          company="TheDefiNetwork"
          companyLink="https://www.thedefi.network/"
          duration="September 2021 - November 2022"
          tasks={[
            "Wrote modern and performant code for client and internal projects.",
            ,
            "I worked with variety of different platforms including Webflow, Vercel and React.",
            "Created few design elements as well and developed custom newsletters.",
          ]}
        />
        <ExperienceCard
          role="Freelance"
          company="Upwork"
          companyLink="https://www.thedefi.network/"
          duration="May 2020 - Present"
          tasks={[
            "Created more than 20+ projects with webflow and custom code.",
            "Created templates in webflow platform and CMS websites.",
          ]}
        />
      </div>
    </section>
  );
};

export default Experience;
