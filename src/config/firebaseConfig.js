// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAWpuiNr21IZTHVPQRsiQLnlP-ak79gxWw',
  authDomain: 'projeto-2-0-e6b8f.firebaseapp.com',
  projectId: 'projeto-2-0-e6b8f',
  storageBucket: 'projeto-2-0-e6b8f.firebasestorage.app',
  messagingSenderId: '1072614951620',
  appId: '1:1072614951620:web:e445da63c4bde6c5d81791',
  measurementId: 'G-SQXQWR75LK',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
