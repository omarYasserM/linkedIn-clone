import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvRBMZ2QnA-oN99MC5lRftrkYJJxhjMoM",
  authDomain: "linkedin-clone-ca345.firebaseapp.com",
  projectId: "linkedin-clone-ca345",
  storageBucket: "linkedin-clone-ca345.appspot.com",
  messagingSenderId: "31972946491",
  appId: "1:31972946491:web:e6a0b398c7523722bbe21e",
};

const firebaseapp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseapp);
const auth = getAuth(firebaseapp);

export { auth, db };
