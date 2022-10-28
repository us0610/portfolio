import styles from "./SectionHeading.module.scss";

const SectionHeading = ({ text }) => {
  return (
    <div className={styles.heading__div}>
      <h2>{text}</h2>
      <div className={styles.line}></div>
    </div>
  );
};

export default SectionHeading;
