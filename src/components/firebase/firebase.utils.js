import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyATf1X0ha40eils-SPLd3aB6LuXdNx3XG4",
  authDomain: "mirha-clothing.firebaseapp.com",
  projectId: "mirha-clothing",
  storageBucket: "mirha-clothing.appspot.com",
  messagingSenderId: "351035594187",
  appId: "1:351035594187:web:b1a5927a161245c44f124e",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
