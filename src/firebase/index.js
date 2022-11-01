import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAlysTwofaMFnf5sJWyA5li2SWczIKREFU",
  authDomain: "ezwebsolutions.firebaseapp.com",
  projectId: "ezwebsolutions",
  storageBucket: "ezwebsolutions.appspot.com",
  messagingSenderId: "433151536447",
  appId: "1:433151536447:web:bd041b9d2622d65051778a",
  measurementId: "G-7D871E94EN"
};

export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);