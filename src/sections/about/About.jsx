import styles from "./About.module.scss";

import aboutPhoto from "../../assets/about-photo.png";
//component
import SectionHeading from "../../ui/section_heading/SectionHeading";

const About = () => {
  return (
    <section id="about" className={styles.about__section}>
      <div className="container">
        <SectionHeading text="About" />
        <div className={styles.about__content__wrapper}>
          <div>
            <p>
              Hello! My name is Ujjwal Sharma and I create modern web interfaces
              and creative websites that completes a purpose or represents a
              brand. I started my journey of web development back in 2020 when
              pandemic hit. So I started learning new skills! <br />
              <br />
              Fast-forward to present, I’ve created more than 30+ projects
              including websites and have achieved 100% job success score on{" "}
              <a
                href="https://www.upwork.com/freelancers/~0136967bed90492e95"
                className="inline__link"
                target="_blank"
              >
                upwork
              </a>{" "}
              platform. I also worked as a full-time junior front-end developer
              at{" "}
              <a
                className="inline__link"
                href="https://www.thedefi.network/"
                target="_blank"
              >
                TheDefiNetwork
              </a>
              , but as NFT and web3 trend died down I was moved from full time
              to part time, so I am looking for new opportunities that can
              enhance my skills. <br /> <br />
              Here are few technologies I’ve been working with recently:
            </p>
            <div className={styles.tech__div}>
              <ul>
                <li>Javascript</li>
                <li>Webflow</li>
                <li>Typescript</li>
              </ul>
              <ul>
                <li>ReactJs</li>
                <li>NextJs</li>
                <li>NodeJs</li>
              </ul>
            </div>
          </div>
          <img src={aboutPhoto} alt="ujjwal sharma" />
        </div>
      </div>
    </section>
  );
};

export default About;
