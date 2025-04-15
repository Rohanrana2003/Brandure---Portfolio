/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA80BX_Guj4c8S3LMZjnKx6H7PUKMDgi_E",
  authDomain: "brandure-58975.firebaseapp.com",
  projectId: "brandure-58975",
  storageBucket: "brandure-58975.firebasestorage.app",
  messagingSenderId: "765407057690",
  appId: "1:765407057690:web:8a97e4ab2ef76d4cd3fea3",
  measurementId: "G-PY65TKP1T4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
