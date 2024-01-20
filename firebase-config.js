// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6UlebGgP1UA_q1ccSz8HrTrEqv9-Fyhg",
  authDomain: "safjourney-6bc83.firebaseapp.com",
  projectId: "safjourney-6bc83",
  storageBucket: "safjourney-6bc83.appspot.com",
  messagingSenderId: "439287520443",
  appId: "1:439287520443:web:4b85f6df900b9c8026dd9e",
  measurementId: "G-407LGZ2GXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);