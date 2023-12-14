import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export const db = getFirestore(app);

export const login = () => {
  signInWithPopup(auth, provider).catch(console.error);
};

export const logout = () => {
  signOut(auth).catch(console.error);
};

export const onUserStateChange = (callback) => {
  onAuthStateChanged(auth, async (user) => {
    callback(user);
    if (user !== null) {
      const userId = user.email.split("@")[0];
      const userRef = await getDoc(doc(db, "users", userId));
      sessionStorage.setItem("user", userId);
      if (!userRef.exists()) {
        await setDoc(doc(db, "users", userId), {
          genshin: false,
          priconne: false,
        });
      }
    } else {
      sessionStorage.removeItem("user");
    }
  });
};
