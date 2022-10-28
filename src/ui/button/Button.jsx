import styles from "./Button.module.scss";

const Button = ({ link, text, className }) => {
  return (
    <a target="_blank" href={link} className={`${styles.button} ${className}`}>
      {text}
    </a>
  );
};

export default Button;
