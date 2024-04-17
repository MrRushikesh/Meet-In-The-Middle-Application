// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDKSCfg2O6gkHGX4nzaeViuydoH8dY8I1g",
//   authDomain: "uploadingimage-dbca7.firebaseapp.com",
//   projectId: "uploadingimage-dbca7",
//   storageBucket: "uploadingimage-dbca7.appspot.com",
//   messagingSenderId: "917364911528",
//   appId: "1:917364911528:web:721df1dfe0666c6bf5419d"
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_API_ID,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)