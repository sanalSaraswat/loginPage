// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage'

// import firebase from "firebase/compat/app";
// import 'firebase/compat/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBS1uYem_O1K8ViKXKBK6W7LEg628x5kWo",
  authDomain: "de-project-f51f3.firebaseapp.com",
  projectId: "de-project-f51f3",
  storageBucket: "de-project-f51f3.appspot.com",
  messagingSenderId: "226595323888",
  appId: "1:226595323888:web:930911922c95986435a735",
  measurementId: "G-G9BXQ3R85F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)

export const storage = getStorage(app)