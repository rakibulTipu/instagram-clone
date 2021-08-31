import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCVFVHwYsZgO-5vyasx-ZFkqF6cq07JNC4",
  authDomain: "instagram-clone-f83ef.firebaseapp.com",
  projectId: "instagram-clone-f83ef",
  storageBucket: "instagram-clone-f83ef.appspot.com",
  messagingSenderId: "86145999349",
  appId: "1:86145999349:web:0c442a49edc4be39c840bc",
  measurementId: "G-4MLJ115MNY",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
