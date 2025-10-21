import React from 'react'
import Container from './Container'
import logo from "../assets/logo.png"
import { useEffect } from 'react';
import { initFlowbite } from 'flowbite';
import { IoSearch } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
                        <div className="col-span-2">
                            <ul className='flex gap-6 items-center'>
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
                                <li className='hover:text-[#FB2E86]'><Link to= "/allproduct"><a href="">Category</a></Link></li>
                                <li className='hover:text-[#FB2E86]'><Link to= "/shop"><a href="">Shop</a></Link></li>
                                <li className='hover:text-[#FB2E86]'><a href="#">Blog</a></li>
                                <li className='hover:text-[#FB2E86]'><a href="#">About</a></li>
                                <li className='hover:text-[#FB2E86]'><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-span-1">

                        </div>
                        <div className="col-span-2 px-2">
                            <div className="flex justify-end items-center">
                                <div className="">
                                    <input className='bg-[#D9D9D9] border-none' type="text" placeholder='Search...' />
                                </div>
                                <div className="w-[45px] h-[40px] bg-[#FB2E86] flex justify-center items-center">
                                    <div className=" text-[20px] text-white"><a href="#"><IoSearch /></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>



        </Container>
    )
}

export default Navbar