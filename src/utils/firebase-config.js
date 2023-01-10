import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { C } from "../constants";

// normally these data must be stored in a .env file
const firebaseConfig = {
  apiKey: "AIzaSyAm9bMTvS_BUiD2YTdamMz5ly_zkd3Ywzk",
  authDomain: "netbeau-373d4.firebaseapp.com",
  projectId: "netbeau-373d4",
  storageBucket: "netbeau-373d4.appspot.com",
  messagingSenderId: "181480390649",
  appId: "1:181480390649:web:bac5b91f4780e17b1bc728",
  measurementId: "G-NZZFTS55QM",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const namesCollectionRef = collection(db, C.NAMES);
