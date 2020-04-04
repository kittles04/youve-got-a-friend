import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  var firebaseConfig = {
    apiKey: "AIzaSyCPlOZiukeARsIg0IbO86YBSoOdI3VQY-c",
    authDomain: "corona-help-a38a2.firebaseapp.com",
    databaseURL: "https://corona-help-a38a2.firebaseio.com",
    projectId: "corona-help-a38a2",
    storageBucket: "corona-help-a38a2.appspot.com",
    messagingSenderId: "977638912017",
    appId: "1:977638912017:web:eaec0c4a93a4e1e4fec1b0",
    measurementId: "G-TL8442VGN8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.firestore().settings({timestampsInSnapshots: true})


  export default firebase;
