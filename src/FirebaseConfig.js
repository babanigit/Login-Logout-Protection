// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

import { getFirestore } from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1VExSlrVY1Ah6fgIXoALGfkN-Jkyqjq0",
  authDomain: "neon-fort-374613.firebaseapp.com",
  projectId: "neon-fort-374613",
  storageBucket: "neon-fort-374613.appspot.com",
  messagingSenderId: "767257243624",
  appId: "1:767257243624:web:a637ef731ed8d5cc977e5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);

export const auth = getAuth(app);
export const db = getFirestore(app);