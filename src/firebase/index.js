import {
    initializeApp
} from "firebase/app";

import {
    getAuth
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDgLu6FotxWBMKzt4R0Cfh5nqYZM3OSf_8",
    authDomain: "ani-list-auth.firebaseapp.com",
    projectId: "ani-list-auth",
    storageBucket: "ani-list-auth.appspot.com",
    messagingSenderId: "1064710651443",
    appId: "1:1064710651443:web:ad255a0d08faf633f22d46",
    measurementId: "G-CJ2VQ9RPHF"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {
    auth
};