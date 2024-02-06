import { initializeApp, getApps } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCMmxSfbIYFDQq1kYmIHUSUDUYIS2SXuG4",
    authDomain: "partypals.firebaseapp.com",
    projectId: "partypals",
    storageBucket: "partypals.appspot.com",
    messagingSenderId: "1073635166748",
    appId: "1:1073635166748:web:ec4672e62d088c5ea62dd9",
};

if (!getApps().length) {
    initializeApp(firebaseConfig);
}

export { initializeApp };