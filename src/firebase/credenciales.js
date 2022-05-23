// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const API = process.env.API_FIREBASE

const firebaseConfig = {
  apiKey: API || 'AIzaSyCFENelrqQXh6wGXTXqHH_SkY4LaJQHLFQ',
  authDomain: "tesla-stripe.firebaseapp.com",
  projectId: "tesla-stripe",
  storageBucket: "tesla-stripe.appspot.com",
  messagingSenderId: "121916944785",
  appId: "1:121916944785:web:3d5bf5f71f4892e4de6a30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)

export default app;