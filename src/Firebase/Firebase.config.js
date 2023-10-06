
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdNEbwtpRn7HezgTMcyISHZsiXFDZk7h4",
  authDomain: "career-hub-e110c.firebaseapp.com",
  projectId: "career-hub-e110c",
  storageBucket: "career-hub-e110c.appspot.com",
  messagingSenderId: "883244298506",
  appId: "1:883244298506:web:234cb91e2dff339a76caf3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;