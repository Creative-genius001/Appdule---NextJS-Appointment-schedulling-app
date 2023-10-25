import { DocumentData, addDoc, collection, doc, getDoc, getDocs, getFirestore, query, setDoc, where } from "firebase/firestore"
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config/firebase";
import { AppointmentModel, AppointmentRequest } from "../models/appointment.model";
import generateRandomString from "../utils/generateRandomChar";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getAppointments(uid: string): Promise<AppointmentModel[]>{
    const appointments: any = []
    const q = query(collection(db, "appointments"), where("user_id", "==", uid));
    const querySnapshot = await getDocs(q);
    if(!querySnapshot){
        console.error('Could not get Appointments')
    }
    querySnapshot.forEach((doc) => {
        appointments.push(doc.data())
    });
    console.log(appointments)
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


async function getUpcomingAppointment(uid: string){
    const U: any = []
    const q = query(collection(db, "appointments"), where("status", "==", 'ACTIVE'));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        U.push(doc.data())
    });
    return U;

}

async function createAppointment(data: AppointmentRequest){
    const random = generateRandomString(10);

    const body: AppointmentModel = {...data,
        appointment_id: random, 
        status: 'PENDING', 
        updatedAt: new Date().toISOString(),
        createdAt: new Date().toISOString()
    }
    try {
        await addDoc(collection(db, "appointments"), body)
        return true 
    } catch (error) {
        console.error('error creating appointment')
        return false
    }
    
       

}

export {
    getAppointments,
    getSingleAppointment,
    createAppointment,
    getUpcomingAppointment
}