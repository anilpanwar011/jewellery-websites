
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBTKHQ82FycQ9rwuZ8lUCeE8P5UFxgSYa8",
  authDomain: "jewellery-1662f.firebaseapp.com",
  projectId: "jewellery-1662f",
  storageBucket: "jewellery-1662f.firebasestorage.app",
  messagingSenderId: "498771001905",
  appId: "1:498771001905:web:3b8a1210a6f31c5e060b10",
  measurementId: "G-H708F25580"
};


 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);