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
    let [currentSlide, setCurrentSlide] = useState(0);
    let sliderRef = useRef(null);
    let totalSlides = 4;

    var settings = {
        infinite: true,
        arrows: false,
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div style={{
                position: 'absolute',
                bottom: '-50px',
                display: 'flex',
                justifyContent: 'center',
                width: '100%'
            }}>
                <ul style={{
                    display: 'flex',
                    gap: '10px',
                    margin: 0,
                    padding: 0
                }}>
                    {dots}
                </ul>
            </div>

        ),
        customPaging: i => (
            <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#d1d5db',
                cursor: 'pointer'
            }}></div>
        ),

        beforeChange: (current, next) => setCurrentSlide(next),
    };
    useEffect(() => {

        initFlowbite();
    }, []);

    const handleRangeChange = (e) => {
        const slideIndex = parseInt(e.target.value);
        setCurrentSlide(slideIndex);
        sliderRef.current.slickGoTo(slideIndex);
    };

    return (
        <section className='bg-[#F2F0FF]'>
            <Container>
                <div className="relative">
                    <div className="font-josefin py-4">

                        <div className="absolute top-0 left-[-200px]">
                            <img src={ban} alt="" />
                        </div>

                        <div className="absolute top-[530px] left-[-150px]">
                            <div className="max-w-[80px]">
                                <input
                                    id="slide-control"
                                    type="range"
                                    min="0"
                                    max={totalSlides - 1}
                                    value={currentSlide}
                                    onChange={handleRangeChange}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-[#44434710] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#FB2E86]"
                                />
                            </div>
                        </div>

                        <Slider ref={sliderRef} {...settings}>
                            <div className="relative">
                                <div className="absolute top-[200px] left-0">
                                    <p className=' text-[#FB2E86] text-[18px]'>Best Furniture For Your Castle....</p>
                                    <h2 className='text-[53px] font-semibold mt-[20px] font-josefin w-[644px]'>New Furniture Collection Trends in 2020</h2>
                                    <p className='w-[560px] mt-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                                    <Link to="/shop">
                                        <button className='mt-[40px]'> <a className='px-6 py-3 bg-[#FB2E86] text-[white]' href="#">Shop Now</a></button>
                                    </Link>
                                </div>
                                <div className="flex justify-end">
                                    <img src={sofa} alt="" />
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute top-[200px] left-0">
                                    <p className=' text-[#FB2E86] text-[18px]'>Best Furniture For Your Castle....</p>
                                    <h2 className='text-[53px] font-semibold mt-[20px] font-josefin w-[644px]'>Everything you need is here!!</h2>
                                    <p className='w-[560px] mt-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                                    <Link to="/shop">
                                        <button className='mt-[40px]'> <a className='px-6 py-3 bg-[#FB2E86] text-[white]' href="#">Shop Now</a></button>
                                    </Link>
                                </div>
                                <div className="flex justify-end">
                                    <img src={sofa} alt="" />
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute top-[200px] left-0">
                                    <p className=' text-[#FB2E86] text-[18px]'>We got whats the best for you</p>
                                    <h2 className='text-[53px] font-semibold mt-[20px] font-josefin w-[644px]'>New Furniture Collection Trends</h2>
                                    <p className='w-[560px] mt-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                                    <Link to="/shop">
                                        <button className='mt-[40px]'> <a className='px-6 py-3 bg-[#FB2E86] text-[white]' href="#">Go to Shop</a></button>
                                    </Link>
                                </div>
                                <div className="flex justify-end">
                                    <img src={sofa} alt="" />
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute top-[200px] left-0">
                                    <p className=' text-[#FB2E86] text-[18px]'>We got whats the best for you</p>
                                    <h2 className='text-[53px] font-semibold mt-[20px] font-josefin w-[644px]'>Everything you need is here</h2>
                                    <p className='w-[560px] mt-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                                    <Link to="/shop">
                                        <button className='mt-[40px]'> <a className='px-6 py-3 bg-[#FB2E86] text-[white]' href="#">Shop Now</a></button>
                                    </Link>
                                </div>
                                <div className="flex justify-end">
                                    <img src={sofa} alt="" />
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