import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB1rJRom_ILvBX11XDK_InsYu6aiKcW_k0",
    authDomain: "subscriptions-90372.firebaseapp.com",
    projectId: "subscriptions-90372",
    storageBucket: "subscriptions-90372.appspot.com",
    messagingSenderId: "872345434156",
    appId: "1:872345434156:web:4f3381f77991f70c843989"
  };

const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();
