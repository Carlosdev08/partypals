require('dotenv').config();

import admin from 'firebase-admin';

// Inicializa Firebase Admin solo una vez usando un patrón de singleton
export function customInitApp() {
  if (admin.apps.length === 0) {
    const projectId = process.env.FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    const privateKey = process.env.FIREBASE_PK ? process.env.FIREBASE_PK.replace(/\\n/g, '\n') : undefined;

    if (!projectId || !clientEmail || !privateKey) {
      console.error('Falta una o más variables de entorno de Firebase');
      return;
    }

    admin.initializeApp({
      credential: admin.credential.cert({
        projectId,
        clientEmail,
        privateKey,
      }),
    });
  }
}

// Función para manejar la autenticación de la solicitud
async function handleRequest(req, res) {
  const token = req.headers.authorization;

  if (!token) {
    res.status(401).json({ error: 'Not authenticated' });
    return false; 
  }

  try {
    await admin.auth().verifyIdToken(token);
    return true; // Autenticación exitosa
  } catch (error) {
    res.status(401).json({ error: 'Not authenticated' });
    return false;
  }
}

// Handler de la API
export default async function handler(req, res) {
  customInitApp();

  const isAuthenticated = await handleRequest(req, res);
  if (!isAuthenticated) {
    return;
  }

  const db = admin.firestore();
  const collectionRef = db.collection('reservations');
  const snapshot = await collectionRef.get();
  const docs = snapshot.docs.map(doc => doc.data());

  res.json(docs);
}
