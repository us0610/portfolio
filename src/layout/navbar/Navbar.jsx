import { useState } from "react";

import styles from "./Navbar.module.scss";

import MobileMenu from "../mobile-menu/MobileMenu";

//logo socials
import linkedIn from "../../assets/akar-icons_linkedin-box-fill.svg";
import upworkLogo from "../../assets/bxl_upwork.svg";

//components
import Button from "../../ui/button/Button";

const Navbar = () => {
  const [menu, setMenu] = useState();

  const onMenuClick = () => {
    setMenu((prevMenu) => !prevMenu);
  };

  const mobileMenuClose = () => {
    setMenu(false);
  };

  return (
    <>
      {menu && <MobileMenu onMobileMenu={mobileMenuClose} />}
      <nav>
        <div className="container">
          <div className={styles.nav__flex__wrapper}>
            <span className={styles.logo}>
              <a href="./">Ujjwal Sharma</a>
            </span>
            <div>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a target="_blank" href="mailto:ujjwal158b@gmail.com">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.nav__socials__wrapper}>
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
              <Button link="./Resume.pdf" text="Resume" />
            </div>
            <p onClick={onMenuClick} className={styles.menu__btn}>
              {menu ? "close" : "Menu"}
            </p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
