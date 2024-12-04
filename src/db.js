// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDceCt9Eu6ome9mDEgLdEn_23YMc_mB5uY",
  authDomain: "ekemini-akpan.firebaseapp.com",
  projectId: "ekemini-akpan",
  storageBucket: "ekemini-akpan.firebasestorage.app",
  messagingSenderId: "476871427431",
  appId: "1:476871427431:web:9528055b2d956d527b9bc2",
  measurementId: "G-RT9P18CH1E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);