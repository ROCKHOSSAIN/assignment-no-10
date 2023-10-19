import { Link } from 'react-router-dom'
import { AuthContext } from '../../Provider/AuthProvider';
import { useContext, useState } from 'react';
import swal from 'sweetalert';
import { ImGithub, ImGoogle } from "react-icons/im";
const Login = () => {
    const { signinUser,googleLogin } = useContext(AuthContext)
    const [error, seterror] = useState(null)


    const handlesignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
            signinUser(email, password)
                .then(result => {
                    console.log(result.user)
                    swal("Welcome!", "User has been logged in successfully", "success");
                })
                .catch(error => {
                    console.error(error)
                    seterror('Your Email or Password is wrong!!')

                })
    }
    const handleGoogle=()=>{
        googleLogin()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error => {
            console.error(error)

        })
    }
    return (
        <div className="hero py-20 bg-base-200">
            <div className="hero-content flex-col lg:flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login</h1>
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
                            <span className='text-xs mt-2 cursor-pointer'>Forget Password?</span>

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        {
                            error && <p className='text-red-700 font-semibold'>{error}</p>
                        }
                        <p className='text-[10px] md:text-base font-semibold flex justify-between gap-6'>Do you have any account? <Link to='/register'><span className=' hover:border-b-2 border-blue-500 '> Register here!!</span></Link></p>
                        <div className="flex  gap-5">
                            <button onClick={handleGoogle} className="flex items-center border-2 rounded-xl md:p-4 py-2 border-blue-400 text-black">Login with Google
                                <ImGoogle className=" ml-0 md:ml-3 text-2xl md:text-2xl"></ImGoogle>
                            </button>

                            <button className="flex items-center border-2 border-blue-400 rounded-xl md:p-4 text-black">Login with Github
                                <ImGithub className="ml-0 md:ml-3  text-2xl md:text-3xl">flex items-center </ImGithub>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;