// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCzXH-gIgARWTs4nbZTi9ovdxjuo-75gxI",
    authDomain: "tinder-clone-c7a2f.firebaseapp.com",
    databaseURL: "https://tinder-clone-c7a2f.firebaseio.com",
    projectId: "tinder-clone-c7a2f",
    storageBucket: "tinder-clone-c7a2f.appspot.com",
    messagingSenderId: "868517525887",
    appId: "1:868517525887:web:12508f3826958e321bc24a",
    measurementId: "G-SG9M2JQXX6"
  };


  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const database=firebaseApp.firestore();

  export default database;

 