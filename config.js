import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyB4hrLUuShKAo5AmryFJzBj3cyX7sCBHas",
  authDomain: "lost-and-found-609d5.firebaseapp.com",
  projectId: "lost-and-found-609d5",
  storageBucket: "lost-and-found-609d5.appspot.com",
  messagingSenderId: "549910953610",
  appId: "1:549910953610:web:ab4420a0b7fe940fb2f773"
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;