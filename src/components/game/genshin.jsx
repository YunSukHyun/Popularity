import styles from "./game.module.css";
import Selected from "../selected/selected";
import Footer from "../footer/footer";
import Header from "../header/header";
import Selecting from "../selecting/selecting";

const Genshin = () => {
  return (
    <section className={styles.main}>
      <Header title="Genshin Impact" />
      <div className={styles.gContainer}>
        <Selecting game="genshin" />
        <Selected game="genshin" />
      </div>
      <Footer />
    </section>
  );
};

export default Genshin;
