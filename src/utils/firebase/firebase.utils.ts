import { FirebaseApp, getApp, getApps, initializeApp } from "firebase/app";

import {
    createUserWithEmailAndPassword,
    getAuth,
    updateCurrentUser,
    User,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
//import {...} from "firebase/database";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDNt-gZQVqFZqYWTesjpTuYnfaeRtaRZac",
    authDomain: "signal-clone-69b56.firebaseapp.com",
    projectId: "signal-clone-69b56",
    storageBucket: "signal-clone-69b56.appspot.com",
    messagingSenderId: "369964186218",
    appId: "1:369964186218:web:ef7c9cc1a9e6f6bdda6813",
};

let app: FirebaseApp;

if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApp();
}

export const db = getFirestore(app);
export const auth = getAuth(app);

export const createAuthUserWithEmailAndPassword = (
    email: string,
    password: string,
    displayName: string,
    photoURL: string
): void => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            const updatedUser: User = {
                ...user,
                displayName,
                photoURL,
            };
            console.log("user", user);
            updateCurrentUser(auth, updatedUser);
        })
        .catch((error: Error) => {
            alert(error.message);
        });
};
