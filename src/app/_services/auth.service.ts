import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config/firebase";
import handleError from "../utils/errorhandler";
import { User } from "../models/user.model";
import { getUserData, createUser } from "./user.service";
import { DocumentData } from "firebase/firestore";
import jwtDecode, { JwtPayload } from "jwt-decode";

const app = initializeApp(firebaseConfig);
const auth = getAuth();

async function Signup(email: string, password: string, firstName: string, lastName: string){
    const res = await createUserWithEmailAndPassword(auth, email, password);
    if(!res){
        throw new Error('Could not SignUp user');
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
    return ({statusCode: 200})
}

async function Login(email: string, password: string){

    const res: UserCredential = await signInWithEmailAndPassword(auth, email, password)
    if(!res){
        throw new Error('Invalid Credentials');
    }
    const accessToken =  await res.user.getIdToken();
    localStorage.setItem('atk', accessToken);
    const User: DocumentData | undefined = await getUserData(res.user.uid);
    if(!User){
        throw new Error('Could not create new user')
    }
    localStorage.setItem('utk', JSON.stringify(User));
    return ({statusCode: 200})
}


function checkUserLoggedIn(){
    const token = localStorage.getItem('atk');
    if(!token) return false;
    const decodedToken = jwtDecode<JwtPayload>(token);
    const expirationTime = decodedToken.exp
    if(!expirationTime) return false;
    const currentTime = new Date().getTime()
    if ((expirationTime*1000) < currentTime) {
        localStorage.removeItem('utk');
        return false;
    };
    return true;
}

async function Logout(){
    await signOut(auth)
    localStorage.removeItem('utk')
}


export {Signup, Login, Logout, checkUserLoggedIn}