import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDHDlKbI0bEEvEztlFgMHh0Bfjjcbbz-Hk",
    authDomain: "chat-udemy-react.firebaseapp.com",
    projectId: "chat-udemy-react",
    storageBucket: "chat-udemy-react.appspot.com",
    messagingSenderId: "106908414933",
    appId: "1:106908414933:web:25f88048894b09caad035c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const db = firebase.firestore()
const provider = new firebase.auth.GoogleAuthProvider()


export { auth, db, provider }