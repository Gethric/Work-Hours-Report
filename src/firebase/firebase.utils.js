import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDZWt_2feIabwacZP5ruMKptIW1WFZtk4w",
    authDomain: "hours-report-c322f.firebaseapp.com",
    databaseURL: "https://hours-report-c322f.firebaseio.com",
    projectId: "hours-report-c322f",
    storageBucket: "",
    messagingSenderId: "581264591150",
    appId: "1:581264591150:web:e9cd9ef46f3e2d2b4892bf"
  };
  
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;