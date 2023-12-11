import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-[#022835] text-white font-medium p-4">
            <div className="flex justify-between items-center">
                <div className="text-5xl font-bold text-gray-300 transition-colors duration-300">
                    <h1 >Portfolio</h1>
                </div>
                <div className="">
                    <ul className="flex space-x-4 text-lg">
                        <li className="text-gray-300 hover:text-teal-300 transition-colors duration-300">
                            Home
                        </li>
                        <li className="text-gray-300 hover:text-teal-300 transition-colors duration-300">
                            About
                        </li>
                        <li className="text-gray-300 hover:text-teal-300 transition-colors duration-300">
                            Projects
                        </li>
                        <li className="text-gray-300 hover:text-teal-300 transition-colors duration-300">
                            Contact
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;