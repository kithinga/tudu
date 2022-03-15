// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/compat/app";
import { getFirestore, collection} from "firebase/firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCn1dqbBSiw66U7ICuKfIu5JjqQlPojKCg",
  authDomain: "tudure-23ad5.firebaseapp.com",
  projectId: "tudure-23ad5",
  storageBucket: "tudure-23ad5.appspot.com",
  messagingSenderId: "1081942750972",
  appId: "1:1081942750972:web:baafa37d13b3c9f9878979"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const colref = collection(db,"tasks")

export default colref;