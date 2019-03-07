import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

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

//TODO: Break this function up into create profile and return profile
export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) {
    console.log("User is required for createUserProfileDocument");
    return;
  }

  // DB reference to user profile, if it exists
  const userRef = firestore.doc(`users/${user.uid}`);

  // docRef for user. Will always return something, even if it does not exist.
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user", error.message);
    }
  }

  return getUserDocument(user.uid);
};

export const getUserDocument = async uid => {
  if (!uid) return null;

  try {
    return firestore.collection("users").doc(uid);
  } catch (error) {
    console.error("Error fetching user", error.message);
  }
};

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

export default firebase;
