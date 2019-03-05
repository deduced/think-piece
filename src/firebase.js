import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDNIW6ZEGR6bbfm3xhrEDI1-S73i1gfbzA",
  authDomain: "think-piece-b9d5b.firebaseapp.com",
  databaseURL: "https://think-piece-b9d5b.firebaseio.com",
  projectId: "think-piece-b9d5b",
  storageBucket: "think-piece-b9d5b.appspot.com",
  messagingSenderId: "88137199304"
};

firebase.initializeApp(config);

if (process.env.NODE_ENV === "development") {
  //TODO: - remove this
  //This is just to learn and play with the firebase in window object.
  window.firebase = firebase;
}

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
