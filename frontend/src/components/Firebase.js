import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCfQSLXtv2jvSZ3LpvsdZYS4u30rCpUnAQ",
  authDomain: "hostel-management-davv.firebaseapp.com",
  projectId: "hostel-management-davv",
  storageBucket: "hostel-management-davv.appspot.com",
  messagingSenderId: "300484055876",
  appId: "1:300484055876:web:31725547c60f9b9884fd11",
  measurementId: "G-9J2JTQS3KW"
};

const app = firebase.initializeApp(firebaseConfig);
//var database = firebase.database();


const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      const fullName = user.displayName;
      const len = fullName.length;
      const email = user.email;

      if (email.slice(-14) !== "ietdavv.edu.in") { 
        alert("Please login with IET DAVV email");
        auth.signOut();
      } else {
        const userName = fullName.slice(0, len - 11);
        const fName = userName.split(" ")[0];
        localStorage.setItem("userName", userName);
        localStorage.setItem(
          "fname",
          fName.charAt(0) + fName.slice(1).toLowerCase()
        );
        localStorage.setItem("id", fullName.slice(len - 10));
        localStorage.setItem("email", email);
        localStorage.setItem("photo", user.photoURL);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const sign_out = () => {
  auth.signOut();
  localStorage.clear();
};

const db = app.firestore();

export { auth, signInWithGoogle, sign_out as signOut, db };
//export default database;
