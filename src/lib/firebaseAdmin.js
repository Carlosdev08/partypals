require('dotenv').config();

import express from 'express';
import admin from 'firebase-admin';

const app = express();
const port = 3000;

// Configuración de Firebase Admin SDK
const firebaseConfig = {
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  }),
};

// Inicializa la aplicación de Firebase
if (!admin.apps.length) {
  admin.initializeApp(firebaseConfig);
}

app.get('/reservations', async (req, res) => {
  const db = admin.firestore();
  const collectionRef = db.collection('reservations');
  const snapshot = await collectionRef.get();
  const docs = snapshot.docs.map(doc => doc.data());

  res.status(200).json(docs);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
