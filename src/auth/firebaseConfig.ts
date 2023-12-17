import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat"; // If you need compatibility

// Replace the following values with your own Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlnY_eYCIobXP2qVDs9ScUQ_aEsKsMomU",
  authDomain: "scoolize-ee61f.firebaseapp.com",
  projectId: "scoolize-ee61f",
  storageBucket: "scoolize-ee61f.appspot.com",
  messagingSenderId: "910621051962",
  appId: "1:910621051962:web:701404fd58d562b98df903",
  measurementId: "G-MV69G26LXP",
};

let app = initializeApp(firebaseConfig);

// Firebase services export
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, auth, firestore }; // Removed 'database' unless you define it
