import styles from "./ExperienceCard.module.scss";

const ExperienceCard = ({ role, company, companyLink, duration, tasks }) => {
  return (
    <div className={styles.card}>
      <h3>
        {role}
        {" @ "}
        <a className={styles.company__link} href={companyLink} targe="_blank">
          {company}
        </a>
      </h3>
      <span>{duration}</span>
      {tasks && (
        <ul>
          {tasks.map((task, id) => (
            <li key={id}>
              <p>{task}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExperienceCard;
