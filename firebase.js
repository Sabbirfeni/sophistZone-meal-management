// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArkj9kk_PYjwbDvDBhiTsmhhtDgdODgDU",
  authDomain: "sophistzonemealmanagement-dev.firebaseapp.com",
  databaseURL: "https://sophistzonemealmanagement-dev-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sophistzonemealmanagement-dev",
  storageBucket: "sophistzonemealmanagement-dev.appspot.com",
  messagingSenderId: "707847267777",
  appId: "1:707847267777:web:d0940a699dbd3a79b83b40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();