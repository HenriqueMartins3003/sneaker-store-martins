import { initializeApp } from "firebase/app";

const FirebaseApp = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyDCY5lnAmVg8F8UlouivKub8H3dM8u9EIE",
    authDomain: "sneaker-store-7325c.firebaseapp.com",
    projectId: "sneaker-store-7325c",
    storageBucket: "sneaker-store-7325c.appspot.com",
    messagingSenderId: "282095458875",
    appId: "1:282095458875:web:f5734906e5290e91579a1e",
  };

  const app = initializeApp(firebaseConfig);

  return app;
};

export { FirebaseApp };
