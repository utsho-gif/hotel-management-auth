import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'




const firebaseConfig = {
  apiKey: "AIzaSyDEaDi6czPSSPTTretd3L2SHO4Vf83DYpU",
  authDomain: "hotel-management-10c45.firebaseapp.com",
  projectId: "hotel-management-10c45",
  storageBucket: "hotel-management-10c45.appspot.com",
  messagingSenderId: "1074846252348",
  appId: "1:1074846252348:web:de908d067d90b5c607f239"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;