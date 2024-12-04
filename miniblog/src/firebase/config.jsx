import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDUMsTA_MXeJ_wqT_peYgaBTF4iNeiYfVQ",
  authDomain: "miniblog-d6e92.firebaseapp.com",
  projectId: "miniblog-d6e92",
  storageBucket: "miniblog-d6e92.firebasestorage.app",
  messagingSenderId: "161491929957",
  appId: "1:161491929957:web:3298a97b20538e8eaf2f8c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const auth = getAuth(app)

export {db, auth}