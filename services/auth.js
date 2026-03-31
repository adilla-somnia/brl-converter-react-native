import { auth } from "./firebaseConfig";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";

export const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};