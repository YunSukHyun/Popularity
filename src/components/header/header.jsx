import styles from "./header.module.css";
import { login, logout, onUserStateChange } from "../../service/firebase";
import { useEffect, useState } from "react";

const Header = ({ title }) => {
  const [user, setUser] = useState();
  useEffect(() => {
    onUserStateChange(setUser);
  }, [user]);
  return (
    <header className={styles.header}>
      <span className={styles.title}>{title}</span>
      {title !== "인기투표"
        ? !user && (
            <button className={styles.login} onClick={login}>
              Google login
            </button>
          )
        : ""}
      {user && (
        <button className={styles.login} onClick={logout}>
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;
