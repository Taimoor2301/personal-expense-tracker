// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXnM9h5z_S8aiXuymqEsSIE2yzzzn6gdc",
  authDomain: "personal-expense-tracker-1.firebaseapp.com",
  projectId: "personal-expense-tracker-1",
  storageBucket: "personal-expense-tracker-1.appspot.com",
  messagingSenderId: "724598479562",
  appId: "1:724598479562:web:890716df9fb23f5c33b233",
  measurementId: "G-NZQJKC77E8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const itemCollection = collection(db, "items");
