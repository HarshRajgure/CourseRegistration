import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAIpT0cSJUrc5ZYq95k8DNdyUq93QnCw-Y",
  authDomain: "my-course-registration-487fa.firebaseapp.com",
  databaseURL: "https://my-course-registration-487fa-default-rtdb.firebaseio.com",
  projectId: "my-course-registration-487fa",
  storageBucket: "my-course-registration-487fa.firebasestorage.app",
  messagingSenderId: "1036992534026",
  appId: "1:1036992534026:web:db937ec71acc5feb4af1f3",
  measurementId: "G-4K330EVNGH"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);
export { app }; 