import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const app = firebase.initializeApp({
  apiKey: "AIzaSyChncMEFe3D6Ktf3_dpY2c2W2_i1WjYI-Q",
  authDomain: "jsw-app-1e3cd.firebaseapp.com",
  projectId: "jsw-app-1e3cd",
  storageBucket: "jsw-app-1e3cd.appspot.com",
  messagingSenderId: "696220285911",
  appId: "1:696220285911:web:58aa01980946dfb92fa992",
  measurementId: "G-L82YQ9VG4H"
})

const firestore = app.firestore()
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
export const auth = app.auth()
export default app
