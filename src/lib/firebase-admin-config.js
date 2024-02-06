

const firebaseConfig = {
  credential: admin.credential.cert({
    projectId: "partypals",
    clientEmail: "firebase-adminsdk-sutj3@partypals.iam.gserviceaccount.com",
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  }),
};

export function customInitApp() {
  if (!admin.apps.length) {
    admin.initializeApp(firebaseConfig);
  }
}