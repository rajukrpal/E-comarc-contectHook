/* eslint-disable react-refresh/only-export-components */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo-uGgmGn1j3ScOzVCbS6sCnE4aOc1OEg",
  authDomain: "mye-com.firebaseapp.com",
  projectId: "mye-com",
  storageBucket: "mye-com.appspot.com",
  messagingSenderId: "1079175042195",
  appId: "1:1079175042195:web:89e66358294d650ff42966",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB,auth}





/*


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDBHTUtOeuCON7AEF3UPPxU1sHsnFfBv-M",
    authDomain: "ecommerce-for.firebaseapp.com",
    projectId: "ecommerce-for",
    storageBucket: "ecommerce-for.appspot.com",
    messagingSenderId: "609664686595",
    appId: "1:609664686595:web:302bf25cc8efa64a4e4c36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }



*/
