// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcF1gOolSnDD2QPuTvVic29QPmvD1fkXg",
  authDomain: "realtor-react-8be87.firebaseapp.com",
  projectId: "realtor-react-8be87",
  storageBucket: "realtor-react-8be87.firebasestorage.app",
  messagingSenderId: "627002903411",
  appId: "1:627002903411:web:a7279f01f4373a7e239306",
  measurementId: "G-6EFD6LX41P"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();