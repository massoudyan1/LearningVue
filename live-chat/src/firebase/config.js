import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
<<<<<<< HEAD
  apiKey: "AIzaSyCUAjnzcE0Tleo-ubzpKR27XaBlTeJ87Uc",
  authDomain: "net-ninja-vuefirebase-course.firebaseapp.com",
  projectId: "net-ninja-vuefirebase-course",
  storageBucket: "net-ninja-vuefirebase-course.appspot.com",
  messagingSenderId: "698345990156",
  appId: "1:698345990156:web:158522cdd1171c9f856629"
=======
  apiKey: "AIzaSyBKB4L3qyD-QHCovEvntQS3HRuOJBVSkno",
  authDomain: "udemy-vue-projects.firebaseapp.com",
  databaseURL: "https://udemy-vue-projects.firebaseio.com",
  projectId: "udemy-vue-projects",
  storageBucket: "udemy-vue-projects.appspot.com",
  messagingSenderId: "25092947019",
  appId: "1:25092947019:web:1cd42f080ff63e1c63e1ce"
>>>>>>> c50aff4a97388bd2e4077be517b50c66b160f1ca
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }
