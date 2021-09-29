import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyC9W5cYsUEf_5agt2ftKCETzaBmYeckLhs",
  authDomain: "fir-crud-ae48f.firebaseapp.com",
  databaseURL:"https://blind-chat-1c200-default-rtdb.firebaseio.com/",
  projectId: "fir-crud-ae48f",
  storageBucket: "fir-crud-ae48f.appspot.com",
  messagingSenderId: "724765812562",
  appId: "1:724765812562:web:bf74f6ea635fbd654b7c8b"
  };
  // Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();