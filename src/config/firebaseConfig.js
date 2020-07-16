import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyC0u48X1s1045ezKSTPyqq-BbY6jISj4Wc',
  authDomain: 'suchy-plan.firebaseapp.com',
  databaseURL: 'https://suchy-plan.firebaseio.com',
  projectId: 'suchy-plan',
  storageBucket: 'suchy-plan.appspot.com',
  messagingSenderId: '186854701879',
  appId: '1:186854701879:web:e93cf272c78cb759cd38b2',
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({});

export default firebase;
