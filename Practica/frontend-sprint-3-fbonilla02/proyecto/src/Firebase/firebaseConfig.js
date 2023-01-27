
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAu1d0dzFQuzCxOxY6qRjckXMnQoSORSp4",
  authDomain: "sprit3-proyecto.firebaseapp.com",
  projectId: "sprit3-proyecto",
  storageBucket: "sprit3-proyecto.appspot.com",
  messagingSenderId: "182621726667",
  appId: "1:182621726667:web:a3a41a8e5d429a1d15b84e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const google = new GoogleAuthProvider()
export const dataBase = getFirestore()
export default app
