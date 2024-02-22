// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { config } from "./config";

import { getFirestore } from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: config.apiKey1,
  authDomain: config.apiKey1,
  projectId: config.apiKey1,
  storageBucket: config.apiKey1,
  messagingSenderId: config.apiKey1,
  appId: config.apiKey1
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);

export const auth = getAuth(app);
export const db = getFirestore(app);