import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDagy2JbeMI3zb7i40GkWVQbyYoqPjSEE4",
    authDomain: "todoapp-react-native-4c6fe.firebaseapp.com",
    projectId: "todoapp-react-native-4c6fe",
    storageBucket: "todoapp-react-native-4c6fe.appspot.com",
    messagingSenderId: "248830364662",
    appId: "1:248830364662:web:17e0d7f47072da90e015d7",
    measurementId: "G-MN22CRGJ16",
    databaseURL:'https://todoapp-react-native-4c6fe-default-rtdb.firebaseio.com'
};

firebase.initializeApp(firebaseConfig)
export default firebase