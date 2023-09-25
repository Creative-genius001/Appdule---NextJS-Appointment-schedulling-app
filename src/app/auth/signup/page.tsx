'use client';

import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import '../../styles/auth.css'


const Page = () => {
    const [error, setError] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = () => {

    }
   
    return ( 
        <>
        <div className='hero-section'>
            {/* <div className= "hero-img w-[45%] h-[100vh] rounded-lg bg-[#772929] ">
                <Image alt="frontimage" src={doc} className="img w-[100%] h-[100%] object-contain rounded-lg "/>
            </div> */}
            <div className="main-container w-[55%] h-[100vh] flex flex-col justify-center items-center bg-[white] ">
                
                <div className="main-container2 w-[50%] mx-auto">
                    <h1 className="font-semibold text-lightblue text-[2rem] mb-0 ">Signup</h1> 
                    {/* <p className="text-[1rem] text-dark ">Please enter your details to login.</p>   */}
                <div className="mt-4">
                    <form onSubmit={handleSubmit}>
                        <div className="flex w-full gap-3">
                            <div className="flex flex-col">
                                <label className="text-base font-semibold mb-1 ">Firstname</label>
                                <input onChange={(e: ChangeEvent<HTMLInputElement>)=> setEmail(e.target.value)} type="text" placeholder="Firstname"></input>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-base font-semibold mb-1 ">Lastname</label>
                                <input onChange={(e: ChangeEvent<HTMLInputElement>)=> setEmail(e.target.value)} type="text" placeholder="Lastname"></input>
                            </div>
                        </div>
                        <div className="flex flex-col mt-3">
                            <label className="text-base font-semibold mb-1 ">Email</label>
                            <input onChange={(e: ChangeEvent<HTMLInputElement>)=> setEmail(e.target.value)} type="text" placeholder="Email"></input>
                        </div>
                        <div className="flex flex-col mt-3">
                            <label className="text-base font-semibold mb-1">Password</label>
                            <input type='password' onChange={(e: ChangeEvent<HTMLInputElement>)=> setPassword(e.target.value)} placeholder="Password"></input>
                        </div>
                        <input className="button" type="submit" value='Signup' />
                    </form>
                    <div className="mt-3">
                        <p className="text-center text-dark mt-2 text-base ">Already have an account? <Link href={"/auth/signup"}><span className="font-semibold text-lightblue ">Login</span></Link></p>
                    </div>
                </div>
                </div>  
            </div>
        </div>
        </>
        
     );
}

 
export default Page;