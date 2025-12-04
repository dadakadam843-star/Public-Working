import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDW9Au99PFKyMz7kBKypIKPIOex_ZkJ3uY",
  authDomain: "public-working.firebaseapp.com",
  projectId: "public-working",
  storageBucket: "public-working.firebasestorage.app",
  messagingSenderId: "266169229854",
  appId: "1:266169229854:web:300668fcf823e6d714840f",
  measurementId: "G-L6CJBWYPXN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
};
