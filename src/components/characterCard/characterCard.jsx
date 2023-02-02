import React from 'react';
import styles from './characterCard.module.css';
export default function CharacterCard({selected, char, game, callback}) {
  return (
    <img
      src={`image\\${game}_img\\${char}.png`}
      className={selected ? styles.selected : styles.unselected}
      onClick={callback}
      alt={`${char}`}
    />
  );
}

