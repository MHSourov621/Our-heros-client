import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import logo from '../../assets/logo.png'

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    return (
        <div className="navbar md:p-8 bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='hover:text-orange-400'><Link to="/">Home</Link></li>
                        <li className='hover:text-orange-400'><Link to="/allToys">All Toys</Link></li>
                        <li className='hover:text-orange-400'><Link to="/Blogs">Blogs</Link></li>
                    </ul>
                </div>
                <div className='flex items-center'>
                    <img className='w-24 h-24' src={logo} alt="" />
                    <a className="text-xl md:text-4xl font-bold">Our <span className='text-orange-400'>Heros</span></a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="text-xl menu-horizontal px-1">
                    <li className='mr-8 hover:text-orange-400'><Link to="/">Home</Link></li>
                    <li className='mr-8 hover:text-orange-400'><Link to="/allToys">All Toys</Link> </li>
                    <li className='mr-8 hover:text-orange-400'><Link to="/Blogs">Blogs</Link></li>
                    {
                        // user &&
                        <>
                            <li className='mr-8 hover:text-orange-400'><Link to="/addToy">Add a Toy</Link> </li>
                            <li className='mr-8 hover:text-orange-400'><Link to="/myToy">My Toys</Link></li>
                        </>
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? (
                        <>
                            {/* {console.log(user)} */}
                            <div className=' user-image flex'>
                                {user.photoURL && <img className='w-12 rounded-full mr-4' src={user.photoURL} alt="" />}
                                <p className='mr-4 my-auto hidden user-name'>{user.displayName}</p>
                            </div>
                            <button onClick={logout} className='bg-orange-400 hover:bg-orange-500 text-white btn'>Logout</button>
                        </>
                    )
                        :
                        <ul className="text-xl menu-horizontal px-1">
                            <li className='mr-8 hover:text-orange-400'><Link to="/login">Login</Link> </li>
                            <li className='hover:text-orange-400'><Link to="/register">Register</Link></li>
                        </ul>
                }
            </div>
        </div>
    );
};

export default Navbar;