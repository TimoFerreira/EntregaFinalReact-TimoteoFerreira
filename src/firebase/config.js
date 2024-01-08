// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCka6qTauwzaqp2l-HY5WIANUgHSFFQLg",
  authDomain: "proyecto-final-react-cd723.firebaseapp.com",
  projectId: "proyecto-final-react-cd723",
  storageBucket: "proyecto-final-react-cd723.appspot.com",
  messagingSenderId: "170400368805",
  appId: "1:170400368805:web:0f6245aec065954777a54c",
  measurementId: "G-W4PHBPFE74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);