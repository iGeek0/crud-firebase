// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCqCdmIgkm7p_COk35MRMaPJEUKcYqPM7U",
    authDomain: "fb-crud-react-70348.firebaseapp.com",
    projectId: "fb-crud-react-70348",
    storageBucket: "fb-crud-react-70348.appspot.com",
    messagingSenderId: "1094514783816",
    appId: "1:1094514783816:web:f95517d36d920ab4600a7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);