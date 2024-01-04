// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1ef6UzEr2MTAZAGyaD4r40FGtHvSXOUw",
    authDomain: "technology-shops.firebaseapp.com",
    projectId: "technology-shops",
    storageBucket: "technology-shops.appspot.com",
    messagingSenderId: "179486406495",
    appId: "1:179486406495:web:619d8b62b0637eb0ef28ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
