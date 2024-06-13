// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCsiWtowaBqnyZK7ih0X6u-CpUoSEReFAo",
    authDomain: "food-rating-auth.firebaseapp.com",
    projectId: "food-rating-auth",
    storageBucket: "food-rating-auth.appspot.com",
    messagingSenderId: "403577053262",
    appId: "1:403577053262:web:e791ddcdeaefbde88ca31f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();