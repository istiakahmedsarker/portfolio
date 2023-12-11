import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-[#022835] text-white font-medium p-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a className='text-lg text-gray-300 hover:text-teal-300 transition-colors duration-300'>Home</a></li>
                        <li><a className='text-lg text-gray-300 hover:text-teal-300 transition-colors duration-300'>About</a></li>
                        <li><a className='text-lg text-gray-300 hover:text-teal-300 transition-colors duration-300'>Projects</a></li>
                        <li><a className='text-lg text-gray-300 hover:text-teal-300 transition-colors duration-300'>Contact</a></li>
                    </ul>
                </div>
                <a className="text-5xl text-gray-300">Portfolio.</a>
            </div>

            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='text-lg text-gray-300 hover:text-teal-300 transition-colors duration-300'><a>Home</a></li>
                    <li className='text-lg text-gray-300 hover:text-teal-300 transition-colors duration-300'><a>About</a></li>
                    <li className='text-lg text-gray-300 hover:text-teal-300 transition-colors duration-300'><a>Projects</a></li>
                    <li className='text-lg text-gray-300 hover:text-teal-300 transition-colors duration-300'><a>Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
