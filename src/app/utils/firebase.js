// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-d733e.firebaseapp.com",
  projectId: "blog-d733e",
  storageBucket: "blog-d733e.firebasestorage.app",
  messagingSenderId: "579838234151",
  appId: "1:579838234151:web:5c1608361a5fefdc0a0802",
  measurementId: "G-VCZN27DK5J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
