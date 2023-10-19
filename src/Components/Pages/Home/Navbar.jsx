import { NavLink, Link } from 'react-router-dom'
const Navbar = () => {
    const links = <>
        <li  className='text-lg font-poppins font-medium text-white'><NavLink to='/home'>Home</NavLink></li>
        <li className='text-lg font-poppins font-medium text-white'><NavLink to='/addProduct'>Add Product</NavLink></li>
        <li className='text-lg font-poppins font-medium text-white'><NavLink to='/myCart'>MyCart</NavLink></li>

    </>
    return (
        <div>
            <div className="navbar bg-black ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <div>
                        
                    </div>
                   
                   <img className='w-[150px] ' 
                   src="/images/logo_main.png" alt="" />
                  

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/login'>
                        <button className='text-lg font-poppins font-medium p-3 text-white'>Login</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;