import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDUMsTA_MXeJ_wqT_peYgaBTF4iNeiYfVQ",
  authDomain: "miniblog-d6e92.firebaseapp.com",
  projectId: "miniblog-d6e92",
  storageBucket: "miniblog-d6e92.appspot.com",
  messagingSenderId: "161491929957",
  appId: "1:161491929957:web:3298a97b20538e8eaf2f8c"
};

const app = initializeApp(firebaseConfig);

// metodo para chamar o banco de dados do FireBase o FireStore
const db = getFirestore(app)

export {db}