import { Link } from 'react-router-dom'
import { AuthContext } from '../../Provider/AuthProvider';
import { useContext } from 'react';
const Login = () => {
    const {signinUser} = useContext(AuthContext)
    const handlesignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signinUser(email,password)
        .then(result=>{
            console.log(result.user)
            console.log('logged in')
        })
        .catch(error=>{
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
              <p className='text-[10px] md:text-base font-semibold flex justify-between gap-6'>Do you have any account? <Link to='/register'><span className=' hover:border-b-2 border-blue-500 '> Register here!!</span></Link></p>
            </form>
          </div>
        </div>
      </div> 
    );
};

export default Login;