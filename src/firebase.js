import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDcNCqKoUb99f-cseZ8we9RxI87EOCB1K0",
  authDomain: "my-chat-7f9a4.firebaseapp.com",
  projectId: "my-chat-7f9a4",
  storageBucket: "my-chat-7f9a4.appspot.com",
  messagingSenderId: "215008708674",
  appId: "1:215008708674:web:b7741115ed385ddfb8c5db"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
