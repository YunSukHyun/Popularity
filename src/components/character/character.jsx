import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './character.module.css';
import { gSelect } from '../../slice/genshinSlice';
import { pSelect } from '../../slice/priconneSlice';
const Character = ({char, game}) => {
  const pCharSelected = useSelector(state => state.priconne.pCharSelected);
  const gCharSelected = useSelector(state => state.genshin.gCharSelected);
  const dispatch = useDispatch();
  const handleSelect = (e) => {
    const selectedChar = e.target.alt;
    if(game === 'priconne'){
      const pLen = pCharSelected.length;
      if(pLen >= 6){
        alert("6개이상 선택할 수 없음\nCan't select more than 6");
        return;
      }
      for(let i = 0; i < pLen; i++){
        if(pCharSelected[i] === selectedChar){
          alert("중복 선택 불가\nCan't select same character twice");
          return;
        }
      }
      dispatch(pSelect(selectedChar));
    }
    else if(game === 'genshin'){
      const gLen = gCharSelected.length;
      if(gLen >= 3){
        alert("3개이상 선택할 수 없음\nCan't select more than 3");
        return;
      }
      for(let i = 0; i < gLen; i++){
        if(gCharSelected[i] === selectedChar){
          alert("중복 선택 불가\nCan't select same character twice");
          return;
        }
      }
      dispatch(gSelect(selectedChar));
    }
  }
  const [xy, setXY] = useState({x: 0, y:0});
  const handleMouseMove = (e) => {
    setXY({x: e.clientX, y: e.clientY});
  }
  return (
    <div className={styles.imgBox}>
      <div className={styles.tooltip} onMouseMove={handleMouseMove}>
      <img
        src={`image\\${game}_img\\${char}.png`}
        className={styles.item}
        onClick={handleSelect}
        alt={`${char}`}/>
        <img
        style={{top: `${xy.y+10}px`, left: `${xy.x + 5}px`}}
        className={styles.tooltipImg}
        src={`image\\${game}_tooltip\\${char}.png`}
        alt={`${char}`}
        />
      </div>
      <div className={styles.decBox}>{char}</div>
    </div>
  );
};

export default Character;