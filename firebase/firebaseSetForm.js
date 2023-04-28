import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCe7HPmNCBp6AwEnFvo7m_Qc9JxJf1dvTo",
  authDomain: "civil-ac189.firebaseapp.com",
  projectId: "civil-ac189",
  storageBucket: "civil-ac189.appspot.com",
  messagingSenderId: "135971956888",
  appId: "1:135971956888:web:89d414156850575f1e88ed",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function addForm(form) {
  try {
    const docRef = await addDoc(collection(db, "forms"), form);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

}



