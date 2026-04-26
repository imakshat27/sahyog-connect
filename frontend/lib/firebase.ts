import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9dQmWCDY-nUue3vl8_8HGAJSZF6ZNT58",
  authDomain: "sahyog-connect.firebaseapp.com",
  projectId: "sahyog-connect",
  storageBucket: "sahyog-connect.firebasestorage.app",
  messagingSenderId: "156586691451",
  appId: "1:156586691451:web:b91045aad121040b058bde",
  measurementId: "G-6TM24049WB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);