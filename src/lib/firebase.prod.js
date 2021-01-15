import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyD_jbIeD5-NLRsTzWfIyJB8FeGbZ4fkq7c',
  authDomain: 'netflix-clone-3d6d1.firebaseapp.com',
  projectId: 'netflix-clone-3d6d1',
  storageBucket: 'netflix-clone-3d6d1.appspot.com',
  messagingSenderId: '560568059300',
  appId: '1:560568059300:web:905c0c927630c786ed2d31',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
