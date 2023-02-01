import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWcKhWQplXncNgT0blLv2mz1Y7T_7pvcU",
  authDomain: "genshin-impact-b8d2c.firebaseapp.com",
  projectId: "genshin-impact-b8d2c",
  storageBucket: "genshin-impact-b8d2c.appspot.com",
  messagingSenderId: "679800547088",
  appId: "1:679800547088:web:25d96a63c7580c8829e795",
  measurementId: "G-MX6NQTT1FB",
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
