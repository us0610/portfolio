import styles from "./Button2.module.scss";

const Button2 = ({ link, text, className }) => {
  return (
    <a href={link} className={`${styles.button} ${className}`}>
      {text}
    </a>
  );
};

export default Button2;
