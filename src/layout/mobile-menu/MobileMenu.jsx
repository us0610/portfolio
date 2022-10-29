import styles from "./MobileMenu.module.scss";

//logo socials
import linkedIn from "../../assets/akar-icons_linkedin-box-fill.svg";
import upworkLogo from "../../assets/bxl_upwork.svg";

import Button from "../../ui/button/Button";

const MobileMenu = ({ onMobileMenu }) => {
  return (
    <div className={styles.mobile__menu}>
      <span onClick={onMobileMenu} className={styles.menu__close__btn}>
        <p>Close</p>
      </span>
      <div>
        <ul>
          <li>
            <a onClick={onMobileMenu} href="#home">
              Home
            </a>
          </li>
          <li>
            <a onClick={onMobileMenu} href="#about">
              About
            </a>
          </li>
          <li>
            <a onClick={onMobileMenu} href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a
              onClick={onMobileMenu}
              target="_blank"
              href="mailto:ujjwal158b@gmail.com"
            >
              Contact
            </a>
          </li>
        </ul>

        <div className={styles.mobile__socials__wrapper}>
          <div>
            <a
              className={styles.socials}
              href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BCbY%2FwD%2FTR1C2bIL20FNN1Q%3D%3D"
              target="_blank"
            >
              <img src={linkedIn} alt="linkedin" />
            </a>
            <a
              className={styles.socials}
              href="https://www.upwork.com/freelancers/~0136967bed90492e95"
              target="_blank"
            >
              <img src={upworkLogo} alt="upwork" />
            </a>
          </div>
          <Button text="Resume" />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
