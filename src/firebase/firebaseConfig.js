import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDradaxfcEBbjKjv6PY3sjNZwb8CQHVFoM",
  authDomain: "react-com49920-ecommerce.firebaseapp.com",
  projectId: "react-com49920-ecommerce",
  storageBucket: "react-com49920-ecommerce.appspot.com",
  messagingSenderId: "705782911868",
  appId: "1:705782911868:web:c529b0a7ce1acb3c48caf9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);