import React from 'react';
import { useDispatch } from 'react-redux';
import { gUnselect } from '../../slice/genshinSlice';
import { pUnselect } from '../../slice/priconneSlice';
import styles from './selectedChar.module.css';
const SelectedChar = ({game, char}) => {
  const dispatch = useDispatch();
  const unSelect = (e) => {
    const beUnSelected = e.target.alt;
    if(game === "priconne"){
      dispatch(pUnselect(beUnSelected));
    }
    else if(game === "genshin"){
      dispatch(gUnselect(beUnSelected));
    }
  }
  return (
    <img
      onClick={unSelect}
      src={`image\\${game}_img\\${char}.png`}
      className={styles.item}alt={`${char}`}
    />
  )
};

export default SelectedChar;