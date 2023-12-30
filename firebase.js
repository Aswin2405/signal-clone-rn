import * as firebase from 'firebase';
// Optionally import the services that you want to use
import "firebase/firestore";
import "firebase/auth";
//import "firebase/database";

//import "firebase/functions";
//import "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyDP8yvGSkOl4HBvJcaWInYBTsUWC5ep5WA",
    authDomain: "aswin-message-fc957.firebaseapp.com",
    projectId: "aswin-message-fc957",
    storageBucket: "aswin-message-fc957.appspot.com",
    messagingSenderId: "347636706559",
    appId: "1:347636706559:web:b1be445bcead4728b770ca",
    measurementId: "G-2L6K6WYJTT"
  };
  let app
  if(firebase.apps.length===0){
      app=firebase.initializeApp(firebaseConfig)
  }else{
      app=firebase.app()
  }
  const db=app.firestore()
  const auth=firebase.auth()
  export {db,auth} 