import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBWxjI2u1YrIENqslj2KeLre8iVAJBDM-8",
  authDomain: "drive-clone-dc6f8.firebaseapp.com",
  projectId: "drive-clone-dc6f8",
  storageBucket: "drive-clone-dc6f8.appspot.com",
  messagingSenderId: "388530668",
  appId: "1:388530668:web:021d1c8980c834607a00c9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const db = firebaseApp.firestore();

export { auth, provider, db, storage };
