import { DocumentData, collection, doc, getDoc, getDocs, getFirestore, query, setDoc, where } from "firebase/firestore"
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config/firebase";
import { AppointmentModel } from "../models/appointment.model";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getAppointments(uid: string){
    const appointments: DocumentData[] = []
    const q = query(collection(db, "appointments"), where("user_id", "==", uid));
    const querySnapshot = await getDocs(q);
    if(!querySnapshot){
        console.error('Could not get Appointments')
    }
    querySnapshot.forEach((doc) => {
        console.log(doc.data())
        appointments.push(doc.data())
    });

    return appointments;
    
}


async function getSingleAppointment(uid: string){
    const docRef = doc(db, "appointments", uid);
    const docSnap = await getDoc(docRef);
    if(!docSnap){
        throw new Error('Could not get appointments')
    }

    return (docSnap.data())
}

export {
    getAppointments
}