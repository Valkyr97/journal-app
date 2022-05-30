import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0S24EVcg2GS49cmgI8q8NFMBhSnDtiRE",
  authDomain: "journal-app-e7441.firebaseapp.com",
  projectId: "journal-app-e7441",
  storageBucket: "journal-app-e7441.appspot.com",
  messagingSenderId: "663644635807",
  appId: "1:663644635807:web:576b3c2fcef3adad29d8aa",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

const googleProvider = new GoogleAuthProvider();

export { firebaseApp, auth, db, googleProvider };
