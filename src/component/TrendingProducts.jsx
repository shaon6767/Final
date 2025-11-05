import Container from './Container'
import React, { useContext, useEffect, useState } from 'react'
import { ApiData } from './ContextApi'
import Slider from 'react-slick'
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr'
import clock from "../assets/clock.png"
import drawer from "../assets/drawer.png"
import one from "../assets/chairone.png"
import two from "../assets/chairtwo.png"
import three from "../assets/chairthree.png"
import { TiTick } from 'react-icons/ti'
import pinksofa from "../assets/pinksofa.png"
import { Link } from 'react-router-dom'
import { MdOutlineDone } from 'react-icons/md'

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute right-0 top-[50%] z-40 bg-[rgba(0,0,0,0.35)] h-8 w-8 sm:h-10 sm:w-10 lg:h-[40px] lg:w-[41px] translate-y-[-50%] text-center leading-[35px] rounded-full hover:bg-[#4b4a4a] duration-300 ease-in-out text-[#fff] cursor-pointer"
      onClick={onClick}
    >
      <GrLinkNext className='inline-block text-sm sm:text-base' />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute left-0 top-[50%] z-40 bg-[rgba(0,0,0,0.35)] h-8 w-8 sm:h-10 sm:w-10 lg:h-[40px] lg:w-[41px] translate-y-[-50%] text-center leading-[35px] rounded-full text-[#fff] hover:bg-[#4b4a4a] duration-300 ease-in-out cursor-pointer"
      onClick={onClick}
    >
      <GrLinkPrevious className='inline-block text-sm sm:text-base' />
    </div>
  );
}

