// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGzkpqvEM1WHYsegv5kE3I-fYfwm6K3sY",
  authDomain: "se2-project-8a779.firebaseapp.com",
  projectId: "se2-project-8a779",
  storageBucket: "se2-project-8a779.appspot.com",
  messagingSenderId: "941499991557",
  appId: "1:941499991557:web:7f855506342fb21bf87e6c",
  measurementId: "G-35Q8X4RH9P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);