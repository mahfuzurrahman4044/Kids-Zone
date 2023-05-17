// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByvwAMZJ92GMygARNwtkIyvV5BmJPiKQc",
  authDomain: "kids-zone-52dcf.firebaseapp.com",
  projectId: "kids-zone-52dcf",
  storageBucket: "kids-zone-52dcf.appspot.com",
  messagingSenderId: "675460196015",
  appId: "1:675460196015:web:f129dd78ec853ff805165a",
  measurementId: "G-9JRMV9PJYR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;