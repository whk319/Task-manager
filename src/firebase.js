import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQCbF3gm4fBxypu-Makzqvh6l_XDNvTKg",
  authDomain: "bonus-hunter-9844b.firebaseapp.com",
  databaseURL: "https://bonus-hunter-9844b-default-rtdb.firebaseio.com",
  projectId: "bonus-hunter-9844b",
  storageBucket: "bonus-hunter-9844b.appspot.com",
  messagingSenderId: "230297996032",
  appId: "1:230297996032:web:eca4b79613e41d1f3b01e5",
  measurementId: "G-GNJZX41R91"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const analytics = getAnalytics(app);

export {db}