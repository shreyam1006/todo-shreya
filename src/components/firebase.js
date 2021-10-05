// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP-TbG758onIyAZ5Lprq6kSXy6JN_4vb0",
  authDomain: "todo-firebase-b8a59.firebaseapp.com",
  projectId: "todo-firebase-b8a59",
  storageBucket: "todo-firebase-b8a59.appspot.com",
  messagingSenderId: "100049525961",
  appId: "1:100049525961:web:17070bb1a1756348650118"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();