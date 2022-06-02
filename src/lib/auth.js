import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js';
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js';

const firebaseConfig = {
  apiKey: 'AIzaSyB4O-Y9mln0suJ3Qde6tfaaLNkXBdNOQ4s',
  authDomain: 'paleofriends-4dd40.firebaseapp.com',
  projectId: 'paleofriends-4dd40',
  storageBucket: 'paleofriends-4dd40.appspot.com',
  messagingSenderId: '1030275915014',
  appId: '1:1030275915014:web:371f8f9fa19dcfc72f9287',
  measurementId: 'G-648XF8C66W',
};

initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
export const auth = getAuth();

export const loginGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};

export const exit = () => signOut(auth);

export const db = getFirestore();

export const createMyPost = async (text) => {
  await addDoc(collection(db, 'text'), { text, email: auth.currentUser.email });
};

export const getPost = () => getDocs(collection(db, 'text'));

export const deletePost = async (id) => {
  await deleteDoc(doc(db, 'text', id));
  console.log({ id });
};
