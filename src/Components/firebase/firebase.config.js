// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhHj91_f1XPc59VXLKH0YLq83GwZxeul0",
  authDomain: "car-client-project.firebaseapp.com",
  projectId: "car-client-project",
  storageBucket: "car-client-project.appspot.com",
  messagingSenderId: "674523581715",
  appId: "1:674523581715:web:5567cb67b2a2fba26f1ee6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app