import styles from "../Navbar/Navbar.module.css";

const NavbarResponsive = ({ hamActive }) => {
  return (
    <div className={`${styles.navResWrapper} ${hamActive && styles.open}`}>
      <div className={styles.navResInner}>
        <ul className={`${styles.navResLinks}`}>
          <li>
            <a href="/" className={`${styles.navR} center`}>
              Discover us
            </a>
          </li>
          <li>
            <a href="/" className={`${styles.navR} center`}>
              Investors
            </a>
          </li>
          <li>
            <a href="/" className={`${styles.navR} center`}>
              For Talent
            </a>
          </li>
        </ul>
        <select className={styles.navRdropDown} name="" id="">
          <span className="flag-icon flag-icon-us"></span>{" "}
          <option value="US">United States</option>
          <span className="flag-icon flag-icon-in"></span>{" "}
          <option value="IN">India </option>
        </select>
      </div>
    </div>
  );
};

export default NavbarResponsive;
