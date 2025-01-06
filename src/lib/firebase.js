import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatapp-react-d8ed7.firebaseapp.com",
  projectId: "chatapp-react-d8ed7",
  storageBucket: "chatapp-react-d8ed7.firebasestorage.app",
  messagingSenderId: "876193559603",
  appId: "1:876193559603:web:06640610b8340e86139f46"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()

// ! PAUSED INDEFINITELY BECAUSE OF PAID RESTRICTION FOR FIREBASE STORAGE