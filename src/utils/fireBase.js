// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPDMGf-PYLbh4MfpNRlssvZDop3mP2xig",
  authDomain: "react-ecom-ac3d3.firebaseapp.com",
  projectId: "react-ecom-ac3d3",
  storageBucket: "react-ecom-ac3d3.appspot.com",
  messagingSenderId: "516314580932",
  appId: "1:516314580932:web:c033a0d6372e7b9590c691"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db