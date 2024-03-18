// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-48bb7.firebaseapp.com",
  projectId: "mern-blog-48bb7",
  storageBucket: "mern-blog-48bb7.appspot.com",
  messagingSenderId: "477430899898",
  appId: "1:477430899898:web:13f79aab7fb6b648de4e83"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);