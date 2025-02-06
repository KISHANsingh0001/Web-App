import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC6GF1vafQhI79525lwM6B5qpX2-_YHNnQ",
    authDomain: "leeza-21384.firebaseapp.com",
    projectId: "leeza-21384",
    storageBucket: "leeza-21384.firebasestorage.app",
    messagingSenderId: "260283510722",
    appId: "1:260283510722:web:0e45b8c80cc0fd2a60f05b",
    measurementId: "G-2GE8EL9S0J"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Add scopes if needed
googleProvider.addScope('https://www.googleapis.com/auth/userinfo.email');
googleProvider.addScope('https://www.googleapis.com/auth/userinfo.profile');

export { auth, googleProvider };