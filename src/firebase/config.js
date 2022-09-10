import * as firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDuyJlfLU4Nu66Y30nIRuN5E47tKOUPdAo",
    authDomain: "firegram-dc0fa.firebaseapp.com",
    projectId: "firegram-dc0fa",
    storageBucket: "firegram-dc0fa.appspot.com",
    messagingSenderId: "28123203552",
    appId: "1:28123203552:web:a2c068c1137d476ba94d85"
  };



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();


export { projectStorage, projectFirestore };