'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Login, checkUserLoggedIn } from "@/app/services/auth.service";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import '../../styles/auth.css'
import Error from "@/app/components/error";
import { RootState, useAppDispatch } from "@/app/store/store";
import { login, reset } from "@/app/store/auth/authSlice";
import { useSelector } from "react-redux";
import BtnLoader from "@/app/components/btnLoader";
import toast from 'react-hot-toast';



const Page = () => {
    const { error, loading, status } = useSelector((state: RootState) => state.auth);
    const router = useRouter();
    const dispatch = useAppDispatch();


    useEffect(()=>{
        const isAuthenticated = checkUserLoggedIn();
        if(isAuthenticated){
            router.push('/home')
        }
    },)

    useEffect(() => {
    if (status == true) {
      router.push("/home");
    }
    }, [router, dispatch, status]);

    if(status == true){
        router.push('/home')
    }

    if(error){
        toast.error(error, {id: error});
    }

    const LoginSchema = Yup.object().shape({
        email: Yup.string().required('Email is required').email('Invalid Email'),
        password: Yup.string().required('Password is required').min(8, 'Minimum of 8 characters')
    });

    async function loginUser(email: string, password: string){
        dispatch(login({email, password}))
    }
   
    return ( 
        <>
        <div className='hero-section'>
            <div className="main-container md:w-[55%] sm:w-screen  h-[100vh] flex flex-col justify-center items-center bg-[white] ">
                <div className="main-container2 lg:w-[50%] sm:w-full mx-auto sm:px-4 md:px-0">
                    <h1 className="font-semibold text-lightblue text-[2rem] mb-0 ">Login</h1> 
                <div className="mt-4">
                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    validationSchema={LoginSchema}
                    onSubmit={value=>{
                        loginUser(value.email, value.password)
                    }}
                    >
                        {({ errors, touched, isSubmitting }) => (
                        <Form>
                        <div className="flex flex-col">
                            <label className="text-base font-medium mb-1 ">Email</label>
                            <Field name="email" placeholder="Enter your email" />
                            {errors.email && touched.email ? (<span className="text-[#ec4242] text-sm mt-1">{errors.email}</span>) : null}
                        </div>
                        <div className="flex flex-col mt-3">
                            <label className="text-base font-medium mb-1">Password</label>
                            <Field type='password' name="password" placeholder="Enter your password" />
                            {errors.password && touched.password ? (<span className="text-[#ec4242] text-sm mt-1">{errors.password}</span>) : null}
                        </div>
                        <Link href={"/forgot-password"}><p className="font-medium text-lightblue text-right mt-2">Forgot Password?</p></Link>
                        <button className={loading ? 'button-disabled' : 'button'} type="submit" disabled={loading}>{ loading ? <BtnLoader /> : 'Login' }</button>
                    </Form>
                        )}
                    </Formik>
                    <div className="mt-3">
                        <p className="text-center text-dark mt-2 text-base ">Do not have an account? <Link href={"/auth/signup"}><span className="font-semibold text-lightblue ">Sign up</span></Link></p>
                    </div>
                </div>
                </div>  
            </div>
        </div>
        </>
        
     );
}

 
export default Page;