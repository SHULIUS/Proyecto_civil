import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import {
  getStorage,
  uploadBytes,
  getDownloadURL,
  ref,
}  from "https://www.gstatic.com/firebasejs/9.18.0/firebase-storage.js"

const firebaseConfig = {
  apiKey: "AIzaSyCe7HPmNCBp6AwEnFvo7m_Qc9JxJf1dvTo",
  authDomain: "civil-ac189.firebaseapp.com",
  projectId: "civil-ac189",
  storageBucket: "civil-ac189.appspot.com",
  messagingSenderId: "135971956888",
  appId: "1:135971956888:web:89d414156850575f1e88ed",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);


export async function addFile(file, path) {
  const randomNumber = Math.floor(Math.random() * 123456);
  const storageRef = ref(storage, path+file.name + "_" + randomNumber);
  await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
}
 