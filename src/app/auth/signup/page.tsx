'use client';

import { useEffect } from "react";
import Link from "next/link";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import '../../styles/auth.css'
import { register } from "@/app/store/auth/authSlice";
import { useRouter } from "next/navigation";
import BtnLoader from "@/app/components/btnLoader";
import Error from "@/app/components/error";
import { RootState, useAppDispatch } from "@/app/store/store";
import { useSelector } from "react-redux";
import toast from 'react-hot-toast';

export interface SignupProp {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}


const Page = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const { error, loading, status } = useSelector((state: RootState) => state.auth);


    useEffect(() => {
    if (status == true) {
      router.push("/auth/login");
    }
    }, [router, dispatch, status]);

    let SignupSchema = Yup.object().shape({
        firstName: Yup.string().required('Required!'),
        lastName: Yup.string().required('Required!'),
        email: Yup.string().required('Required!').email('Invalid Email'),
        password: Yup.string().required().min(8, 'Minimum of 8 characters')
    });

    if(error){
        toast.error(error, {id: error})
    }



    const handleSubmit = async(value: SignupProp) =>{
        const {email, password, firstName, lastName} = value;
        dispatch(register({email, password, firstName, lastName}));
    }
   
    return ( 
        <>
        <div className='hero-section'>
            <div className="main-container md:w-[55%] sm:w-screen h-[100vh] flex flex-col justify-center items-center bg-[white] ">
                <div className="main-container2 lg:w-[50%] sm:w-full mx-auto sm:px-4 md:px-0">
                    <h1 className="font-semibold text-lightblue text-[2rem] mb-0 ">Signup</h1> 
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
                        <button className={loading ? 'button-disabled' : 'button'} type="submit" disabled={loading}>{ loading ? <BtnLoader /> : 'Signup' }</button>
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