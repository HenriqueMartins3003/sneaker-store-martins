import { getApps, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDUB8ImZHcrfSUyJbARW409EEyauRIPRxI",
  authDomain: "sneaker-store-6fde3.firebaseapp.com",
  projectId: "sneaker-store-6fde3",
  storageBucket: "sneaker-store-6fde3.appspot.com",
  messagingSenderId: "1094596718579",
  appId: "1:1094596718579:web:f862b804171819a14eac86",
};
const APP_FIREBASE =
  getApps().length > 0 ? getApps()[0] : initializeApp(firebaseConfig);

export { APP_FIREBASE };
