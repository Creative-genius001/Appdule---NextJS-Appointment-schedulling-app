import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config/firebase";
import handleError from "../utils/errorhandler";
import { User } from "../models/user.model";
import { getUserData, createUser } from "./user.service";
import { DocumentData } from "firebase/firestore";
import jwtDecode, { JwtPayload } from "jwt-decode";
import { redirect } from "next/navigation";

const app = initializeApp(firebaseConfig);
const auth = getAuth();


async function Signup(email: string, password: string, firstName: string, lastName: string){
    const res = await createUserWithEmailAndPassword(auth, email, password);
    console.log(res)
    if(!res){
        return false;
    }
    const User = {
        user_id: res.user.uid,
        firstName,
        lastName,
        email: res.user.email,
        updatedAt: new Date().toISOString(),
        createdAt: new Date().toISOString()
    }
    await createUser(User)
    return true;
}

async function Login(email: string, password: string): Promise<string | undefined>{
    try {
        const res: UserCredential = await signInWithEmailAndPassword(auth, email, password)
        if(!res){
            throw new Error('Invalid Credentials');
        }
        const accessToken =  await res.user.getIdToken();
        localStorage.setItem('atk', accessToken);
        return res.user.uid;
    } catch (error: any) {
        throw error.message;
    }
}


function checkUserLoggedIn(){
    const token = localStorage.getItem('atk');
    if(!token) return false;
    const decodedToken = jwtDecode<JwtPayload>(token);
    const expirationTime = decodedToken.exp
    if(!expirationTime) return false;
    const currentTime = new Date().getTime()
    if ((expirationTime*1000) < currentTime) {
        return false;
    };
    return true;
}

async function Logout(){
    await signOut(auth)
    localStorage.removeItem('atk')
    localStorage.removeItem('utk')
}


export {Signup, Login, Logout, checkUserLoggedIn}