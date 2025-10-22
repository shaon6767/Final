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

                        <div className="absolute top-0 left-[-200px]">
                            <img src={ban} alt="" />
                        </div>



                        <div className="absolute top-[530px] left-[-170px]">
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
                                <div className="absolute top-[200px] left-0">
                                    <p className=' text-[#FB2E86] text-[18px]'>Best Furniture For Your Castle....</p>
                                    <h2 className='text-[53px] font-semibold mt-[20px] font-josefin w-[644px]'>New Furniture Collection Trends in 2020</h2>
                                    <p className='w-[560px] mt-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                                    <Link to="/allproduct">
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
                                    <Link to="/allproduct">
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
                                    <Link to="/allproduct">
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
                                    <Link to="/allproduct">
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