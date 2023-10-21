import { useContext} from 'react';
import { NavLink, Link } from 'react-router-dom'
import { AuthContext } from '../../Provider/AuthProvider';
import { FaMoon } from "react-icons/fa";

const Navbar = ({handleThemeSwitch}) => {
    const { user, logout } = useContext(AuthContext);
  
    const handleSignOut = () => {

        logout()
            .then(() => {

            })
            .catch(error => {
                console.error(error)
            })
    }
    const links = <>
        <li className='text-lg font-poppins font-medium text-white'><NavLink to='/'>Home</NavLink></li>
        <li className='text-lg font-poppins font-medium text-white'><NavLink to='/addProduct'>Add Product</NavLink></li>
        <li className='text-lg font-poppins font-medium text-white'><NavLink to='/myCart'>MyCart</NavLink></li>

    </>
    return (
        <div>
            <div className="navbar bg-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black-100  rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <div>

                    </div>

                    <img className='w-[100px] md:w-[150px] '
                        src="/images/logo_main.png" alt="" />


                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <>
                                
                                <span className='text-xs md:text-base text-white'>{user.displayName ? user.displayName : 'Rocky'}</span>
                                <span><img className='w-[30] md:w-[60px] m-0 md:m-2' src={user.photoURL ? user.photoURL : "https://i.ibb.co/yBYsTYG/avatar-removebg-preview.png"} alt="" /></span>
                                <button onClick={handleSignOut} className='text-xs md:text-lg font-poppins font-medium p-1 md:p-3  bg-white text-black'>Logout</button>
                            </>
                            :

                            <Link to='/login'>
                                <button className='text-lg font-poppins font-medium p-3 text-white'>Login</button>
                            </Link>

                    }
                    <button className='ml-0 md:ml-2 p-1  md:p-2 border-2  text-gray-400 z-20 text-xl md:text-2xl' onClick={handleThemeSwitch}><FaMoon></FaMoon></button>
                   
                </div>
            </div>
        </div>
    );
};

export default Navbar;