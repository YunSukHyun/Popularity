import styles from "./characterCard.module.css";

// const CharacterCard = ({ selected, char, game, callback }) => {
const CharacterCard = ({ url, name }) => {
  return (
    <img
      // src={`image\\${game}_img\\${char}.png`}
      src={url}
      // className={selected ? styles.selected : styles.unselected}
      className={styles.unselected}
      alt={`${name} 이미지`}
    />
  );
};

export default CharacterCard;
