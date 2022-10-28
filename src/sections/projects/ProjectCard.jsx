import styles from "./ProjectCard.module.scss";

import Button from "../../ui/button/Button";

const ProjectCard = ({ img, desc, name, link }) => {
  return (
    <div className={styles.project__card}>
      <div className={styles.project__card__text__content}>
        <h3>{name}</h3>
        <p>{desc}</p>
        <Button link={link} text="View live" />
      </div>
      <img className={styles.project__img} src={img} alt={name} />
    </div>
  );
};

export default ProjectCard;
