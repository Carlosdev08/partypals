import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from "firebase/app-check";

const app = initializeApp({
    apiKey: "AIzaSyCMmxSfbIYFDQq1kYmIHUSUDUYIS2SXuG4",
    authDomain: "partypals.firebaseapp.com",
    projectId: "partypals",
    storageBucket: "partypals.appspot.com",
    messagingSenderId: "1073635166748",
    appId: "1:1073635166748:web:ec4672e62d088c5ea62dd9",
});

// Create a ReCaptchaEnterpriseProvider instance using your reCAPTCHA Enterprise
// site key and pass it to initializeAppCheck().
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaEnterpriseProvider(Lf0PmwpAAAAADXRlFcftrECkqPogVWPWO2eYPTI),
  isTokenAutoRefreshEnabled: true // Set to true to allow auto-refresh.
});