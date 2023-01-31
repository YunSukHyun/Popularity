import React from 'react';
import styles from './header.module.css';

const Header = (props) => {

  return (
    <header className={styles.header}>

      <h2 className={styles.title}>{props.title}</h2>
    </header>
  )
};

export default Header;