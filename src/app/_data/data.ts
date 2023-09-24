export interface AppointmentData { 
    id: String,
    name: String,
    date: string,
    time: number,
    status: "ACTIVE" | "PENDING" | "COMPLETED" | "CANCELED"
    description: String
}

export const data : AppointmentData[] = [
    {
        
        id: "UTKKENKNE87L",
        name: "Improve Stress Management",
        date: new Date("2023-05-24").toDateString(),
        time: new Date('July 20, 69 20:17:40 GMT+00:00').getTime(),
        status: "ACTIVE",
        description: "Mauris, erat et. Donec, sociosqu aliquet. Sed nascetur. Nullam facilisis laoreet etiam magnis tincidunt class. Adipiscing vestibulum cursus metus facilisi venenatis. Interdum dui ligula. Ornare conubia pulvinar leo integer facilisis blandit elementum nostra. Blandit feugiat. Purus. Amet vulputate ridiculus taciti Varius dictumst et dapibus nulla ullamcorper vestibulum est purus ante."
    },
     {
       
        id: "LP0KKLO98E87L",
        name: "Full Body Checkup",
        date: new Date("2023-05-01").toDateString(),
        time: new Date('July 20, 69 02:17:40 GMT+00:00').getTime(),
        status: "COMPLETED",
        description: "A. Eget primis curabitur dapibus habitant conubia malesuada. Blandit scelerisque libero mattis. Dolor adipiscing sagittis dignissim lobortis fringilla cursus eu. Nunc, erat urna, sociis augue arcu netus lacinia vitae iaculis."
    }
]  