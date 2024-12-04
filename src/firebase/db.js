
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBIRtmaiSEgionLKhXxqHAcYzEi5_WxJPk",
  authDomain: "ekemini-project.firebaseapp.com",
  projectId: "ekemini-project",
  storageBucket: "ekemini-project.firebasestorage.app",
  messagingSenderId: "1012264974662",
  appId: "1:1012264974662:web:be05db6a31490527e68d47"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 