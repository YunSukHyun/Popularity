import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import Selected from '../selected/selected';
import Selecting from '../selecting/selecting';
import styles from './game.module.css';

const Priconne = () => {
  return (
    <section className={styles.main}>
      <Header title="Princess Connect Re:dive"/>
        <div className={styles.pContainer}>
          <Selecting game="priconne"/>
          <Selected game="priconne"/>
        </div>
      <Footer/>
    </section>
  )
};

export default Priconne;