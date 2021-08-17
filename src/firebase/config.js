import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA8Ulq16lPQxekHAmFJCSim2v4h4CcI2HQ",
    authDomain: "asanas-ai.firebaseapp.com",
    projectId: "asanas-ai",
    storageBucket: "asanas-ai.appspot.com",
    messagingSenderId: "314039972217",
    appId: "1:314039972217:web:74d92b525dc54ecb66ffa8",
    measurementId: "G-6X8QD9YTGB"
  };

  const fire = firebase.initializeApp(firebaseConfig)

  export default fire;