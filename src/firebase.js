import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdtoakxITDCvl0bUfAmhgHAfFAfEObwlw",
  authDomain: "clone-cf3e6.firebaseapp.com",
  projectId: "clone-cf3e6",
  storageBucket: "clone-cf3e6.appspot.com",
  messagingSenderId: "21087913662",
  appId: "1:21087913662:web:336ed396f57a637b2200ef",
  measurementId: "G-DEX6P1NVVG",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth, firebaseConfig };
