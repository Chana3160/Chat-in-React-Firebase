import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAtWH2elPJsA1US9CIscxaYI8LCBjb0vwg",
  authDomain: "chat-4c03f.firebaseapp.com",
  projectId: "chat-4c03f",
  storageBucket: "chat-4c03f.appspot.com",
  messagingSenderId: "1032464175979",
  appId: "1:1032464175979:web:8d7bb847b537229017322e"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth();
 export const storage = getStorage();
 export const db = getFirestore();