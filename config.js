import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyDQwEyJ7kHxgtbKoxXI2Z7tKxg0HzhTUGQ",
  authDomain: "bike-ride-bebb9.firebaseapp.com",
  projectId: "bike-ride-bebb9",
  storageBucket: "bike-ride-bebb9.appspot.com",
  messagingSenderId: "876771135026",
  appId: "1:876771135026:web:ae4e5fc086bc361eaeb62b"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

