// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq-APB3ePwdyT9KgPhEt3HA1oVjQZeCyI",
  authDomain: "login-7b079.firebaseapp.com",
  projectId: "login-7b079",
  storageBucket: "login-7b079.appspot.com",
  messagingSenderId: "537277934696",
  appId: "1:537277934696:web:2f379ffa53a8aa17835fdd",
  measurementId: "G-2B15GTG6VH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;