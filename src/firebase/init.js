import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: 'AIzaSyD-oYRgTsDcsxfbHnZZXM8scO1fsqBp2Gs',
  authDomain: 'week-4---wilson.firebaseapp.com',
  projectId: 'week-4---wilson',
  storageBucket: 'week-4---wilson.firebasestorage.app',
  messagingSenderId: '866195190393',
  appId: '1:866195190393:web:63f08adb50fc14057a1aa8',
}

initializeApp(firebaseConfig);

const db = getFirestore()
export default db