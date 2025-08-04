// lib/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYe6nsxPv5jZlZDBjIqRU1T1cHhFd9CY8",
  authDomain: "new-portfolio-website-76779.firebaseapp.com",
  projectId: "new-portfolio-website-76779",
  storageBucket: "new-portfolio-website-76779.firebasestorage.app",
  messagingSenderId: "720845276854",
  appId: "1:720845276854:web:f6b8a66c2b8683978ac817",
  measurementId: "G-YBX8F1PEDG"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app);
const auth = getAuth(app);

// Export them for use in other files
export { db, auth };