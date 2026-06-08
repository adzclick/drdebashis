// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA27fDsjAiXORARg1mVIlKIY3boXs_OwwA",
  authDomain: "drdebasish-96884.firebaseapp.com",
  projectId: "drdebasish-96884",
  storageBucket: "drdebasish-96884.firebasestorage.app",
  messagingSenderId: "969512159911",
  appId: "1:969512159911:web:261a352c11bd1634a7e982"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);