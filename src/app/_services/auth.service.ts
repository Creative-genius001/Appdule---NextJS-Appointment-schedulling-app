import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config/firebase";
import handleError from "../utils/errorhandler";
import { UserLoginResponse } from "../models/user.model";
import { getUserData } from "./user.service";
import { DocumentData } from "firebase/firestore";
import { useRouter } from "next/router";

const app = initializeApp(firebaseConfig);
const auth = getAuth();

async function Signup(email: string, password: string, firstname: string, lastname: string){
    const res = await createUserWithEmailAndPassword(auth, email, password);
    if(!res){
        throw new Error('Could not SignUp user');
    }
}

async function Login(email: string, password: string){
    
    const res: UserCredential = await signInWithEmailAndPassword(auth, email, password)
    if(!res){
        throw new Error('Invalid Credentials');
    }
    const User: DocumentData | undefined = await getUserData(res.user.uid);
    if(!User){
        throw new Error('Could not create new user')
    }
    localStorage.setItem('utk', JSON.stringify(User));
    return ({statusCode: 200})
}


export {Signup, Login}