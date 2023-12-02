// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQfFu-rrA-0zFma3CKus1aedDt8XaGY8M",
  authDomain: "sharpe-ai.firebaseapp.com",
  databaseURL: "https://sharpe-ai-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sharpe-ai",
  storageBucket: "sharpe-ai.appspot.com",
  messagingSenderId: "692943559794",
  appId: "1:692943559794:web:b2b0ad50c4280978d736eb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)