import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore,collection, addDoc } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCMmxSfbIYFDQq1kYmIHUSUDUYIS2SXuG4",
  authDomain: "partypals.firebaseapp.com",
  projectId: "partypals",
  storageBucket: "partypals.appspot.com",
  messagingSenderId: "1073635166748",
  appId: "1:1073635166748:web:ec4672e62d088c5ea62dd9",
  measurementId: "G-NTNG06W7HJ"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };