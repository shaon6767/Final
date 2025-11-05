import React from 'react'
import Container from './Container'
import sofa from "../assets/bluesofa.png"

const Trending = () => {
    return (
        <section className='bg-[#F1F0FF] font-josefin'>
            <Container>
                <div className="mt-8 sm:mt-12 lg:mt-[100px]">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8 lg:gap-0">
                        <div className="flex justify-center lg:justify-start">
                            <img 
                                src={sofa} 
                                alt="" 
                                className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[400px] lg:h-[300px] xl:w-auto xl:h-auto"
                            />
                        </div>
                        <div className="text-center lg:text-left px-4 sm:px-0">
                            <h2 className='text-[#1A0B5B] text-xl sm:text-2xl lg:text-[42px] font-semibold w-full lg:w-[577px] pb-3 sm:pb-4 lg:pb-5'>
                                Unique Features Of leatest & Trending Poducts
                            </h2>
                            <div className="">
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div className="h-2 w-2 sm:h-3 sm:w-3 bg-[red] rounded-full "></div>
                                    <div className="">
                                        <p className='text-[#ACABC3] py-1 sm:py-2 text-sm sm:text-base'>
                                            All frames constructed with hardwood solids and laminates
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div className="h-2 w-2 sm:h-3 sm:w-3 bg-[blue] rounded-full "></div>
                                    <div className="">
                                        <p className='text-[#ACABC3] w-full lg:w-[460px] py-1 sm:py-2 text-sm sm:text-base'>
                                            Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div className="h-2 w-2 sm:h-3 sm:w-3 bg-[green] rounded-full "></div>
                                    <div className="">
                                        <p className='text-[#ACABC3] py-1 sm:py-2 text-sm sm:text-base'>
                                            Arms, backs and seats are structurally reinforced
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center lg:justify-start">
                                <div className="">
                                   <button className='mt-4 sm:mt-6 lg:mt-[30px]'> 
                                        <a className='px-4 py-2 sm:px-6 sm:py-3 bg-[#FB2E86] text-white text-sm sm:text-base' href="#">
                                            Add to Cart
                                        </a>
                                   </button>
                                </div>
                                <div className="mt-4 sm:mt-6 lg:mt-[30px] text-[#151875]">
                                    <p className='font-semibold text-sm sm:text-base'>B&B Italian Sofa </p>
                                    <p className='text-sm sm:text-base'>$32.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Trending