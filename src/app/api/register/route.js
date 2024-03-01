
const admin = require('@/lib/firebaseAdmin');

async function verifyToken(token) {
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    return { uid: decodedToken.uid, authenticated: true };
  } catch (error) {
    console.error('Error verifying token:', error);
    return { authenticated: false };
  }
}

export default async function handler(req, res) {
  const token = req.headers.authorization?.split('Bearer ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const { authenticated, uid } = await verifyToken(token);

  if (!authenticated) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  // Si el usuario está autenticado, procede con tu lógica de negocio
  // Por ejemplo, obtener documentos de Firestore
  const db = admin.firestore();
  const collectionRef = db.collection('reservations');
  const snapshot = await collectionRef.get();
  const docs = snapshot.docs.map(doc => doc.data());

  // Envía los documentos como respuesta
  res.status(200).json(docs);
}
