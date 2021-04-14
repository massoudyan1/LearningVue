import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDAJpsUX1HA9hFpEJNCrzeJalejxmYcBrQ",
  authDomain: "imperial-time-271519.firebaseapp.com",
  projectId: "imperial-time-271519",
  storageBucket: "imperial-time-271519.appspot.com",
  messagingSenderId: "636148664582",
  appId: "1:636148664582:web:b9bd6aa9baf01d34a3f687"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// export firestore
export { projectFirestore, timestamp }
