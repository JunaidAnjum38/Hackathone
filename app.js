import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth ,signInWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyC7NHpm7fJp9WUTNrIVV2H6tp_hsyeTBBw",
  authDomain: "hackathone-9bae9.firebaseapp.com",
  projectId: "hackathone-9bae9",
  storageBucket: "hackathone-9bae9.appspot.com",
  messagingSenderId: "249162705311",
  appId: "1:249162705311:web:a1b721030d7b321ecd75aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let logIn = document.getElementById("login");
logIn.addEventListener("click" , ()=>{
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("ho gaya log in")
    window.location = "./dashboard/index.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("nhi hua log in")
  });
})

let logout = document.getElementById("btnOut");
logout.addEventListener("click", ()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          console.log ("nhi hua")
          // ...
        } else {
          // User is signed out
          // ...
          console.log("ho gaya")
          window.location = "../index.html"
        }
      });
})