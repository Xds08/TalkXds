import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

import { getStorage } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-storage.js";

const firebaseConfig = { apiKey: "SUA_API_KEY_COMPLETA", authDomain: "talkxds.firebaseapp.com", projectId: "talkxds", storageBucket: "talkxds.firebasestorage.app", messagingSenderId: "SEU_ID_COMPLETO", appId: "SEU_APP_ID_COMPLETO" };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); export const db = getFirestore(app); export const storage = getStorage(app);
