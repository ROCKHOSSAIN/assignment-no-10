import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const handleregister=(e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value
        const email = form.email.value; 
        const password = form.password.value; 
        console.log(name,email,password);
        createUser(email,password)
        .then(result=>{
            console.log(result.user)
            console.log('registered')
        })
        .catch(error=>{
            console.error(error)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Registration Form!!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleregister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="Enter your name" name='name' className="input input-bordered" required />
            </div>
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
             
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <p className='text-xs md:text-base font-semibold flex justify-between'>Do you have any account? <Link to='/login'><span className=' hover:border-b-2 border-blue-500 '> Login here!!</span></Link></p>
          </form>
        </div>
      </div>
    </div>  
    );
};

export default Register;