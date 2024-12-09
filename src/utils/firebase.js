// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCbGnYxpVjOY6Wayz9Pk2Aw-z9zevLXLgY",
    authDomain: "cinesense-4db60.firebaseapp.com",
    projectId: "cinesense-4db60",
    storageBucket: "cinesense-4db60.firebasestorage.app",
    messagingSenderId: "532613002471",
    appId: "1:532613002471:web:2631c7a0efd315eb8d5e42",
    measurementId: "G-DSKSCRS8DX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();