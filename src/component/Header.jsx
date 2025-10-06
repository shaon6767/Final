import React from 'react'
import Container from './Container'
import { GoMail } from 'react-icons/go'
import { BiPhoneCall } from 'react-icons/bi'
import { FaRegHeart, FaUser } from 'react-icons/fa'
import { GrCart } from 'react-icons/gr'


const Header = () => {


    return (
        <section className='bg-[#7E33E0] font-josefin'>
            <Container>
                <div className="">
                    <div className="py-2">
                        <div className="grid grid-cols-6">
                            <div className="flex gap-10">
                                <div className="flex gap-2 items-center">
                                    <div className="text-white">
                                        <GoMail />
                                    </div>
                                    <div className="text-white">
                                        <p>mhhasanul@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="text-white">
                                        <BiPhoneCall />
                                    </div>
                                    <div className="text-white">
                                        <p>(12345)67890</p>
                                    </div>
                                </div>
                            </div>
                            <div className=""></div>
                            <div className=""></div>
                            <div className=""></div>
                            <div className="flex ml-[30px] items-center gap-3">
                                <div className="flex items-center">
                                    <div className="">
                                        <button
                                            id="dropdownDefaultButton"
                                            data-dropdown-toggle="dropdownLang"
                                            className="text-white rounded-lg text-sm px-1 py-2.5 text-center inline-flex items-center"
                                            type="button"
                                        >
                                            English
                                            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                            </svg>
                                        </button>

                                        <div id="dropdownLang" className="z-10 hidden bg-white divide-y divide-gray-100 shadow-sm w-25 dark:bg-gray-700">
                                            <ul className="text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                                <li>
                                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Bangla</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">French</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Arabic</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Spanish</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="ml-4">
                                        <div className="">
                                            <button
                                                id="dropdownDefaultSecButton"
                                                data-dropdown-toggle="dropdownCurrency"
                                                className="text-white rounded-lg text-sm px-1 py-2.5 text-center inline-flex items-center"
                                                type="button"
                                            >
                                                USD
                                                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                                </svg>
                                            </button>

                                            <div id="dropdownCurrency" className="z-10 hidden bg-white divide-y divide-gray-100 shadow-sm w-20 dark:bg-gray-700">
                                                <ul className="text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultSecButton">
                                                    <li>
                                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">EURO</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">BDT</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center px-2 gap-2 text-white">
                                    <p>Login</p>
                                    <FaUser />
                                </div>
                                <div className="flex items-center gap-2 px-2 text-white">
                                   <p>Wishlist</p>
                                    <FaRegHeart />
                                </div>
                                <div className="flex px-2 ml-[5px] text-white">
                                    <GrCart />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Header