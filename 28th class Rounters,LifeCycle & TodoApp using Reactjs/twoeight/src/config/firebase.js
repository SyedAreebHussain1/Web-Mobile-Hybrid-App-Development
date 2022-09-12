import * as firebase from 'firebase/app';
import 'firebase/database' 
// import 'firebase/auth' 


const firebaseConfig = {
    apiKey: "AIzaSyB7ELh26iiDIK2sk-LS4dW700x-L6SWy8k",
    authDomain: "saylaniwebone-4a039.firebaseapp.com",
    projectId: "saylaniwebone-4a039",
    storageBucket: "saylaniwebone-4a039.appspot.com",
    messagingSenderId: "106773638607",
    appId: "1:106773638607:web:5e5efadf57ab44d830f6ba",
    measurementId: "G-56FW6ZC6TX"
  };
  
  // Initialize Firebase
 export default firebase.initializeApp(firebaseConfig)