import styles from "./character.module.css";
import CharacterCard from "../characterCard/characterCard";
// import { useCallback, useState } from "react";

const Character = ({ thumbnailURL, name }) => {
  // const handleSelect = useCallback((e) => {}, []);

  // const [xy, setXY] = useState({ x: 0, y: 0 });

  // const handleMouseMove = useCallback((e) => {
  //   setXY({ x: e.clientX, y: e.clientY });
  // }, []);
  return (
    <div className={styles.imgBox}>
      <div className={styles.tooltip}>
        <CharacterCard name={name} url={thumbnailURL} />
        {/* <img
          style={{ top: `${xy.y + 10}px`, left: `${xy.x + 5}px` }}
          className={styles.tooltipImg}
          src={`image\\${game}_tooltip\\${char}.png`}
          alt={`${char}`}
        /> */}
      </div>
      <div className={styles.decBox}>{name}</div>
    </div>
  );
};

export default Character;
