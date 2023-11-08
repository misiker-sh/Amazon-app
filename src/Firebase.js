// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import  "firebase/compat/auth";
import "firebase/compat/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQD7_gUTaDOrbCU0oUqBI3ewHMhacN9sc",
  authDomain: "clone-9784c.firebaseapp.com",
  projectId: "clone-9784c",
  storageBucket: "clone-9784c.appspot.com",
  messagingSenderId: "330026982712",
  appId: "1:330026982712:web:10e66ebd1461e465a1f5cd",
  measurementId: "G-98C8FVQEW1"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
export {auth ,db};