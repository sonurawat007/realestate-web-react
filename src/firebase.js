// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvxPVgylEWhDrfkjRkHpEg6PNGZfGTR9M",
  authDomain: "realtor-react-app-f3256.firebaseapp.com",
  projectId: "realtor-react-app-f3256",
  storageBucket: "realtor-react-app-f3256.appspot.com",
  messagingSenderId: "543549078566",
  appId: "1:543549078566:web:28162144ed704df55ffae7"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()