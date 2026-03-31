import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBSrnZgbm3k9_EhiGUUgMW33hrvhErwbI0",
    authDomain: "brl-converter2.firebaseapp.com",
    projectId: "brl-converter2",
    storageBucket: "brl-converter2.firebasestorage.app",
    messagingSenderId: "452641596199",
    appId: "1:452641596199:web:739658dbb803c81334ff02"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);