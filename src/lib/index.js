const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.yourV1CallableFunction = functions
  .runWith({
    enforceAppCheck: true,
  })
  .https.onCall((data, context) => {
    // Asegúrate de que la llamada proviene de un cliente autenticado.
    if (!context.app) {
      throw new functions.https.HttpsError(
        'unauthenticated',
        'La función debe ser llamada desde una aplicación con App Check.'
      );
    }

   
    const reservaData = {
      
      fecha: data.fecha,
      sectionSchedule: data.sectionSchedule,
      numChildren: data.numChildren,
    };

    return admin.firestore().collection('reserva').add(reservaData)
      .then(() => {
        return { message: 'Reserva guardada con éxito' };
      })
      .catch(error => {
        throw new functions.https.HttpsError('internal', error.message);
      });
  });
