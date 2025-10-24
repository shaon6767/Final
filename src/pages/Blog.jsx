import React from 'react'
import Container from '../component/Container'
import { Link } from 'react-router-dom'
import b1 from "../assets/b1.png"
import b2 from "../assets/b2.png"
import b3 from "../assets/b3.png"
import { FaPenNib } from 'react-icons/fa'
import { SlCalender } from 'react-icons/sl'
import th1 from "../assets/th1.png"
import th2 from "../assets/th2.png"
import th3 from "../assets/th3.png"
import th4 from "../assets/th4.png"
import bp1 from "../assets/bp1.png"
import bp2 from "../assets/bp2.png"
import bp3 from "../assets/bp3.png"
import sp1 from "../assets/sp1.png"
import sp2 from "../assets/sp2.png"
import sp3 from "../assets/sp3.png"
import sp4 from "../assets/sp4.png"
import com from "../assets/company.png"

const Blog = () => {
  return (
    <Container>
      <div className="mt-[40px] py-[40px]">
        <h2 className='text-[#101750] text-[36px] font-semibold'>Blog</h2>
        <h2 className='text-[#0D134E]'>
          <Link to="/"><span className='hover:text-[#FB2E86]'>Home</span></Link>.Pages.
          <Link to="/allproduct"><span className='hover:text-[#FB2E86]'>Products</span></Link>
        </h2>
      </div>


      <div className="mt-[50px] grid grid-cols-5">
        <div className="col-span-4">
          <div className="">
            <img src={b1} alt="" />
          </div>
          <div className="mt-8 flex gap-10 items-center">
            <div className="flex gap-3 items-center">
              <FaPenNib className='text-pink-600' />
              <h2 className='bg-amber-500 px-4'>Surf Auxion</h2>
            </div>
            <div className="flex gap-3 items-center">
              <SlCalender className='text-orange-400' />
              <h2 className='bg-amber-500 px-6'>Aug 09 2020</h2>
            </div>
          </div>
          <div className="mt-6">
            <div className="">
              <h2 className='text-[32px] text-purple-900'>Mauris at orci non vulputate diam tincidunt nec.</h2>
              <p className='mt-5 mb-6 text-gray-500 w-[900px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
              <a className='text-[20px] text-purple-800 font-semibold' href="#">Read More...</a>
            </div>
          </div>

          <div className="mt-[50px]">
            <img src={b2} alt="" />
          </div>
          <div className="mt-8 flex gap-10 items-center">
            <div className="flex gap-3 items-center">
              <FaPenNib className='text-pink-600' />
              <h2 className='bg-amber-500 px-4'>Surf Auxion</h2>
            </div>
            <div className="flex gap-3 items-center">
              <SlCalender className='text-orange-400' />
              <h2 className='bg-amber-500 px-6'>Aug 09 2020</h2>
            </div>
          </div>
          <div className="mt-6">
            <div className="">
              <h2 className='text-[32px] text-purple-900'>Mauris at orci non vulputate diam tincidunt nec.</h2>
              <p className='mt-5 mb-6 text-gray-500 w-[900px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
              <a className='text-[20px] text-purple-800 font-semibold' href="#">Read More...</a>
            </div>
          </div>

          <div className="mt-[50px]">
            <img src={b3} alt="" />
          </div>
          <div className="mt-8 flex gap-10 items-center">
            <div className="flex gap-3 items-center">
              <FaPenNib className='text-pink-600' />
              <h2 className='bg-amber-500 px-4'>Surf Auxion</h2>
            </div>
            <div className="flex gap-3 items-center">
              <SlCalender className='text-orange-400' />
              <h2 className='bg-amber-500 px-6'>Aug 09 2020</h2>
            </div>
          </div>
          <div className="mt-6">
            <div className="">
              <h2 className='text-[32px] text-purple-900'>Mauris at orci non vulputate diam tincidunt nec.</h2>
              <p className='mt-5 mb-6 text-gray-500 w-[900px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
              <a className='text-[20px] text-purple-800 font-semibold' href="#">Read More...</a>
            </div>
          </div>
        </div>

        <div className="col-span-1 ">
          <h2 className='text-[18px] font-semibold text-gray-700'>Search</h2>
          <div className="">
            <input type="text" placeholder='Search For Posts' className='border bg-white border-gray-300 focus:ring focus:ring-[gray] placeholder:text-gray-300 w-[250px]' />
          </div>

          <div className="mt-8">
            <h2 className='text-[30px] text-purple-700 font-semibold'>Categories</h2>
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <p className='text-[18px] text-blue-700'>Hobbies(14)</p>
                <p className='text-[18px] text-blue-700'>Woman(21)</p>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <p className='text-[18px] text-blue-700'>Woman(21)</p>
                <p className='text-[18px] text-blue-700'>Woman(21)</p>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <p className='text-[18px] text-blue-700'>Woman(21)</p>
                <p className='text-[18px] text-blue-700'>Woman(21)</p>
              </div>
            </div>
          </div>

          <div className="mt-[70px] space-y-4">
            <h2 className='text-[30px] text-purple-700 font-semibold'>Recent Posts</h2>
            <div className="flex items-center">
              <div className="">
                <img src={th1} alt="" />
              </div>
              <div className="">
                <p>It is a long established fact</p>
                <p>Aug 09 2020</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="">
                <img src={th2} alt="" />
              </div>
              <div className="">
                <p>It is a long established fact</p>
                <p>Aug 09 2020</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="">
                <img src={th3} alt="" />
              </div>
              <div className="">
                <p>It is a long established fact</p>
                <p>Aug 09 2020</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="">
                <img src={th4} alt="" />
              </div>
              <div className="">
                <p>It is a long established fact</p>
                <p>Aug 09 2020</p>
              </div>
            </div>
          </div>
          {/* two */}
          <div className="mt-[70px] space-y-4">
            <h2 className='text-[30px] text-purple-700 font-semibold'>Sale Products</h2>
            <div className="flex items-center">
              <div className="">
                <img src={bp1} alt="" />
              </div>
              <div className="">
                <p>It is a long established fact</p>
                <p>Aug 09 2020</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="">
                <img src={bp2} alt="" />
              </div>
              <div className="">
                <p>It is a long established fact</p>
                <p>Aug 09 2020</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="">
                <img src={bp3} alt="" />
              </div>
              <div className="">
                <p>It is a long established fact</p>
                <p>Aug 09 2020</p>
              </div>
            </div>
          </div>
          {/* three */}
          <div className="mt-[70px] space-y-4">
            <h2 className='text-[30px] text-purple-700 font-semibold'>Offer Product</h2>
            <div className="">
              <div className="flex items-center gap-4">
                <div className="">
                  <img src={sp1} alt="" />
                  <h2>Duis lectus est.</h2>
                  <p>$12.00 - $15.00</p>
                </div>
                <div className="">
                  <img src={sp2} alt="" />
                  <h2>Sed placerat.</h2>
                  <p>$12.00 - $15.00</p>
                </div>
              </div>
              <div className="flex mt-5 items-center gap-4">
                <div className="">
                  <img src={sp3} alt="" />
                  <h2>Netus proin.</h2>
                  <p>$12.00 - $15.00</p>
                </div>
                <div className="">
                  <img src={sp4} alt="" />
                  <h2>Platea in.</h2>
                  <p>$12.00 - $15.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <a href="#"><img src={com} alt="" /></a>
      </div>

    </Container>
  )
}

export default Blog