import styles from "./Hero.module.scss";
import heroImg from "../../assets/hero-img.png";

//components
import Button from "../../ui/button/Button";
import Button2 from "../../ui/button/Button2";

const Hero = () => {
  return (
    <section id="home" className={styles.hero__section}>
      <div className="container">
        <div>
          <h1>
            A dev that
            <br /> understands <br /> modern web.
          </h1>
          <p className={styles.hero__para}>
            Hi my name is Ujjwal sharma, I specialise in building web interfaces
            (and design) and marketing/creative websites. Currently I am
            freelancing on upwork and looking for new opportunities.
          </p>
          <Button link="mailto:ujjwal158b@gmail.com" text="Contact" />
          <Button2
            link="#projects"
            text="View projects"
            className={styles.button}
          />
        </div>
      </div>
      <img src={heroImg} alt="hero-img" className={styles.hero__img} />
    </section>
  );
};

export default Hero;
