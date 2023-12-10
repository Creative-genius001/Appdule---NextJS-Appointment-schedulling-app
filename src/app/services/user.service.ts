import { getFirestore, doc, setDoc, getDoc, DocumentData } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config/firebase";
import { User } from "../models/user.model";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const getUserData = async(uid: string): Promise<DocumentData | undefined> =>{
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    if(!docSnap){
        throw new Error('Could not get user data')
    }
    return (docSnap.data())
}

const createUser = async(user: User) =>{
    const res = await setDoc(doc(db, "users", user.user_id), user);
}

export {
    getUserData,
    createUser
}