const TrendingProducts = () => {
  let data = useContext(ApiData)
  let [activeCategory, setActiveCategory] = useState("wood")
  let [filterShow, setFilterShow] = useState([])

  useEffect(() => {
    if (data && data.products) {
      let trending = data.products.filter(item => item.isTrending)
      setFilterShow(trending)
    }
  }, [data])

  let handleWood = () => {
    setActiveCategory("wood")
  }

  let handlePlastic = () => {
    setActiveCategory("plastic")
  }

  let handleSofa = () => {
    setActiveCategory("sofa")
  }

  let discountPrice = (product) => {
    if (!product) return 0;
    let discount = (product.price * product.discountPercentage) / 100;
    return (product.price - discount).toFixed(2);
  };

  var settings = {
    slidesToShow: window.innerWidth < 640 ? 1 : window.innerWidth < 768 ? 2 : window.innerWidth < 1024 ? 3 : 4,
    slidesToScroll: window.innerWidth < 640 ? 1 : window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 2,
    autoplay: window.innerWidth < 1024,
    autoplaySpeed: 1500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          autoplay: false
        }
      }
    ]
  };

  return (
    <Container>
      <div className="mt-8 sm:mt-12 lg:mt-[100px] font-josefin">
        <h2 className='text-center text-[#1A0B5B] text-2xl sm:text-3xl lg:text-[42px] font-semibold'>Trending Products</h2>
        <div className="">
          <div className="mt-4 sm:mt-6 lg:mt-8">

            <div className="relative">
              <Slider {...settings}>
                {filterShow.map((item) => (
                  <div className="px-2 sm:px-3" key={item.id}>
                    <Link to={`/productdetails/${item.id}`} className="relative group cursor-pointer overflow-hidden">
                      <div className="relative overflow-hidden" >
                        <img
                          src={item.thumbnail}
                          alt=""
                          className="w-full h-[250px] sm:h-[250px] lg:h-[300px] object-cover transition-all duration-500 group-hover:blur-sm group-hover:scale-105"
                        />
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                          <div className="text-white text-center transform -translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                            <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-1 sm:mb-2 mt-2 sm:mt-4 drop-shadow-lg">{item.title}</h3>
                            <div className="flex gap-2 sm:gap-4 mt-3 sm:mt-6 justify-center">
                              <p className='line-through text-[red] opacity-75 drop-shadow-lg text-xs sm:text-sm'>${item.price}</p>
                              <p className="font-bold text-[#07fe07] drop-shadow-lg text-xs sm:text-sm">${discountPrice(item)}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 lg:mt-[40px]">
          <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-[#FFF6FB] p-4 sm:p-6">
                    <h3 className="text-[#151875] text-lg sm:text-xl lg:text-[26px] font-bold mb-2 sm:mb-4">23% off in all products</h3>
                    <a href="#" className="text-[#FB2E86] underline text-sm sm:text-base lg:text-lg">Shop now</a>
                    <div className="mt-2 sm:mt-4 h-24 sm:h-32 lg:h-40 flex items-center justify-end">
                      <span><img src={clock} alt="" className="w-16 h-16 sm:w-20 sm:h-20 lg:w-auto lg:h-auto" /></span>
                    </div>
                  </div>

                  <div className="bg-[#EEEFFB] p-4 sm:p-6">
                    <h3 className="text-[#151875] text-lg sm:text-xl lg:text-[26px] font-bold mb-2 sm:mb-4">23% off in all products</h3>
                    <a href="#" className="text-[#FB2E86] underline text-sm sm:text-base lg:text-lg">View collection</a>
                    <div className="mt-2 sm:mt-4 h-24 sm:h-32 lg:h-40 rounded-lg flex items-center justify-end">
                      <span><img src={drawer} alt="" className="w-16 h-16 sm:w-20 sm:h-20 lg:w-auto lg:h-auto" /></span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1 space-y-4 sm:space-y-6 lg:space-y-8">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-16 h-12 sm:w-20 sm:h-16 lg:w-28 lg:h-20 bg-gray-300 flex items-center justify-center">
                    <span><img src={one} alt="" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-auto lg:h-auto" /></span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#151875] text-sm sm:text-base">Executive Seat chair</h4>
                    <p className="text-[#151875] font-bold text-sm sm:text-base">$32.00</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-16 h-12 sm:w-20 sm:h-16 lg:w-28 lg:h-20 bg-gray-300 flex items-center justify-center">
                    <span><img src={two} alt="" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-auto lg:h-auto" /></span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#151875] text-sm sm:text-base">Executive Seat chair</h4>
                    <p className="text-[#151875] font-bold text-sm sm:text-base">$32.00</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-16 h-12 sm:w-20 sm:h-16 lg:w-28 lg:h-20 bg-gray-300 flex items-center justify-center">
                    <span><img src={three} alt="" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-auto lg:h-auto" /></span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#151875] text-sm sm:text-base">Executive Seat chair</h4>
                    <p className="text-[#151875] font-bold text-sm sm:text-base">$32.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 lg:mt-[100px]">
          <div className="font-josefin">
            <h2 className="text-center text-[#1A0B5B] text-2xl sm:text-3xl lg:text-[42px] font-semibold mb-3 sm:mb-4 lg:mb-5">Discount Item</h2>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-12">
              <button
                onClick={handleWood}
                className={`text-sm sm:text-base lg:text-lg pb-2 text-[#151875] ${activeCategory == "wood" ? 'border-b-2 text-[#FB2E86] border-[#FB2E86]' : 'border-b-2 border-transparent'}`}
              >
                Wood Chair
              </button>
              <button
                onClick={handlePlastic}
                className={`text-sm sm:text-base lg:text-lg pb-2 text-[#151875] ${activeCategory == "plastic" ? 'border-b-2 text-[#FB2E86] border-[#FB2E86]' : 'border-b-2 border-transparent'}`}
              >
                Plastic Chair
              </button>
              <button
                onClick={handleSofa}
                className={`text-sm sm:text-base lg:text-lg pb-2 text-[#151875] ${activeCategory == "sofa" ? 'border-b-2 text-[#FB2E86] border-[#FB2E86]' : 'border-b-2 border-transparent'}`}
              >
                Sofa Collection
              </button>
            </div>

            <div className="transition-all duration-500">
              {activeCategory == "wood" && (
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 sm:gap-8 lg:gap-0">
                  <div className="text-center lg:text-left">
                    <h3 className="text-[#151875] text-xl sm:text-2xl lg:text-[35px] font-semibold mb-3 sm:mb-4">20% Discount Of All Chairs</h3>
                    <h2 className="text-lg sm:text-xl lg:text-[21px] font-bold text-[#FB2E86] mb-4 sm:mb-6">Wood Chair Design</h2>
                    <p className="text-[#B7BACB] mb-4 sm:mb-6 lg:mb-8 text-sm sm:text-base">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-2 sm:mb-4">
                      <div className="flex items-center gap-1 justify-center lg:justify-start">
                        <MdOutlineDone size={16} className='text-[#B7BACB]' />
                        <p className='text-[#B7BACB] text-sm sm:text-base'>Material expose like metals</p>
                      </div>
                      <div className="flex items-center gap-1 justify-center lg:justify-start">
                        <MdOutlineDone size={16} className='text-[#B7BACB]' />
                        <p className='text-[#B7BACB] text-sm sm:text-base'>Material expose like metals</p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-6 sm:mb-8 lg:mb-10">
                      <div className="flex items-center gap-1 justify-center lg:justify-start">
                        <MdOutlineDone size={16} className='text-[#B7BACB]' />
                        <p className='text-[#B7BACB] text-sm sm:text-base'>Material expose like metals</p>
                      </div>
                      <div className="flex items-center gap-1 justify-center lg:justify-start">
                        <MdOutlineDone size={16} className='text-[#B7BACB]' />
                        <p className='text-[#B7BACB] text-sm sm:text-base'>Material expose like metals</p>
                      </div>
                    </div>
                    <Link to="/allproduct">
                      <button className="bg-pink-500 text-white px-6 py-2 sm:px-8 sm:py-3 cursor-pointer text-sm sm:text-base">Shop Now</button>
                    </Link>
                  </div>
                  <div className="flex items-center justify-center lg:justify-end">
                    <img src={pinksofa} alt="wood chair" className="w-64 h-48 sm:w-80 sm:h-60 lg:w-full lg:h-full object-contain" />
                  </div>
                </div>
              )}

              {activeCategory == "plastic" && (
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 sm:gap-8 lg:gap-0">
                  <div className="text-center lg:text-left">
                    <h3 className="text-[#151875] text-xl sm:text-2xl lg:text-[35px] font-semibold mb-3 sm:mb-4">20% Discount Of All Plastic Products</h3>
                    <h2 className="text-lg sm:text-xl lg:text-[21px] font-bold text-[#FB2E86] mb-4 sm:mb-6">Plastic Chair Design</h2>
                    <p className="text-[#B7BACB] mb-4 sm:mb-6 lg:mb-8 text-sm sm:text-base">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-2 sm:mb-4">
                      <div className="flex items-center gap-1 justify-center lg:justify-start">
                        <TiTick className='text-[#B7BACB] text-sm' />
                        <p className='text-[#B7BACB] text-sm sm:text-base'>Material expose like metals</p>
                      </div>
                      <div className="flex items-center gap-1 justify-center lg:justify-start">
                        <TiTick className='text-[#B7BACB] text-sm' />
                        <p className='text-[#B7BACB] text-sm sm:text-base'>Material expose like metals</p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-6 sm:mb-8 lg:mb-10">
                      <div className="flex items-center gap-1 justify-center lg:justify-start">
                        <TiTick className='text-[#B7BACB] text-sm' />
                        <p className='text-[#B7BACB] text-sm sm:text-base'>Material expose like metals</p>
                      </div>
                      <div className="flex items-center gap-1 justify-center lg:justify-start">
                        <TiTick className='text-[#B7BACB] text-sm' />
                        <p className='text-[#B7BACB] text-sm sm:text-base'>Material expose like metals</p>
                      </div>
                    </div>
                    <Link to="/allproduct">
                      <button className="bg-pink-500 text-white px-6 py-2 sm:px-8 sm:py-3 cursor-pointer text-sm sm:text-base">Shop Now</button>
                    </Link>
                  </div>
                  <div className="flex items-center justify-center lg:justify-end">
                    <img src={pinksofa} alt="plastic chair" className="w-64 h-48 sm:w-80 sm:h-60 lg:w-full lg:h-full object-contain" />
                  </div>
                </div>
              )}

              {activeCategory == "sofa" && (
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 sm:gap-8 lg:gap-0">
                  <div className="text-center lg:text-left">
                    <h3 className="text-[#151875] text-xl sm:text-2xl lg:text-[35px] font-semibold mb-3 sm:mb-4">20% Discount Of All Sofa Products</h3>
                    <h2 className="text-lg sm:text-xl lg:text-[21px] font-bold text-[#FB2E86] mb-4 sm:mb-6">Eams Sofa Compact</h2>
                    <p className="text-[#B7BACB] mb-4 sm:mb-6 lg:mb-8 text-sm sm:text-base">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-2 sm:mb-4">
                      <div className="flex items-center gap-1 justify-center lg:justify-start">
                        <TiTick className='text-[#B7BACB] text-sm' />
                        <p className='text-[#B7BACB] text-sm sm:text-base'>Material expose like metals</p>
                      </div>
                      <div className="flex items-center gap-1 justify-center lg:justify-start">
                        <TiTick className='text-[#B7BACB] text-sm' />
                        <p className='text-[#B7BACB] text-sm sm:text-base'>Material expose like metals</p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-6 sm:mb-8 lg:mb-10">
                      <div className="flex items-center gap-1 justify-center lg:justify-start">
                        <TiTick className='text-[#B7BACB] text-sm' />
                        <p className='text-[#B7BACB] text-sm sm:text-base'>Material expose like metals</p>
                      </div>
                      <div className="flex items-center gap-1 justify-center lg:justify-start">
                        <TiTick className='text-[#B7BACB] text-sm' />
                        <p className='text-[#B7BACB] text-sm sm:text-base'>Material expose like metals</p>
                      </div>
                    </div>
                    <Link to="/allproduct">
                      <button className="bg-pink-500 text-white px-6 py-2 sm:px-8 sm:py-3 cursor-pointer text-sm sm:text-base">Shop Now</button>
                    </Link>
                  </div>
                  <div className="flex items-center justify-center lg:justify-end">
                    <img src={pinksofa} alt="sofa" className="w-64 h-48 sm:w-80 sm:h-60 lg:w-full lg:h-full object-contain" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default TrendingProducts