import firebase from 'firebase';

  var firebaseConfig = {
    apiKey: "AIzaSyAJFYKTt9kD01O2y2V0GAniTX7VqGJiPoo",
    authDomain: "newsletter-app-a4dec.firebaseapp.com",
    databaseURL: "https://newsletter-app-a4dec.firebaseio.com",
    projectId: "newsletter-app-a4dec",
    storageBucket: "newsletter-app-a4dec.appspot.com",
    messagingSenderId: "80261203012",
    appId: "1:80261203012:web:ac9237b98920f4d3006811"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.database();