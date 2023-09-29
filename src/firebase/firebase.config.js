// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDOLnU8-zzRfR3HyXUlfmJ2XI0VedD12e8",
    authDomain: "auth-moha-milon-8deee.firebaseapp.com",
    projectId: "auth-moha-milon-8deee",
    storageBucket: "auth-moha-milon-8deee.appspot.com",
    messagingSenderId: "595599760765",
    appId: "1:595599760765:web:c645d701fa096548200014"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;