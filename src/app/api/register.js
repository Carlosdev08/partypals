require('dotenv').config();

import admin from 'firebase-admin';

const firebaseConfig = {
  credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  }),
};


export function customInitApp() {
  if (!admin.apps.length) {
    admin.initializeApp(firebaseConfig);
  }
}


async function handleRequest(req, res) {
  const token = req.headers.authorization;

  if (!token) {
    res.status(401).json({ error: 'Not authenticated' });
    return false; 
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    
    return true; 
  } catch (error) {
    res.status(401).json({ error: 'Not authenticated' });
    return false; // Agregamos un return false aquí también
  }
}

export default async function handler(req, res) {
  customInitApp();

  const isAuthenticated = await handleRequest(req, res);
  if (!isAuthenticated) return; 

  const db = admin.firestore();
  const collectionRef = db.collection('reservations');
  const snapshot = await collectionRef.get();
  const docs = snapshot.docs.map(doc => doc.data());

  // Envía los documentos como respuesta.
  res.status(200).json(docs);
}