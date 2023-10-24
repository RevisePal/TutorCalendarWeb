import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAU3HB05KdftEtD98lqQYIsb8qsI7XCSjI",
  authDomain: "kiddl-c969d.firebaseapp.com",
  projectId: "kiddl-c969d",
  storageBucket: "kiddl-c969d.appspot.com",
  messagingSenderId: "1066277274773",
  appId: "1:1066277274773:web:e454f586f9e8b1d349079c",
  measurementId: "G-49WZH50PZ0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, getDocs, collection };
