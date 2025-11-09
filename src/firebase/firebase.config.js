import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD4T30qazwO24Wh6iPY-o5tN_blL_hz5K0",
  authDomain: "ai-model-96959.firebaseapp.com",
  projectId: "ai-model-96959",
  storageBucket: "ai-model-96959.firebasestorage.app",
  messagingSenderId: "1050858623849",
  appId: "1:1050858623849:web:a204612d5cebe1d184e3f8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);