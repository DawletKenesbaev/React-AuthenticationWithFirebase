import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const app = initializeApp({
  apiKey: "AIzaSyAWtKPOBTC41jneJtNWPWgzX5Nj5TWzMSs",
  authDomain: "practise1---development.firebaseapp.com",
  projectId: "practise1---development",
  storageBucket: "practise1---development.appspot.com",
  messagingSenderId: "492776110437",
  appId: "1:492776110437:web:74cbe14ac4b5211e7dc98c"
})

export const auth = getAuth(app);
export default app;