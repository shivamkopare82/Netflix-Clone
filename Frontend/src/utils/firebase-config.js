
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBtxOvIMp9714XxjJylKLhguDVzAsIIkIw",
  authDomain: "react-netflix-clone-893a5.firebaseapp.com",
  projectId: "react-netflix-clone-893a5",
  storageBucket: "react-netflix-clone-893a5.appspot.com",
  messagingSenderId: "1004338813667",
  appId: "1:1004338813667:web:28f485906a003c4aba43d6",
  measurementId: "G-JJ5T4E2LKE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
