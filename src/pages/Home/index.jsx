import styles from "./home.module.css";
import { login, logout, onUserStateChange } from "../../service/firebase";
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
    <div className={styles.home}>
      <div className={styles.img}>
        <img
          className={styles.priconne}
          src="image/link_img/priconne.png"
          alt="priconne"
        />

        <img
          className={styles.genshin}
          src="image/link_img/genshin.png"
          alt="genshin"
        />

        <Link to="/starrail">
          <img
            className={styles.starrail}
            src="image/link_img/starrail.png"
            alt="starrail"
          />
        </Link>
      </div>
      <div className={styles.user}>
        {user && <User user={user}></User>}
        {!user && (
          <button className={styles.sign} onClick={login}>
            <img
              className={styles.google}
              src="image/Google.png"
              alt="google"
            />
            Sign in with Google
          </button>
        )}
        {user && (
          <button className={styles.sign} onClick={logout}>
            Logout
          </button>
        )}
      </div>
      <Link to={"/admin"}>Admin</Link>
    </div>
  );
};

export default Home;
