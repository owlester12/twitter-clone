import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBNCO1HVQ734kHAV6JyLR55etYds2cAtZA",
    authDomain: "twitter-clone-f402f.firebaseapp.com",
    projectId: "twitter-clone-f402f",
    storageBucket: "twitter-clone-f402f.appspot.com",
    messagingSenderId: "364297121796",
    appId: "1:364297121796:web:68b3dd4599f07293c34551",
    measurementId: "G-W2PMP755PE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();

  export default db;
