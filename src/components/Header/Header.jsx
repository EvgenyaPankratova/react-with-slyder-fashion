import styles from "./Header.module.css";
import logo from "../../img/logo.png";
import { BsTelephone } from "react-icons/bs";
import { useState } from "react";

const Header = () => {
  const [telIsVisible, setTelIsVisible] = useState('block');

  const telToggler = () => {
    telIsVisible === 'block' ? setTelIsVisible('none') : setTelIsVisible('block');
    }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.nav__logo_block}>
          <img className={styles.nav__logo_img} src={logo} alt="logo" />
        </div>

        <div
          className={styles.nav__tel}
          style={{display: `${telIsVisible}`}}
          // onClick={telToggler}
        >
          +7 (495) 495-49-54
        </div>
        <BsTelephone
          className={styles.nav__tel_icon}
          size="1.3rem"
          style={{display: `${!telIsVisible}`}}
          onClick={telToggler}
        />
      </nav>
    </header>
  );
};

export default Header;
