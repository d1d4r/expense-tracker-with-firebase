// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFln92niFdtP77_DIPpNPMrJDNrrhxSQc",
  authDomain: "expense-tracker-94863.firebaseapp.com",
  projectId: "expense-tracker-94863",
  storageBucket: "expense-tracker-94863.appspot.com",
  messagingSenderId: "283918746438",
  appId: "1:283918746438:web:fe5de1d258db8667d51b47",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);