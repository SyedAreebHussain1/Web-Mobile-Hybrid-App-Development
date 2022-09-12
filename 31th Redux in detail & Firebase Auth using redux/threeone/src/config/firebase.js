import *as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBtlmbvFpQNzeAYSUfPKI7JaZ_ibsO3xeY",
    authDomain: "th-class-fb-login.firebaseapp.com",
    projectId: "th-class-fb-login",
    storageBucket: "th-class-fb-login.appspot.com",
    messagingSenderId: "464724484615",
    appId: "1:464724484615:web:2875f56e2ce679c105c0a2",
    measurementId: "G-KMELP8E701"
  };

//   var Firebase = firebase.initializeApp(firebaseConfig)
  export default firebase.initializeApp(firebaseConfig)


