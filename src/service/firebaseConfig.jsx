/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp,getApps,getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import { get } from "http";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlBSsa2R_KNR178d0W1H4IKAZEsNYvWh4",
  authDomain: "travel-ai-ba549.firebaseapp.com",
  projectId: "travel-ai-ba549",
  storageBucket: "travel-ai-ba549.appspot.com",
  messagingSenderId: "709077275292",
  appId: "1:709077275292:web:5eda3c1225ee6bfa6a9359",
  measurementId: "G-M1DEN10GK9"
};

// Initialize Firebase
const app=!getApps().length ? initializeApp(firebaseConfig) : getApp();
// export const app = initializeApp(firebaseConfig);
const db=getFirestore(app)

export{app,db}
