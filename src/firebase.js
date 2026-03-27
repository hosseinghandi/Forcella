// role: setting up the fireBase configuration 
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, signInAnonymously } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBd-z-FRd2AK7nQ3u6mgry-Z0vCGt0MFWk",
  authDomain: "forcella-2690c.firebaseapp.com",
  databaseURL: "https://forcella-2690c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "forcella-2690c",
  storageBucket: "forcella-2690c.firebasestorage.app",
  messagingSenderId: "429406005406",
  appId: "1:429406005406:web:661ae12a333953ede9338f"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
// using auth to generate random userID 
// and creating stronger rules 
export const auth = getAuth(app)
signInAnonymously(auth)
