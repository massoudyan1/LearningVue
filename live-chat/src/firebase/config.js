import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCUAjnzcE0Tleo-ubzpKR27XaBlTeJ87Uc",
  authDomain: "net-ninja-vuefirebase-course.firebaseapp.com",
  projectId: "net-ninja-vuefirebase-course",
  storageBucket: "net-ninja-vuefirebase-course.appspot.com",
  messagingSenderId: "698345990156",
  appId: "1:698345990156:web:158522cdd1171c9f856629"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }
