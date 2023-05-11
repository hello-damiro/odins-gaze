import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyC4Ind9FIyZbvnzM69YUmpX-U4Zyka6zK8',
    authDomain: 'odins-gaze.firebaseapp.com',
    projectId: 'odins-gaze',
    storageBucket: 'odins-gaze.appspot.com',
    messagingSenderId: '680725165504',
    appId: '1:680725165504:web:289857069039b54081c425',
    measurementId: 'G-T8KZDWMZTK',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
