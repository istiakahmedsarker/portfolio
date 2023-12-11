import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-[#022835] text-white font-sans font-medium p-4">
            <ul className="flex space-x-4">
                <li className="text-white hover:text-teal-300 transition-colors duration-300">
                    Home
                </li>
                <li className="text-white hover:text-teal-300 transition-colors duration-300">
                    About
                </li>
                <li className="text-white hover:text-teal-300 transition-colors duration-300">
                    Projects
                </li>
                <li className="text-white hover:text-teal-300 transition-colors duration-300">
                    Contact
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;