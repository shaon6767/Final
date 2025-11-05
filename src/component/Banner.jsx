import React from 'react'
import { useState, useRef } from 'react';
import Container from './Container'
import { useEffect } from 'react';
import { initFlowbite } from 'flowbite';
import sofa from "../assets/sofa.png"
import Slider from 'react-slick';
import ban from "../assets/banner.png"
import { Link } from 'react-router-dom';

const Banner = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [updateCount, setUpdateCount] = useState(0);
    let sliderRef = useRef()

    var settings = {
        infinite: true,
        arrows: false,
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: window.innerWidth < 1024,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    autoplay: true 
                }
            },
            {
                breakpoint: 768, 
                settings: {
                    autoplay: true 
                }
            },
            {
                breakpoint: 1024, 
                settings: {
                    autoplay: false 
                }
            }
        ],
        appendDots: dots => (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "10px"
                }}
            >
                <ul style={{ display: "flex", margin: "0px", gap: "15px" }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div
                style={{
                    height: "12px",
                    width: "12px",
                    color: "blue",
                    borderRadius: "50%",
                    border: "1px gray solid"
                }}
            >
            </div>
        ),
        afterChange: () => setUpdateCount(updateCount + 1),
        beforeChange: (current, next) => setSlideIndex(next)
    };

    useEffect(() => {
        initFlowbite();
    }, []);

    return (
        <section className='bg-[#F2F0FF]'>
            <Container>
                <div className="relative">
                    <div className="font-josefin py-4">

                        <div className="hidden lg:block absolute top-0 left-[-200px]">
                            <img src={ban} alt="" />
                        </div>

                        <div className="hidden lg:block absolute top-[530px] left-[-170px]">
                            <div className="max-w-[80px]">
                                <input
                                    onChange={e => sliderRef.slickGoTo(e.target.value)}
                                    value={slideIndex}
                                    type="range"
                                    min={0}
                                    max={3}
                                />
                            </div>
                        </div>

                        <Slider ref={slider => { sliderRef = slider; }} {...settings}>
                            <div className="relative">
                                <div className="lg:absolute lg:top-[200px] lg:left-0 text-center lg:text-left px-4 lg:px-0">
                                    <p className='text-[#FB2E86] text-sm sm:text-base lg:text-[18px]'>Best Furniture For Your Castle....</p>
                                    <h2 className='text-2xl sm:text-3xl lg:text-[53px] font-semibold mt-4 lg:mt-[20px] font-josefin w-full lg:w-[644px]'>
                                        New Furniture Collection Trends in 2020
                                    </h2>
                                    <p className='w-full lg:w-[560px] mt-3 lg:mt-[20px] text-xs sm:text-sm lg:text-lg'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
                                    </p>
                                    <Link to="/allproduct">
                                        <button className='mt-6 lg:mt-[40px]'>
                                            <a className='px-4 py-2 sm:px-6 sm:py-3 bg-[#FB2E86] text-white text-sm sm:text-base' href="#">Shop Now</a>
                                        </button>
                                    </Link>
                                </div>
                                <div className="flex justify-center lg:justify-end mt-4 lg:mt-0">
                                    <img src={sofa} alt="" className="w-40 h-32 sm:w-64 sm:h-48 lg:w-auto lg:h-auto" />
                                </div>
                            </div>

                            <div className="relative">
                                <div className="lg:absolute lg:top-[200px] lg:left-0 text-center lg:text-left px-4 lg:px-0">
                                    <p className='text-[#FB2E86] text-sm sm:text-base lg:text-[18px]'>Best Furniture For Your Castle....</p>
                                    <h2 className='text-2xl sm:text-3xl lg:text-[53px] font-semibold mt-4 lg:mt-[20px] font-josefin w-full lg:w-[644px]'>
                                        Everything you need is here!!
                                    </h2>
                                    <p className='w-full lg:w-[560px] mt-3 lg:mt-[20px] text-xs sm:text-sm lg:text-lg'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
                                    </p>
                                    <Link to="/allproduct">
                                        <button className='mt-6 lg:mt-[40px]'>
                                            <a className='px-4 py-2 sm:px-6 sm:py-3 bg-[#FB2E86] text-white text-sm sm:text-base' href="#">Shop Now</a>
                                        </button>
                                    </Link>
                                </div>
                                <div className="flex justify-center lg:justify-end mt-4 lg:mt-0">
                                    <img src={sofa} alt="" className="w-40 h-32 sm:w-64 sm:h-48 lg:w-auto lg:h-auto" />
                                </div>
                            </div>


                            <div className="relative">
                                <div className="lg:absolute lg:top-[200px] lg:left-0 text-center lg:text-left px-4 lg:px-0">
                                    <p className='text-[#FB2E86] text-sm sm:text-base lg:text-[18px]'>We got whats the best for you</p>
                                    <h2 className='text-2xl sm:text-3xl lg:text-[53px] font-semibold mt-4 lg:mt-[20px] font-josefin w-full lg:w-[644px]'>
                                        New Furniture Collection Trends
                                    </h2>
                                    <p className='w-full lg:w-[560px] mt-3 lg:mt-[20px] text-xs sm:text-sm lg:text-lg'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
                                    </p>
                                    <Link to="/allproduct">
                                        <button className='mt-6 lg:mt-[40px]'>
                                            <a className='px-4 py-2 sm:px-6 sm:py-3 bg-[#FB2E86] text-white text-sm sm:text-base' href="#">Go to Shop</a>
                                        </button>
                                    </Link>
                                </div>
                                <div className="flex justify-center lg:justify-end mt-4 lg:mt-0">
                                    <img src={sofa} alt="" className="w-40 h-32 sm:w-64 sm:h-48 lg:w-auto lg:h-auto" />
                                </div>
                            </div>


                            <div className="relative">
                                <div className="lg:absolute lg:top-[200px] lg:left-0 text-center lg:text-left px-4 lg:px-0">
                                    <p className='text-[#FB2E86] text-sm sm:text-base lg:text-[18px]'>We got whats the best for you</p>
                                    <h2 className='text-2xl sm:text-3xl lg:text-[53px] font-semibold mt-4 lg:mt-[20px] font-josefin w-full lg:w-[644px]'>
                                        Everything you need is here
                                    </h2>
                                    <p className='w-full lg:w-[560px] mt-3 lg:mt-[20px] text-xs sm:text-sm lg:text-lg'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
                                    </p>
                                    <Link to="/allproduct">
                                        <button className='mt-6 lg:mt-[40px]'>
                                            <a className='px-4 py-2 sm:px-6 sm:py-3 bg-[#FB2E86] text-white text-sm sm:text-base' href="#">Shop Now</a>
                                        </button>
                                    </Link>
                                </div>
                                <div className="flex justify-center lg:justify-end mt-4 lg:mt-0">
                                    <img src={sofa} alt="" className="w-40 h-32 sm:w-64 sm:h-48 lg:w-auto lg:h-auto" />
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Banner