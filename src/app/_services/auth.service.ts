import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config/firebase";
import handleError from "../utils/errorhandler";

const app = initializeApp(firebaseConfig);
const auth = getAuth();

async function Signup(email: string, password: string, firstname: string, lastname: string){
    await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        // ...
    })
    .catch((error) => {
        const errormsg = handleError(error.code);
        return errormsg;
    });

}


async function Login(email: string, password: string){
   const res = await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        // ...
    })
    .catch((error) => {
        const errormsg = handleError(error.code);
        return errormsg;
    });

    return res;
}


export {Signup, Login}