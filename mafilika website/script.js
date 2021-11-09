// paste the unique firebase objects

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClJlqVxXIGPkhsub6qD-ggdkz8lxENyCM",
  authDomain: "photograpgy-form.firebaseapp.com",
  projectId: "photograpgy-form",
  storageBucket: "photograpgy-form.appspot.com",
  messagingSenderId: "928776332717",
  appId: "1:928776332717:web:cd44848ad88c81e0bd2d24"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore()

// variable to access database collection
 const db = firestore.collection("fornData")

 // get submit form

 let submitButton  = document.getElementById('submit')

 //create a event listener to allow form submissiion 
 submitButton.addEventListener("click", (e) =>{
     //prevent default form submision by adding a prevent default
     e.preventDefault()
     //get the form values
     let firstName = document.getElementById('first').value
     let lastName = document.getElementById('last').value
     let mail = document.getElementById('mail').value
     let phone = document.getElementById('phone').value
     //let message = document.getElementById('message').value

     //save form data to firebase
     db.doc().set({
       first: firstName,
       last: lastName,
       mail: mail,
      // message: message
     }).then( () =>{
        console.log("Data saved")
     }).catch((error) =>{
         console.log(error)
     })
 })
