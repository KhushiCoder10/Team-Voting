import firebase from 'firebase';

// add SDK Firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCsp6B-ozScVOfXIncqrdb4F-Ivz9GwJ2A",
  authDomain: "assignment-67.firebaseapp.com",
  projectId: "assignment-67",
  storageBucket: "assignment-67.appspot.com",
  messagingSenderId: "974730466075",
  appId: "1:974730466075:web:4638cc5793e9cc9bcf79be",
  measurementId: "G-YWTE1J5NGK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase.database();
