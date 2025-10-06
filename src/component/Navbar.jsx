import React from 'react'
import Container from './Container'
import logo from "../assets/logo.png"
import { useEffect } from 'react';
import { initFlowbite } from 'flowbite';
import { IoSearch } from 'react-icons/io5';

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
                                <li>
                                    <div className="ml-4">
                                        <button
                                            id="dropdownDefaultSecButton"
                                            data-dropdown-toggle="dropdownNav"
                                            className="text-black rounded-lg px-1 py-2.5 text-center inline-flex items-center hover:text-[#FB2E86]"
                                            type="button"
                                        >
                                            Home
                                            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                            </svg>
                                        </button>

                                        <div id="dropdownNav" className="z-10 hidden bg-white divide-y divide-gray-100 shadow-sm w-30">
                                            <ul className=" text-gray-700">
                                                <li>
                                                    <a href="#" className="block px-2 py-2 hover:bg-gray-100">Whats New!</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block px-2 py-2 hover:bg-gray-100">Discount</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block px-2 py-2 hover:bg-gray-100">Special offers</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className='hover:text-[#FB2E86]'><a href="#">Page</a></li>
                                <li className='hover:text-[#FB2E86]'><a href="#">Product</a></li>
                                <li className='hover:text-[#FB2E86]'><a href="#">Blog</a></li>
                                <li className='hover:text-[#FB2E86]'><a href="#">Shop</a></li>
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