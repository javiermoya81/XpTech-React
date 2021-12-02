
import firebase from "firebase";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBmhA94vrzWKqWBkXZNWPVjmLEfkAMUs-E",
    authDomain: "xptech-ecommerce.firebaseapp.com",
    projectId: "xptech-ecommerce",
    storageBucket: "xptech-ecommerce.appspot.com",
    messagingSenderId: "860130357380",
    appId: "1:860130357380:web:c46a488f37e677ec5d12d1"
};

const app = firebase.initializeApp(firebaseConfig)

const getFirestore = ()=>{
    return firebase.firestore(app)
}
export default getFirestore;