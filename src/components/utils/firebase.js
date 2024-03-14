// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAC2P04oHbJcc2JiqAB-polF6IDEvtZJZo",
  authDomain: "shopify-6baf7.firebaseapp.com",
  projectId: "shopify-6baf7",
  storageBucket: "shopify-6baf7.appspot.com",
  messagingSenderId: "576323798099",
  appId: "1:576323798099:web:170e51c6b227ec2c11b2a6",
  measurementId: "G-LD5CW2ZSFH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
