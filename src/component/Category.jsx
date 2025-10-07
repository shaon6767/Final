import React, { useContext } from 'react'
import Container from './Container'
import Slider from 'react-slick';
import { ApiData } from './ContextApi';
import bg from "../assets/bg.png"
import company from "../assets/company.png"
import { FaPen, FaCalendar } from 'react-icons/fa';
import one from "../assets/bone.png"
import two from "../assets/btwo.png"
import three from "../assets/bthree.png"

const Category = () => {

  let data = useContext(ApiData)

  let categories = [...new Set(data?.products?.map(item => item.category) || [])];

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    appendDots: dots => (
      <div className="flex justify-center">
        <ul className="flex justify-center gap-6 mt-[50px]"> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-3 h-3 bg-white border-1 border-[#FB2E86] rounded-full"></div>
    )
  };
  return (
    <Container>
      <div className="mt-16 category font-josefin">
        <h2 className="text-center text-[#1A0B5B] text-[42px] font-semibold">Top Categories</h2>

        <Slider {...settings}>
          {categories.map((category, index) => {
            let categoryProduct = data?.products?.find((item) => item.category === category);
            return (
              <div className="px-6 mt-[50px]">
                <div className="text-center group cursor-pointer">
                  <div className="relative w-68 h-68 mx-auto mb-6 group ">
                    <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                      <img src={categoryProduct?.thumbnail} alt="" className="w-62 h-62 z-99 object-cover rounded-full transition-all duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute top-1 right-1 w-70 h-70 rounded-full bg-[blue] z-1 opacity-0 group-hover:opacity-100 ">
                    </div>
                  </div>
                  <h3 className="text-xl text-[#1A0B5B] font-light capitalize">{category}</h3>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      <div className="mt-[100px]">
        <div className="">
          <div className="relative">
            <img src={bg} alt="" className='w-full h-full' />
            <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
              <p className='w-[574px] text-[35px] text-[#151875] text-center font-josefin font-semibold'>Get Leatest Update By Subscribe Our Newslater</p>
              <button><a className='bg-pink-500 text-white px-8 py-3 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 mt-[100px]' href="#">Shop Now</a></button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 max-w-[800px] mx-auto">
       <a href="#"> <img src={company} alt="" /></a>
      </div>

      {/* blog */}

      <div className="mt-[80px]">
        <div className="">
          <h2 className='text-center text-[#1A0B5B] text-[42px] font-semibold mb-8'>
            Latest Blog
          </h2>
          <div className="grid grid-cols-3 gap-6">
  <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
    <div className="">
      <img src={one} alt="" className="w-full h-full object-cover" />
    </div>
    

    <div className="p-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-2">
          <FaPen className="text-[#FB2E86]" />
          <span className="text-sm text-gray-600">SaberAli</span>
        </div>
        <div className="flex items-center gap-2">
          <FaCalendar className="text-gray-600" />
          <span className="text-sm text-gray-600">21 Aug, 2020</span>
        </div>
      </div>
      
      <h2 className="text-xl font-bold text-[#151875] group-hover:text-[#FB2E86] mb-3">Top essential Trends in 2021</h2>
      <p className="text-[#72718F] text-[18px] mb-4">
        More off this less hello samlande lied much over tightly circa horse taped mightly
      </p>
      <a href="#" className="text-blue-500 hover:text-pink-500 transition-colors duration-300 border-b-2 border-[#151875] group-hover:border-[#FB2E86] group-hover:text-[#FB2E86]">
        Read More
      </a>
    </div>
  </div>


  <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
    <div className="">
      <img src={two} alt=""  className="w-full h-full object-cover" />
    </div>
    <div className="p-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-2">
          <FaPen className="text-[#FB2E86]" />
          <span className="text-sm text-gray-600">Surfauxion</span>
        </div>
        <div className="flex items-center gap-2">
          <FaCalendar className="text-gray-600" />
          <span className="text-sm text-gray-600">21 Aug, 2020</span>
        </div>
      </div>
      <h2 className="text-xl font-bold text-[#151875] group-hover:text-[#FB2E86] mb-3">Top essential Trends in 2021</h2>
      <p className="text-[#72718F] text-[18px] mb-4">
        More off this less hello samlande lied much over tightly circa horse taped mightly
      </p>
      <a href="#" className="text-blue-500 hover:text-pink-500 transition-colors duration-300 border-b-2 border-[#151875] group-hover:border-[#FB2E86] group-hover:text-[#FB2E86]">
        Read More
      </a>
    </div>
  </div>

  <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
    <div className="">
      <img src={three} alt=""  className="w-full h-full object-cover" />
    </div>
    <div className="p-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-2">
          <FaPen className="text-[#FB2E86]" />
          <span className="text-sm text-gray-600">SaberAli</span>
        </div>
        <div className="flex items-center gap-2">
          <FaCalendar className="text-gray-600" />
          <span className="text-sm text-gray-600">21 Aug, 2020</span>
        </div>
      </div>
      <h2 className="text-xl font-bold text-[#151875] mb-3 group-hover:text-[#FB2E86]">Top essential Trends in 2021</h2>
      <p className="text-[#72718F] text-[18px] mb-4">
        More off this less hello samlande lied much over tightly circa horse taped mightly
      </p>
      <a href="#" className="text-blue-500 hover:text-pink-500 transition-colors duration-300 border-b-2 border-[#151875] group-hover:border-[#FB2E86] group-hover:text-[#FB2E86]">
        Read More
      </a>
    </div>
  </div>
</div>
        </div>
      </div>
    </Container>
  )
}

export default Category