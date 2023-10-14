import React from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <div className="navbar">
                <div className="flex-1">
                    <ul className='md:flex gap-5 text-xl font-bold hidden'>
                        <li>
                            <Link to="/">
                                <img className='w-36' src={logo} alt="" />
                            </Link>
                        </li>
                        <li>Solutions</li>
                        <li>Feature</li>
                        <li>Blogs</li>
                        <li>About</li>
                    </ul>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <div className='flex gap-5 font-bold text-xl'>
                            <button className="btn rounded-md btn-outline border-[#0076CE] hover:bg-[#0076CE]">Login</button>
                            <button className="btn rounded-md btn-active bg-[#0076CE] text-white hover:bg-blue-800">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;