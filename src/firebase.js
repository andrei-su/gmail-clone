// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  doc,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import {
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbWa73qNuuOfUywgsnLepqmtG7cT259cY",
  authDomain: "g-mail-clone9.firebaseapp.com",
  projectId: "g-mail-clone9",
  storageBucket: "g-mail-clone9.appspot.com",
  messagingSenderId: "306084055104",
  appId: "1:306084055104:web:fdaa415ccd8a92e3ddf7a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export {
  db,
  auth,
  collection,
  onSnapshot,
  addDoc,
  doc,
  query,
  orderBy,
  serverTimestamp,
  updateProfile,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
};
