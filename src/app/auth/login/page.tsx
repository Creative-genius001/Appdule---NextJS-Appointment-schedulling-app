'use client';

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { Login, checkUserLoggedIn } from "@/app/_services/auth.service";
import { object, string, number, date, InferType } from 'yup';
// import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import '../../styles/auth.css'
import Error from "@/app/_components/error";


const Page = () => {
    const [error, setError] = useState<string | null>(null);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const router = useRouter();

    useEffect(()=>{
        const isAuthenticated = checkUserLoggedIn();
        if(isAuthenticated){
            router.push('/home')
        }
    },[])


    let userSchema = object({
        email: string().required('Email is required').email('Must be a valid email'),
        password: string().required('Password is required').min(8, 'Minimum of 8 characters')
    });


    const handleSubmit = async(email: string, password: string) => {
       await userSchema.validate({email, password})
                        .then((user)=>{
                            login(user.email, user.password)
                        }) 
                        .catch((err)=>{
                            console.log(err)
                        })
        
    }

    async function login(email: string, password: string){
        const res = await Login(email, password)
        if(res.statusCode === 200){
            router.push('/home')
        }
    }
   
    return ( 
        <>
        {error && <Error error={error} />}
        <div className='hero-section'>
            {/* <div className= "hero-img w-[45%] h-[100vh] rounded-lg bg-[#772929] ">
                <Image alt="frontimage" src={doc} className="img w-[100%] h-[100%] object-contain rounded-lg "/>
            </div> */}
            <div className="main-container md:w-[55%] sm:w-screen  h-[100vh] flex flex-col justify-center items-center bg-[white] ">
                
                <div className="main-container2 lg:w-[50%] sm:w-full mx-auto sm:px-4 md:px-0">
                    <h1 className="font-semibold text-lightblue text-[2rem] mb-0 ">Login</h1> 
                    {/* <p className="text-[1rem] text-dark ">Please enter your details to login.</p>   */}
                <div className="mt-4">
                    <form onSubmit={(e)=> {
                        e.preventDefault()
                        handleSubmit(email, password)
                        }}>
                        <div className="flex flex-col">
                            <label className="text-base font-medium mb-1 ">Email</label>
                            <input onChange={(e: ChangeEvent<HTMLInputElement>)=> setEmail(e.target.value)} type="email" placeholder="Enter your email"></input>
                        </div>
                        <div className="flex flex-col mt-3">
                            <label className="text-base font-medium mb-1">Password</label>
                            <input type='password' onChange={(e: ChangeEvent<HTMLInputElement>)=> setPassword(e.target.value)} placeholder="Enter your password"></input>
                        </div>
                        <Link href={"/forgot-password"}><p className="font-medium text-lightblue text-right mt-2">Forgot Password?</p></Link>
                        <input className="button" type="submit" value='Login' />
                    </form>
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