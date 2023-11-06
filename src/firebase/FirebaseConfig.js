import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9RRXPAHNCpFCTfe-rMjaC5wZYxnMsRVQ",
  authDomain: "awc-web.firebaseapp.com",
  projectId: "awc-web",
  storageBucket: "awc-web.appspot.com",
  messagingSenderId: "625325725219",
  appId: "1:625325725219:web:f4cbe20b9ee507a9fc4396",
  measurementId: "G-JC8KCR9144"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app);

export default auth;