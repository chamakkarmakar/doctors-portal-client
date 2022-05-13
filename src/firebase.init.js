// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5TViP4zGX-RTFr5jhGvJ_MF8XYb9SIWM",
  authDomain: "doctors-portal-4c13f.firebaseapp.com",
  projectId: "doctors-portal-4c13f",
  storageBucket: "doctors-portal-4c13f.appspot.com",
  messagingSenderId: "695921213951",
  appId: "1:695921213951:web:8b995034a504b1b645e7ca",
  measurementId: "G-5YD16F0W0Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
