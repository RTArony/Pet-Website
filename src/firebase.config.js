// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANqArU1CML9ePBzwu6IDEfk_IdUyu7dnE",
  authDomain: "safeheavenpaws.firebaseapp.com",
  projectId: "safeheavenpaws",
  storageBucket: "safeheavenpaws.firebasestorage.app",
  messagingSenderId: "83436140221",
  appId: "1:83436140221:web:971f2f26109a67abeb29d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
export default auth;