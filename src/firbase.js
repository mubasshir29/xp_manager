// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwpCxE3-mGwjUXm_egR3ngSvCmIfqfsRY",
  authDomain: "xp-manager-5b1e4.firebaseapp.com",
  projectId: "xp-manager-5b1e4",
  storageBucket: "xp-manager-5b1e4.appspot.com",
  messagingSenderId: "506507121275",
  appId: "1:506507121275:web:fcbbbe66442907d26d48de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app)
export default storage