import { DocumentData, deleteDoc, addDoc, collection, doc, getDoc, getDocs, getFirestore, query, setDoc, where } from "firebase/firestore"
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
    return appointments;
    
}


async function getSingleAppointment(uid: string): Promise<unknown>{
    const docRef = doc(db, "appointments", uid);
    const docSnap = await getDoc(docRef);
    if(!docSnap){
        throw new Error('Could not get appointments')
    }

    return (docSnap.data())
}


async function getUpcomingAppointment(): Promise<unknown>{
    const U: any = []
    const q = query(collection(db, "appointments"), where("status", "==", 'ACTIVE'));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        U.push(doc.data())
    });
    return U;

}

async function createAppointment(data: AppointmentRequest) : Promise<void>{
    const random = generateRandomString(10);

    const body: AppointmentModel = {...data,
        appointment_id: random, 
        status: 'ACTIVE', 
        updatedAt: new Date().toISOString(),
        createdAt: new Date().toISOString()
    }
    try {
        await addDoc(collection(db, "appointments"), body)
    } catch (error) {
        console.error('error creating appointment', error)
        throw error;
    }
    
       

}

const deleteAppointment = async(uid: string) :Promise<void> => {
    let DOC_ID = '';
    try {
        const docRef = query(collection(db, "appointments"), where("appointment_id", "==", uid));
        const querySnapshot = await getDocs(docRef);
        querySnapshot.forEach((doc) => {
            DOC_ID = doc.id
        });
        await deleteDoc(doc(db, "appointments", DOC_ID));
        
    } catch (error) {
        throw Error('Error deleting appointment')
    }
    
}

export {
    getAppointments,
    deleteAppointment,
    getSingleAppointment,
    createAppointment,
    getUpcomingAppointment
}