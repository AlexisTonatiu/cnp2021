// Import the functions you need from the SDKs you need
import {getApps, initializeApp} from  "firebase/app";
import { getDatabase } from "@firebase/database";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyLUkjBhSTK1bLq-MfTAiKYVBSPFldj20",
  authDomain: "congreso-nacional-psicologia.firebaseapp.com",
  databaseURL: "https://congreso-nacional-psicologia-default-rtdb.firebaseio.com",
  projectId: "congreso-nacional-psicologia",
  storageBucket: "congreso-nacional-psicologia.appspot.com",
  messagingSenderId: "939481088075",
  appId: "1:939481088075:web:449c13359bc96e7dd18dce",
  measurementId: "G-6J44D4B443"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db

