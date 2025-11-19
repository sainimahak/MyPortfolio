import React, { useState } from 'react';
import '../App.css';
import about from '../NabbarImg/about.png';
import contact from '../NabbarImg/contact.png';
import education from '../NabbarImg/education.png';
import home from '../NabbarImg/home.png';
import skills from '../NabbarImg/skills.png';

const navLinks = [
    { name: 'Home', href: '#home', icon: home },
    { name: 'About', href: '#about', icon: about },
    { name: 'Skills', href: '#skills', icon: skills },
    { name: 'Education', href: '#education', icon: education },
    { name: 'Contact', href: '#contact', icon: contact },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className="fixed top-0 z-50 w-full shadow-lg">
            <div className="bg-[#2176ff] h-16 w-full flex justify-between items-center px-4 md:px-8 text-white">
                <div className='flex items-center gap-3'>
                    <img className='h-10 w-10 rounded-full object-cover border-2 border-white' src="logo.png" alt="Logo" />
                    <div className="text-xl font-extrabold italic tracking-wider">
                        Mahak's Portfolio
                    </div>
                </div>

                <div className='hidden md:flex items-center gap-4'>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            className='p-2 rounded-md hover:bg-blue-600 transition duration-200'
                            href={link.href}
                            title={link.name}
                        >
                            <img className='h-6 w-6 navbarimg' src={link.icon} alt={link.name} />
                        </a>
                    ))}
                </div>

                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 rounded-md hover:bg-blue-600 transition duration-150"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                        </svg>
                    </button>
                </div>
            </div>

            <div
                className={`md:hidden absolute left-0 w-full bg-[#2176ff] shadow-lg transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
            >
                <div className="flex justify-around p-4 space-x-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            className='p-2 rounded-md hover:bg-blue-600 transition duration-150'
                            href={link.href}
                            onClick={handleLinkClick}
                            title={link.name}
                        >
                            <img className='h-8 w-8 navbarimg' src={link.icon} alt={link.name} />
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
