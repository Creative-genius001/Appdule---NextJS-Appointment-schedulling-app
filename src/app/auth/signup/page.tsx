'use client';

import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import '../../styles/auth.css'
import { Signup } from "@/app/_services/auth.service";
import { useRouter } from "next/navigation";
import { schema } from "@/app/utils/validateAppointmentInput";


export interface SignupProp {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}


const Page = () => {
    const router = useRouter()
    const [error, setError] = useState<string>('');

    let SignupSchema = Yup.object().shape({
        firstName: Yup.string().required('Required!'),
        lastName: Yup.string().required('Required!'),
        email: Yup.string().required('Required!').email('Invalid Email'),
        password: Yup.string().required().min(8, 'Minimum of 8 characters')
    });



    const handleSubmit = async(value: SignupProp) =>{
        const res = await Signup(value.email, value.password, value.firstName, value.lastName);
        if(res.statusCode === 200){
            router.push('/auth/login')
        }
    }
   
    return ( 
        <>
        <div className='hero-section'>
            {/* <div className= "hero-img w-[45%] h-[100vh] rounded-lg bg-[#772929] ">
                <Image alt="frontimage" src={doc} className="img w-[100%] h-[100%] object-contain rounded-lg "/>
            </div> */}
            <div className="main-container md:w-[55%] sm:w-screen h-[100vh] flex flex-col justify-center items-center bg-[white] ">
                
                <div className="main-container2 lg:w-[50%] sm:w-full mx-auto sm:px-4 md:px-0">
                    <h1 className="font-semibold text-lightblue text-[2rem] mb-0 ">Signup</h1> 
                    {/* <p className="text-[1rem] text-dark ">Please enter your details to login.</p>   */}
                <div className="mt-4">
                    <Formik
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            email: '',
                            password: ''
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={value=>{
                            handleSubmit(value)
                        }}
                    >
                        {({ errors, touched, isSubmitting }) => (
                    <Form>
                        <div className="flex w-full gap-3">
                            <div className="flex flex-col w-full">
                                <label className="text-base font-medium mb-1 ">Firstname</label>
                                <Field name="firstName" type="text" placeholder="Firstname" />
                                {errors.firstName && touched.firstName ? (<span className="text-[#ec4242] text-sm mt-1">{errors.firstName}</span>) : null}
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="text-base font-medium mb-1 ">Lastname</label>
                                <Field name="lastName" type="text" placeholder="Lastname" />
                                {errors.lastName && touched.lastName ? (<span className="text-[#ec4242] text-sm mt-1">{errors.lastName}</span>) : null}
                            </div>
                        </div>
                        <div className="flex flex-col mt-3">
                            <label className="text-base font-medium mb-1 ">Email</label>
                            <Field name="email" type="text" placeholder="Email" />
                            {errors.email && touched.email ? (<span className="text-[#ec4242] text-sm mt-1">{errors.email}</span>) : null}
                        </div>
                        <div className="flex flex-col mt-3">
                            <label className="text-base font-medium mb-1">Password</label>
                            <Field name="password" type="password" placeholder="Password" />
                            {errors.password && touched.password ? (<span className="text-[#ec4242] text-sm mt-1">{errors.password}</span>) : null}
                        </div>
                        <button className="button" type="submit" disabled={isSubmitting}>Signup</button>
                    </Form>
                        )}
                    </Formik>
                    <div className="mt-3">
                        <p className="text-center text-dark mt-2 text-base ">Already have an account? <Link href={"/auth/login"}><span className="font-semibold text-lightblue ">Login</span></Link></p>
                    </div>
                </div>
                </div>  
            </div>
        </div>
        </>
        
     );
}

 
export default Page;