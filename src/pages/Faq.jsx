import React from 'react'
import Container from '../component/Container'
import { Link } from 'react-router-dom'
import com from "../assets/company.png"

const Faq = () => {
  return (
    <Container>
      <div className="mt-[40px] py-[40px]">
        <h2 className='text-[#101750] text-[36px] font-semibold'>FAQ</h2>
        <h2 className='text-[#0D134E]'>
          <Link to="/"><span className='hover:text-[#FB2E86]'>Home</span></Link>.Pages.
          <Link to="/allproduct"><span className='hover:text-[#FB2E86]'>Products</span></Link>
        </h2>
      </div>

      <div className="mt-[60px] grid grid-cols-3">
        <div className="col-span-2">
          <h2 className='text-[#1D3178] text-[36px] font-bold'>Generel Information</h2>
          <div className="mt-[40px] space-y-2">
            <h2 className='text-[20px] text-[#1D3178] font-semibold'>Eu dictumst cum at sed euismood condimentum?</h2>
            <p className='w-[450px] text-[#A1ABCC]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
          </div>
          <div className="mt-[30px] space-y-2">
            <h2 className='text-[20px] text-[#1D3178] font-semibold'>Magna bibendum est fermentum eros.</h2>
            <p className='w-[450px] text-[#A1ABCC]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
          </div>
          <div className="mt-[30px] space-y-2">
            <h2 className='text-[20px] text-[#1D3178] font-semibold'>Odio muskana hak eris conseekin sceleton?</h2>
            <p className='w-[450px] text-[#A1ABCC]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
          </div>
          <div className="mt-[30px] space-y-2">
            <h2 className='text-[20px] text-[#1D3178] font-semibold'>Elit id blandit sabara boi velit gua mara?</h2>
            <p className='w-[450px] text-[#A1ABCC]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
          </div>
        </div>
        <div className="col-span-1">
          <div className="bg-[#e5e5ec] p-6">
            <h2 className='text-[#1D3178] text-[28px] font-bold'>Ask a Question</h2>
            <div className="mt-[40px] space-y-9">
              <div className="">
                <input type="text" placeholder='Your Name' className='w-full border border-gray-300 py-3' />
              </div>
              <div className="">
                <input type="text" placeholder='Subject' className='w-full border border-gray-300 py-3' />
              </div>
              <div className="">
                <textarea type="text" placeholder='Type Your Message' className='w-full border border-gray-300 h-[170px]' />
              </div>
              <div className="">
                <button type="submit" class="py-3 px-9 text-sm font-medium text-center text-white rounded-sm bg-[#FB2E86]"><a href="#">Send Mail</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[90px] flex justify-center">
       <a href="#"> <img src={com} alt=""/></a>
      </div>
    </Container>
  )
}

export default Faq