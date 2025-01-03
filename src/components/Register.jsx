import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../firebase.config';




const Register = () => {

    const navigate = useNavigate();
    const [regError,setregError] = useState("")
    // const [subHandler,setsubHandler] = useState("")

    

    const handleSubmit =e =>{
        e.preventDefault();
       
        const email = e.target.email.value
        const password = e.target.password.value
        const number = e.target.number.value
        setregError("")

        
        createUserWithEmailAndPassword(auth,email, password)
  .then((userCredential) => {
    // Signed up 
    userCredential.user.phoneNumber = number
    navigate("/")
    console.log(userCredential.user);
    
    navigate("/login")
    

    // send dta base the gmail password and number 

    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log(errorCode);
    
    const errorMessage = error.message
    setregError(errorCode)
    
    // ..
  });
        
        
    }
    
    


    return (
        <div>
        
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold w-[500px]">Please register now</h1>
            <p className="py-6">
                
            </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit}>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input name = "password" type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                    <span className="label-text">Phone Number</span>
                </label>
                <input name = "number" type="number" placeholder="Phone Number" className="input input-bordered" required />
                <label className="label">
                    <a href="" className="label-text-alt text-lg ">Already have account please <Link className='link text-blue-500' to={"/login"}>login</Link></a>
                </label>
                </div>
                <div  className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
                
                
                </div>
            </form>
            {
                regError && <p className='ml-12 mb-12 text-red-600'>{regError}</p>
            }
            </div>
        </div>
        </div>
            
        </div>
    );
};

export default Register;