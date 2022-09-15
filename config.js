import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyBM-UyCRnr5NDYXdobJvxXbSTX-p7fUqSM",
  authDomain: "qualquercoisa-8a8b1.firebaseapp.com",
  projectId: "qualquercoisa-8a8b1",
  storageBucket: "qualquercoisa-8a8b1.appspot.com",
  messagingSenderId: "684185084684",
  appId: "1:684185084684:web:7589239a302e7fad011f29"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
