// Initialize Firebase
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

// Remplacez les valeurs suivantes par vos propres configurations Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBlnY_eYCIobXP2qVDs9ScUQ_aEsKsMomU",
  authDomain: "scoolize-ee61f.firebaseapp.com",
  projectId: "scoolize-ee61f",
  storageBucket: "scoolize-ee61f.appspot.com",
  messagingSenderId: "910621051962",
  appId: "1:910621051962:web:701404fd58d562b98df903",
  measurementId: "G-MV69G26LXP"
};
let app:any
// Initialisation de Firebase
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
} else {
 app = firebase.app(); // si déjà initialisé, utilisez cette instance
}

// Exportation des services Firebase
const auth = getAuth(app);
const database = firebase.database();
const firestore = getFirestore(app);

export { auth, database,firestore };
