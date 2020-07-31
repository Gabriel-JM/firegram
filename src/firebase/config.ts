import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBkEdjuBZSMnXXz2ioUuqJDR0ANYGaTjg8",
  authDomain: "blazing-firegram.firebaseapp.com",
  databaseURL: "https://blazing-firegram.firebaseio.com",
  projectId: "blazing-firegram",
  storageBucket: "blazing-firegram.appspot.com",
  messagingSenderId: "366196135247",
  appId: "1:366196135247:web:99330d7c06b968ccaca13a"
}

firebase.initializeApp(firebaseConfig)

export const projectStorage = firebase.storage()
export const projectFireStore = firebase.firestore()
export const timestamp = firebase.firestore.FieldValue.serverTimestamp
