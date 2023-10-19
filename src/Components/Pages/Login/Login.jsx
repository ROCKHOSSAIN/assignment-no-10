import React from 'react';
import { Link } from 'react-router-dom'
const Login = () => {
    const handlesignIn=(e)=>{
        const form = e.target;
        const name = form.name.value
        const email = form.email.value; 
        const password = form.password.value; 
        console.log(name,email,password)
    }
    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handlesignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <p className='text-base font-bold'>Don't have any account? <Link to='/signup'>Register</Link></p>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;