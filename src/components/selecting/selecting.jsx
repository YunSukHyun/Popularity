import React from 'react';
import PCharacters from '../characters/p_characters';
import styles from './selecting.module.css';
import GCharacters from '../characters/g_characters';


const Selecting = ({game}) => {

  const whatGame = () => {
    if(game === "priconne")
      return <PCharacters game={game}/>
    else if(game === "genshin")
      return <GCharacters game={game}/>
  }
  const selectNum = () => {
    if(game === "priconne")
      return "Select 6"
    else if(game === "genshin")
      return "Select 3"
  }
  return (
    <section className={styles.unselected}>
      <h2 className={styles.beforeSelect}>캐릭터</h2>    
      {whatGame()}
      <div className={styles.prompt}>
        {selectNum()}
      </div>
    </section>
  )
};
export default Selecting;
