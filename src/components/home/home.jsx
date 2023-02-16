import { collection, getDocs } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db, login, logout, onUserStateChange } from '../../service/firebase';
import Header from '../header/header';
import User from '../user/user';
import styles from "./home.module.css";

const Home = () => {
  const userCollectionRef = collection(db, "users");
  const [votedArr, setVotedArr] = useState([]);
  const [user, setUser] = useState();
  
  useEffect(() => {
    onUserStateChange(setUser);
    const getData = async () => {
      const data = await getDocs(userCollectionRef);
      let gc = 0, pc = 0;
      const voted = data.docs;
      voted.forEach(doc => {
        const tmp = doc.data()
        if(tmp.genshin){
          gc++;
        }
        if(tmp.priconne){
          pc++;
        }
      })
      setVotedArr([gc, pc]);
    }
    getData();
  }, [userCollectionRef]);

  return (
    <>
      <Header title='인기투표'/>
      <div className={styles.img}>
        <Link to="/genshin">
          <img className={styles.genshin} src="image/link_img/genshin.png" alt="genshin"/>
        </Link>
        <Link to="/priconne">
          <img className={styles.priconne} src="image/link_img/priconne.png" alt="priconne"/>
        </Link>
      </div>
      <div className={styles.user}>
        {user && <User user={user}></User>}
        {!user && <button className={styles.sign} onClick={login}>Login with Google</button>}
        {user && <button className={styles.sign} onClick={logout}>Logout</button>}
        <h1>원신 투표수: {votedArr[0]}</h1>
        <h1>프리코네 투표수: {votedArr[1]}</h1>
      </div>
     </>
  )
};

export default Home;