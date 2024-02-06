import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCMmxSfbIYFDQq1kYmIHUSUDUYIS2SXuG4",
  authDomain: "partypals.firebaseapp.com",
  projectId: "partypals",
  storageBucket: "partypals",
  messagingSenderId: "1073635166748",
  appId: "1:1073635166748:web:ec4672e62d088c5ea62dd9",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };