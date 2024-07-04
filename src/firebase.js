// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBWxjI2u1YrIENqslj2KeLre8iVAJBDM-8",
  authDomain: "drive-clone-dc6f8.firebaseapp.com",
  projectId: "drive-clone-dc6f8",
  storageBucket: "drive-clone-dc6f8.appspot.com",
  messagingSenderId: "388530668",
  appId: "1:388530668:web:021d1c8980c834607a00c9",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, provider, db, storage };
