

// firebase.js

// Import Firebase libraries (using CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcR57SNi9wF2FIPciPxFU1IWPsEf5vx0g",
  authDomain: "bdplsite.firebaseapp.com",
  databaseURL: "https://bdplsite-default-rtdb.firebaseio.com",
  projectId: "bdplsite",
  storageBucket: "bdplsite.firebasestorage.app",
  messagingSenderId: "459708893175",
  appId: "1:459708893175:web:f99483c6105308274d50f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Export Firebase functions for use in other files
export { database, ref, set, get, child };