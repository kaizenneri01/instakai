import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDY83StAfxAdL-FW0QvdzSsiZlgDlFMQXY",
  authDomain: "instakai-717ad.firebaseapp.com",
  databaseURL:
    "https://instakai-717ad-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "instakai-717ad",
  storageBucket: "instakai-717ad.appspot.com",
  messagingSenderId: "813679395908",
  appId: "1:813679395908:web:74f8125cad265d1088e811",
  measurementId: "G-2R7D1XLXRG",
});

const auth = firebaseConfig.auth();
const database = firebaseConfig.firestore();
const storage = firebaseConfig.storage();

export { auth, firebaseConfig, database, storage, firebase };
