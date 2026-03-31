import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getReactNativePersistence } from "firebase/auth";
import { Platform } from "react-native";

const firebaseConfig = {
    apiKey: "",
    authDomain: "brl-converter2.firebaseapp.com",
    projectId: "brl-converter2",
    storageBucket: "brl-converter2.firebasestorage.app",
    messagingSenderId: "452641596199",
    appId: "1:452641596199:web:739658dbb803c81334ff02"
};

const app = initializeApp(firebaseConfig);
// export const auth = initializeAuth(app, { persistence: getReactNativePersistence(AsyncStorage) });
export const auth = Platform.OS === "web"
    ? getAuth(app) // web usa browserLocalPersistence por padrão
    : initializeAuth(app, {
        persistence: getReactNativePersistence(AsyncStorage),
    });
