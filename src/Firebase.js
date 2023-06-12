// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDC4j2PXxC-tiUElPIs2V1RL2k4kSEpLhI",
  authDomain: "fir-auth-616dd.firebaseapp.com",
  projectId: "fir-auth-616dd",
  storageBucket: "fir-auth-616dd.appspot.com",
  messagingSenderId: "671411693177",
  appId: "1:671411693177:web:dd5b2bcf5e10198ade16a8",
  measurementId: "G-GJR84YKFCY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);