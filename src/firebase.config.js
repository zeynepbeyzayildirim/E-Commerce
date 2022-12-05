import { getApp,getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyBLgKGgotH_L-6zgvnzwg0dMG02Oebaesk",
    authDomain: "ecommerce-aa340.firebaseapp.com",
    databaseURL: "https://ecommerce-aa340-default-rtdb.firebaseio.com",
    projectId: "ecommerce-aa340",
    storageBucket: "ecommerce-aa340.appspot.com",
    messagingSenderId: "378170397151",
    appId: "1:378170397151:web:021b0f8f40086df5ea746a",
  };

  const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export { app, firestore, storage};
  
