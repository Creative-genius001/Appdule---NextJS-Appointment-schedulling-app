export interface AppointmentModel {
    user_id: string,
    appointment_id: string,
    title: string,
    date: string,
    time: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    status: 'ACTIVE' | 'PENDING' | 'COMPLETED'
}


export interface AppointmentRequest {
    user_id: string,
    title: string,
    date: string,
    time: string,
    description: string,
}