import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration

  const firebaseConfig = {
  apiKey: "AIzaSyBYBt9Gx0BQU25p4sz-Ex54EPXo1b9_K2w",
  authDomain: "fir-web-programing.firebaseapp.com",
  databaseURL: "https://fir-web-programing-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-web-programing",
  storageBucket: "fir-web-programing.appspot.com",
  messagingSenderId: "828209721818",
  appId: "1:828209721818:web:4a228e3f1514ea6d3390e3",
  measurementId: "G-K0TECEYRKK"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}
