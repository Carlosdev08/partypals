"use client";
import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
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
    measurementId: "G-NTNG06W7HJ"
};

let app;

if (!getApps().length) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApps()[0]; 
}

export const auth = getAuth(app);
export const db = getFirestore(app);