import React, { useState } from 'react'
import Container from './Container'
import logo from "../assets/logo.png"
import { useEffect } from 'react';
import { initFlowbite } from 'flowbite';
import { IoSearch, IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    let [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        initFlowbite();
    }, []);
    return (
        <Container>
            <div className="font-josefin py-2 pb-2">
                <nav>
                    <div className="grid grid-cols-6 items-center">
                        <div className="col-span-1">
                            <a href="#"> <img src={logo} alt="" /></a>
                        </div>
                        
                        <div className="hidden lg:block col-span-2">
                            <ul className='flex gap-6 justify-center items-center'>
                                <li className="group relative">
                                    <div className="ml-4">
                                        <button
                                            className="text-black rounded-lg px-1 py-2.5 text-center inline-flex items-center hover:text-[#FB2E86] group"
                                            type="button"
                                        >
                                            <Link to="/">Home</Link>
                                        </button>
                                    </div>
                                </li>
                                <li className='hover:text-[#FB2E86]'><Link to="/allproduct">Products</Link></li>
                                <li className='hover:text-[#FB2E86]'><Link to="/blog">Blog</Link></li>
                                <li className='hover:text-[#FB2E86]'><Link to="/about">About</Link></li>
                                <li className='hover:text-[#FB2E86]'><Link to="/faq">FAQ</Link></li>
                                <li className='hover:text-[#FB2E86]'><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>

                        <div className="lg:hidden col-span-1 flex justify-center">
                            <button onClick={() => setMenuOpen(!menuOpen)} className="text-black">
                                {menuOpen ? <IoClose className="text-2xl" /> : <GiHamburgerMenu className="text-2xl" />}
                            </button>
                        </div>

                        <div className="hidden lg:block col-span-1"></div>
                        
                        <div className="col-span-4 lg:col-span-2 px-2">
                            <div className="flex justify-end items-center">
                                <div className="">
                                    <input className='bg-[#D9D9D9] border-none w-20 sm:w-auto' 
                                           type="text" placeholder='Search...' />
                                </div>
                                <div className="w-[45px] h-[40px] bg-[#FB2E86] flex justify-center items-center">
                                    <div className="text-[20px] text-white">
                                        <IoSearch />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {menuOpen && (
                        <div className="lg:hidden mt-2 bg-white shadow-lg rounded p-4 z-50 absolute left-4 right-4">
                            <ul className="flex flex-col gap-3 text-black">
                                <li className='hover:text-[#FB2E86] py-1'><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                                <li className='hover:text-[#FB2E86] py-1'><Link to="/allproduct" onClick={() => setMenuOpen(false)}>Products</Link></li>
                                <li className='hover:text-[#FB2E86] py-1'><Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
                                <li className='hover:text-[#FB2E86] py-1'><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
                                <li className='hover:text-[#FB2E86] py-1'><Link to="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link></li>
                                <li className='hover:text-[#FB2E86] py-1'><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                            </ul>
                        </div>
                    )}
                </nav>
            </div>
        </Container>
    )
}

export default Navbar