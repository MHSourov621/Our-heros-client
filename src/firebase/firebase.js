// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgNyYrZIIm0RD8nEcNBx059x8MsPpP-2M",
  authDomain: "our-heros-auth.firebaseapp.com",
  projectId: "our-heros-auth",
  storageBucket: "our-heros-auth.appspot.com",
  messagingSenderId: "727573507885",
  appId: "1:727573507885:web:715a2b6019dfcff81e2da4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;