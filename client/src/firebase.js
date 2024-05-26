// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrkUBnzKIpY9wcK78CVClLDDnU0tmp_S8",
  authDomain: "mern-blog-d63cc.firebaseapp.com",
  projectId: "mern-blog-d63cc",
  storageBucket: "mern-blog-d63cc.appspot.com",
  messagingSenderId: "1096159301994",
  appId: "1:1096159301994:web:cfd88bd16c63c6aa9bd513",
//   measurementId: "G-BZR96J32J8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);