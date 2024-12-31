import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from '../firebase.config';



const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(""); // State to store error message

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        // Firebase login
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("User logged in:", user);
                setError(""); // Clear error message
                navigate("/home"); // Navigate to the home page
            })
            .catch((error) => {
                console.error("Login Error:", error.message);
                setError("Invalid email or password. Please try again!"); // Set error message
            });
    };

    return (
        <div>
            
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold w-[500px]">Login now!</h1>
                        <p className="py-6"></p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    required
                                />
                                
                                <label className="label">
                                    <span className="label-text-alt text-base">
                                        You haven't any account? Please <NavLink to="/register">
                                            <span className='text-blue-700 link'>register</span>
                                        </NavLink>
                                    </span>
                                </label>
                            </div>
                            {/* Display error message */}
                            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                                
            
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
