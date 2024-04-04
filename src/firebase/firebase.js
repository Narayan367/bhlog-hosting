// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBZCAtbJj-sTmeTSv1tkXt_3MotGiOTnw",
  authDomain: "blog-app-35347.firebaseapp.com",
  projectId: "blog-app-35347",
  storageBucket: "blog-app-35347.appspot.com",
  messagingSenderId: "104989036661",
  appId: "1:104989036661:web:3ae4ddcadfd1cca5f1e83c",
  measurementId: "G-DQLVEBTNB8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore(app);


