import styles from "./home.module.css";
import { login, logout, onUserStateChange } from "../../service/firebase";
import Header from "../../components/header/header";
import User from "../../components/user/user";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    onUserStateChange(setUser);
  }, []);

  return (
    <>
      <Header title="인기투표(종료)" />
      <div className={styles.img}>
        <Link to="/genshin">
          <img
            className={styles.genshin}
            src="image/link_img/genshin.png"
            alt="genshin"
          />
        </Link>
        <Link to="/priconne">
          <img
            className={styles.priconne}
            src="image/link_img/priconne.png"
            alt="priconne"
          />
        </Link>
      </div>
      <div className={styles.user}>
        {user && <User user={user}></User>}
        {!user && (
          <button className={styles.sign} onClick={login}>
            Login with Google
          </button>
        )}
        {user && (
          <button className={styles.sign} onClick={logout}>
            Logout
          </button>
        )}
      </div>
    </>
  );
};

export default Home;
