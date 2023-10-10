// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGfrHdyT7qYuaCRgJbWDABT5ajdRJ-WCA",
  authDomain: "assignment-9-fa782.firebaseapp.com",
  projectId: "assignment-9-fa782",
  storageBucket: "assignment-9-fa782.appspot.com",
  messagingSenderId: "284393849395",
  appId: "1:284393849395:web:67fb6420d2f9a845e61946"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app