import React from 'react'
import Container from '../component/Container'
import { Link } from 'react-router-dom'
import about from "../assets/about.png"
import delivery from "../assets/delivery.png"
import cashback from "../assets/cashback.png"
import quality from "../assets/quality.png"
import support from "../assets/support.png"
import customers from "../assets/customers.png"

const About = () => {
  return (
    <Container>
      <div className="mt-[40px] py-[40px]">
        <h2 className='text-[#101750] text-[36px] font-semibold'>About Us</h2>
        <h2 className='text-[#0D134E]'>
          <Link to="/"><span className='hover:text-[#FB2E86]'>Home</span></Link>.Pages.
          <Link to="/allproduct"><span className='hover:text-[#FB2E86]'>Products</span></Link>
        </h2>
      </div>

      <div className="mt-[100px]">
      <div className="grid grid-cols-2 items-center justify-between">
        <div className="col-span-1">
            <img src={about} alt="" />
        </div>
        <div className="col-span-1">
            <h2 className='text-[36px] text-purple-800 font-semibold w-[522px]'>Know About Our Ecomerce Business, History</h2>
            <p className='mt-[12px] text-[18px] text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
        </div>
      </div>
      </div>

      <div className="mt-[100px]">
        <h2 className='text-center text-[#1A0B5B] text-[42px] font-semibold'>Our Features</h2>
                <div className="">
                  <div className="">
                    <div className="grid grid-cols-4 gap-6 mt-8">
                      {/* Card 1 */}
                      <div className="bg-white p-16 shadow-lg text-center">
                        <div className="flex justify-center mb-4">
                          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                            <span>  <img src={delivery} alt="" /></span>
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold mb-3 text-[#151875]">Free Delivery</h3>
                        <p className="text-[#1a0b5b6c] text-sm w-[200px] pr-[12px]">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                        </p>
                      </div>
        
                      {/* Card 2 */}
                      <div className="bg-white p-16 shadow-lg text-center">
                        <div className="flex justify-center mb-4">
                          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                            <span><img src={cashback} alt="" /></span>
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold mb-3 text-[#151875]">100% Cash Back</h3>
                        <p className="text-[#1a0b5b6c] text-sm w-[200px] mx-auto pr-[12px]">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                        </p>
                      </div>
        
                      {/* Card 3 */}
                      <div className="bg-white p-16 shadow-lg text-center">
                        <div className="flex justify-center mb-4">
                          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                            <span><img src={quality} alt="" /></span>
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold mb-3 text-[#151875]">Quality Product</h3>
                        <p className="text-[#1a0b5b6c] text-sm w-[200px] mx-auto pr-[12px]">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                        </p>
                      </div>
        
                      {/* Card 4 */}
                      <div className="bg-white p-16 shadow-lg text-center">
                        <div className="flex justify-center mb-4">
                          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                            <span><img src={support} alt="" /></span>
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold mb-3 text-[#151875]">24/7 Support</h3>
                        <p className="text-[#1a0b5b6c] text-sm w-[200px] mx-auto pr-[12px]">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
      </div>

      <div className="mt-[120px] mb-[150px] flex flex-col items-center space-y-6">
        <h2 className='text-center text-[#1A0B5B] text-[42px] font-semibold'>Our Client Say</h2>
        <img src={customers} alt="" />
        <div className="text-center">
          <h1 className='text-2xl'>Selina Gomez</h1>
        <p>Ceo At Webecy Digital</p>
        </div>
        <p className='text-center w-[600px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
      </div>
    </Container>
  )
}

export default About