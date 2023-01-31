import React from 'react';
import styles from './user.module.css';
export default function User({user: {photoURL, displayName}}) {
  return (
    <div className={styles.profile}>
      <img className={styles.img} src={photoURL} alt={displayName}/>
      <span>{displayName}</span>
    </div>
  );
}

