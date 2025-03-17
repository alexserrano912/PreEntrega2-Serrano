import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Configuración de Firebase de tu aplicación web
const firebaseConfig = {
    apiKey: "AIzaSyADbcqqRKLyWhn172NoUR_v1QjUSS5QN0I",
    authDomain: "comision68535-ceffe.firebaseapp.com",
    projectId: "comision68535-ceffe",
    storageBucket: "comision68535-ceffe.firebasestorage.app",
    messagingSenderId: "614096223101",
    appId: "1:614096223101:web:a9668c3a4f5b03ae05aa14",
    measurementId: "G-C0CHQ9CMMX"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };