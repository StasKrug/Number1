import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCM-Wh_L7s9RPjjwWVBz6DKieKWbO6rBb4",
  authDomain: "gblesson9n.firebaseapp.com",
  projectId: "gblesson9n",
  storageBucket: "gblesson9n.appspot.com",
  messagingSenderId: "965792737474",
  appId: "1:965792737474:web:6637ad330b5ffa04bcb35b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signUp = async (email, pass) =>
  await createUserWithEmailAndPassword(auth, email, pass);

export const logIn = async (email, pass) =>
  await signInWithEmailAndPassword(auth, email, pass);

export const logOut = async () => await signOut(auth);

export const database = getDatabase(app);
export const userRef = ref(database, 'user');
export const chatsRef = ref(database, 'chats');
export const messagesRef = ref(database, 'messages');
export const getChatRefById = (id) => ref(database, `chats/${id}`);
export const getChatMsgsListRefById = (chatId) => ref(database, `messages/${chatId}/messageList`);
export const getChatMsgsRefById = (chatId) => ref(database, `messages/${chatId}`);

