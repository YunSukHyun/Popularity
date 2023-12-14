import styles from "./selecting.module.css";
import PCharacters from "../characters/p_characters";
import GCharacters from "../characters/g_characters";
import { useCallback } from "react";

const Selecting = ({ game }) => {
  const whatGame = useCallback(() => {
    if (game === "priconne") return <PCharacters game={game} />;
    else if (game === "genshin") return <GCharacters game={game} />;
  }, [game]);

  const selectNum = useCallback(() => {
    if (game === "priconne") return "Select 6";
    else if (game === "genshin") return "Select 3";
  }, [game]);

  return (
    <section className={styles.unselected}>
      <h2 className={styles.beforeSelect}>캐릭터</h2>
      {whatGame()}
      <div className={styles.prompt}>{selectNum()}</div>
    </section>
  );
};
export default Selecting;
