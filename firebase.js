// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyComUKhLzOH22dqw6a81LbiEWtY7uIILU0",
  authDomain: "ww-diary-new.firebaseapp.com",
  projectId: "ww-diary-new",
  storageBucket: "ww-diary-new.firebasestorage.app",
  messagingSenderId: "919289479808",
  appId: "1:919289479808:web:f2000df99dc903f36fdc65",
  measurementId: "G-80N0G3291C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if (typeof window !== 'undefined') {
  const analytics = getAnalytics(app);
}