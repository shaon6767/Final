import React from 'react'
import Container from './Container'
import sofa from "../assets/bluesofa.png"

const Trending = () => {
    return (
        <section className='bg-[#F1F0FF] font-josefin'>
            <Container>
                <div className="mt-[100px]">
                    <div className="flex justify-between items-center">
                        <div className="flex justify-start">
                            <img src={sofa} alt="" />
                        </div>
                        <div className="">
                            <h2 className='text-[#1A0B5B] text-[42px] font-semibold w-[577px] pb-5'>Unique Features Of leatest & Trending Poducts</h2>
                            <div className="">
                                <div className="flex items-center gap-4">
                                    <div className="h-3 w-3 bg-[red] rounded-full "></div>
                                    <div className="">
                                        <p className='text-[#ACABC3] py-2'>All frames constructed with hardwood solids and laminates</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="h-3 w-3 bg-[blue] rounded-full "></div>
                                    <div className="">
                                        <p className='text-[#ACABC3] w-[460px] py-2'>Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="h-3 w-3 bg-[green] rounded-full "></div>
                                    <div className="">
                                        <p className='text-[#ACABC3] py-2'>Arms, backs and seats are structurally reinforced</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4 items-center">
                                <div className="">
                                   <button className='mt-[30px]'> <a className='px-6 py-3 bg-[#FB2E86] text-[white]' href="#">Add to Cart</a></button>
                                </div>
                                <div className="mt-[30px] text-[#151875]">
                                    <p className='font-semibold'>B&B Italian Sofa </p>
                                    <p>$32.00</p>
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