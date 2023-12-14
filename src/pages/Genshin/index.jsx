import styles from "./game.module.css";
import Selected from "../../components/selected/selected";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Selecting from "../../components/selecting/selecting";

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
