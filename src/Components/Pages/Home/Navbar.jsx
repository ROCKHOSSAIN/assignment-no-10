import { useContext, useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom'
import { AuthContext } from '../../Provider/AuthProvider';
const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const [theme, setTheme] = useState("system");
    const element = document.documentElement
    const options = [
        {
            icon: 'sunny',
            text: 'light',
        },
        {
            icon: 'moon',
            text: 'dark',
        },
    ]
    useEffect(() => {
        switch (theme) {
            case 'dark':
                element.classList.add('dark');
                break;
            case 'light':
                element.classList.remove('dark');
                break;
            default:
                break;
        }
    }, [theme])
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
        <li className='text-lg font-poppins font-medium text-white'><NavLink to='/myCart/:id'>MyCart</NavLink></li>

    </>
    return (
        <div>
            <div className="navbar  dark:text-gray-600 dark:bg-black duration-100">
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
 
                    <div className='duration-100 dark:bg-slate-900 bg-gray-100 rounded'>

                        {
                            options?.map(opt => (
                                <button key={opt.text}
                                    onClick={() => setTheme(opt.text)}
                                    className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${theme === opt.text && 'text-sky-600'}`}>
                                    <ion-icon name={opt.icon}></ion-icon>
                                </button>
                            ))
                        }


                    </div> 
                </div>
            </div>
        </div>
    );
};

export default Navbar;