import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { getFirestore, collection, addDoc ,doc ,getDocs,query } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

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
const db = getFirestore(app);

//login
function foo() {
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
}

let logIn = document.getElementById("loginID");
logIn?.addEventListener("click", foo)
//data Enter

const ok = async () => {
    let Name = document.getElementById("name");
    let F_name = document.getElementById("f_name");
    let Roll = document.getElementById("rollnum");
    let Email = document.getElementById("email");
    let PhoneNO = document.getElementById("phoneNo");
    let CNIC = document.getElementById("cnic");
    let Img = document.getElementById("getimg");
    let Course = document.getElementById("course");

    try {
        const docRef = await addDoc(collection(db, "student"), {
            Name: Name.value,
            F_name: F_name.value,
            Roll: Roll.value,
            Email: Email.value,
            CNIC: CNIC.value,
            img: Img.value,
            Course: Course.value

        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}


let submit = document.getElementById("btnsub");
submit?.addEventListener("click", ok);