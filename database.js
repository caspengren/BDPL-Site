<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBcR57SNi9wF2FIPciPxFU1IWPsEf5vx0g",
    authDomain: "bdplsite.firebaseapp.com",
    databaseURL: "https://bdplsite-default-rtdb.firebaseio.com",
    projectId: "bdplsite",
    storageBucket: "bdplsite.firebasestorage.app",
    messagingSenderId: "459708893175",
    appId: "1:459708893175:web:f99483c6105308274d50f2",
    measurementId: "G-MDYZ8EQVL9"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>