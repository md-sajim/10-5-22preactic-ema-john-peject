// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtJg0ml8pF1Pdl87ODGrmUOWUEoz-ByAg",
  authDomain: "ema-john-simple-new-ed4b7.firebaseapp.com",
  projectId: "ema-john-simple-new-ed4b7",
  storageBucket: "ema-john-simple-new-ed4b7.appspot.com",
  messagingSenderId: "249099891166",
  appId: "1:249099891166:web:983f78773baf204bbbed4f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
