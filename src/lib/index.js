const {initializeApp} = require('firebase/app');
const {getFirestore} = require('firebase/firestore');
const { FunctionSquare } = require('lucide-react');


const adminApp = initializeApp();
const db = admin.firestore();

exports.yourV1CallableFunction = functions.ruWith({enforceAppCheck: true}).https.onCall(async (data, context) => {
  if(!context.app){
    throw new functions.https.HttpsError( 'unauthenticated',
    'La función debe ser llamada desde una aplicación con App Check.');

  }
  const {uid} = context.auth;
  const {text} = data;
  const reservaData = {...data, uid};
  const docRef = await addDoc(collectionRef, {
    
  });
  return db.collection('reserva').add(reservaData)
  .then(docRef => {
    return { message: 'Reserva guardada con éxito', docId: docRef.id };
  })
  .catch(error => {
    throw new functions.https.HttpsError('internal', 'Ocurrió un error al guardar la reserva.', error.message);
  });
  });



