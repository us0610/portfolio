import { useState } from "react";

import styles from "./Navbar.module.scss";

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

  return (
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
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className={styles.nav__socials__wrapper}>
            <a className={styles.socials} href="">
              <img src={linkedIn} alt="linkedin" />
            </a>
            <a className={styles.socials} href="">
              <img src={upworkLogo} alt="upwork" />
            </a>
            <Button text="Resume" />
          </div>
          <p onClick={onMenuClick} className={styles.menu__btn}>
            {menu ? "close" : "Menu"}
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
