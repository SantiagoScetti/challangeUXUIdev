import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { Toggle } from "../toggle/toggle";

export const Header = () => {
  const user = "Robert";
  return (
    <header className={styles.header}>
      <Link to={`/`} className={styles.logo}>
        <img src="logo.png" alt="Home" />
      </Link>
      <div className={styles.tools}>
        <div className={styles.user}>
          <img src="user.png" alt="user" />
          <p>Hi, {user}!</p>
         
        </div>
      </div>
      <Toggle/>
    </header>
  );
};
