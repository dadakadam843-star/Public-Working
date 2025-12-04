import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDW9Au99PFKyMz7kBKypIKPIOex_ZkJ3uY",
  authDomain: "public-working.firebaseapp.com",
  projectId: "public-working",
  storageBucket: "public-working.firebasestorage.app",
  messagingSenderId: "266169229854",
  appId: "1:266169229854:web:300668fcf823e6d714840f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
