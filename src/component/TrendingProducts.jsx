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
      className="absolute right-0 top-[50%] z-40 bg-[rgba(0,0,0,0.35)] h-[40px] w-[41px] translate-y-[-50%] text-center leading-[35px] rounded-full hover:bg-[#4b4a4a] duration-300 ease-in-out text-[#fff] cursor-pointer"
      onClick={onClick}
    >
      <GrLinkNext className='inline-block' />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute left-0 top-[50%] z-40 bg-[rgba(0,0,0,0.35)] h-[40px] w-[41px] translate-y-[-50%] text-center leading-[35px] rounded-full text-[#fff] hover:bg-[#4b4a4a] duration-300 ease-in-out cursor-pointer"
      onClick={onClick}
    >
      <GrLinkPrevious className='inline-block' />
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
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <Container>
      <div className="mt-[100px] font-josefin">
        <h2 className='text-center text-[#1A0B5B] text-[42px] font-semibold'>Trending Products</h2>
        <div className="">
          <div className="mt-8">

            <div className="relative">
              <Slider {...settings}>
                {filterShow.map((item) => (
                  <div className="px-3" key={item.id}>
                    <Link to={`/productdetails/${item.id}`} className="relative group cursor-pointer overflow-hidden">
                      <div className="relative overflow-hidden" >
                        <img
                          src={item.thumbnail}
                          alt=""
                          className="w-full h-[300px] object-cover transition-all duration-500 group-hover:blur-sm group-hover:scale-105"
                        />
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                          <div className="text-white text-center transform -translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                            <h3 className="text-lg font-semibold mb-2 mt-4 drop-shadow-lg">{item.title}</h3>
                            <div className="flex gap-4 mt-6 justify-center">
                              <p className='line-through text-[red] opacity-75 drop-shadow-lg'>${item.price}</p>
                              <p className="font-bold text-[#07fe07] drop-shadow-lg">${discountPrice(item)}</p>
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

        <div className="mt-[40px]">
          <div className="">
            <div className="grid grid-cols-4 gap-6">
              <div className="col-span-3">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-[#FFF6FB] p-6">
                    <h3 className="text-[#151875] text-[26px] font-bold mb-4">23% off in all products</h3>
                    <a href="#" className="text-[#FB2E86] underline text-lg">Shop now</a>
                    <div className="mt-4 h-40 flex items-center justify-end">
                      <span><img src={clock} alt="" /></span>
                    </div>
                  </div>

                  <div className="bg-[#EEEFFB] p-6">
                    <h3 className="text-[#151875] text-[26px] font-bold mb-4">23% off in all products</h3>
                    <a href="#" className="text-[#FB2E86] underline text-lg">View collection</a>
                    <div className="mt-4 h-40 rounded-lg flex items-center justify-end">
                      <span><img src={drawer} alt="" /></span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-1 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-28 h-20 bg-gray-300 flex items-center justify-center">
                    <span><img src={one} alt="" /></span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#151875]">Executive Seat chair</h4>
                    <p className="text-[#151875] font-bold">$32.00</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-28 h-20 bg-gray-300 flex items-center justify-center">
                    <span><img src={two} alt="" /></span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#151875]">Executive Seat chair</h4>
                    <p className="text-[#151875] font-bold">$32.00</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-28 h-20 bg-gray-300 flex items-center justify-center">
                    <span><img src={three} alt="" /></span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#151875]">Executive Seat chair</h4>
                    <p className="text-[#151875] font-bold">$32.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[100px]">
          <div className="font-josefin">
            <h2 className="text-center text-[#1A0B5B] text-[42px] font-semibold mb-5">Discount Item</h2>

            <div className="flex justify-center gap-8 mb-12">
              <button
                onClick={handleWood}
                className={`text-lg pb-2 text-[#151875] ${activeCategory == "wood" ? 'border-b-2 text-[#FB2E86] border-[#FB2E86]' : 'border-b-2 border-transparent'}`}
              >
                Wood Chair
              </button>
              <button
                onClick={handlePlastic}
                className={`text-lg pb-2 text-[#151875] ${activeCategory == "plastic" ? 'border-b-2 text-[#FB2E86] border-[#FB2E86]' : 'border-b-2 border-transparent'}`}
              >
                Plastic Chair
              </button>
              <button
                onClick={handleSofa}
                className={`text-lg pb-2 text-[#151875] ${activeCategory == "sofa" ? 'border-b-2 text-[#FB2E86] border-[#FB2E86]' : 'border-b-2 border-transparent'}`}
              >
                Sofa Collection
              </button>
            </div>

            <div className="transition-all duration-500">
              {activeCategory == "wood" && (
                <div className="grid grid-cols-2 items-center">
                  <div>
                    <h3 className="text-[#151875] text-[35px] font-semibold mb-4">20% Discount Of All Chairs</h3>
                    <h2 className="text-[21px] font-bold text-[#FB2E86] mb-6">Wood Chair Design</h2>
                    <p className="text-[#B7BACB] mb-8">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
                    </p>
                    <div className="flex gap-4">
                      <div className="flex items-center gap-1">
                        <MdOutlineDone size={20} className='text-[#B7BACB]' />
                        <p className='text-[#B7BACB]'>Material expose like metals</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <MdOutlineDone size={20} className='text-[#B7BACB]' />
                        <p className='text-[#B7BACB]'>Material expose like metals</p>
                      </div>
                    </div>
                    <div className="flex gap-4 mb-10">
                      <div className="flex items-center gap-1">
                        <MdOutlineDone size={20} className='text-[#B7BACB]' />
                        <p className='text-[#B7BACB]'>Material expose like metals</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <MdOutlineDone size={20} className='text-[#B7BACB]' />
                        <p className='text-[#B7BACB]'>Material expose like metals</p>
                      </div>
                    </div>
                    <Link to="/allproduct">
                      <button className="bg-pink-500 text-white px-8 py-3 cursor-pointer">Shop Now</button>
                    </Link>
                  </div>
                  <div className="flex items-center justify-end">
                    <img src={pinksofa} alt="wood chair" className="w-full h-full object-contain" />
                  </div>
                </div>
              )}

              {activeCategory == "plastic" && (
                <div className="grid grid-cols-2 items-center">
                  <div>
                    <h3 className="text-[#151875] text-[35px] font-semibold mb-4">20% Discount Of All Plastic Products</h3>
                    <h2 className="text-[21px] font-bold text-[#FB2E86] mb-6">Plastic Chair Design</h2>
                    <p className="text-[#B7BACB] mb-8">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
                    </p>
                    <div className="flex gap-4">
                      <div className="flex items-center gap-1">
                        <TiTick className='text-[#B7BACB]' />
                        <p className='text-[#B7BACB]'>Material expose like metals</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <TiTick className='text-[#B7BACB]' />
                        <p className='text-[#B7BACB]'>Material expose like metals</p>
                      </div>
                    </div>
                    <div className="flex gap-4 mb-10">
                      <div className="flex items-center gap-1">
                        <TiTick className='text-[#B7BACB]' />
                        <p className='text-[#B7BACB]'>Material expose like metals</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <TiTick className='text-[#B7BACB]' />
                        <p className='text-[#B7BACB]'>Material expose like metals</p>
                      </div>
                    </div>
                    <Link to="/allproduct">
                      <button className="bg-pink-500 text-white px-8 py-3 cursor-pointer">Shop Now</button>
                    </Link>
                  </div>
                  <div className="flex items-center justify-end">
                    <img src={pinksofa} alt="plastic chair" className="w-full h-full object-contain" />
                  </div>
                </div>
              )}

              {activeCategory == "sofa" && (
                <div className="grid grid-cols-2 items-center">
                  <div>
                    <h3 className="text-[#151875] text-[35px] font-semibold mb-4">20% Discount Of All Sofa Products</h3>
                    <h2 className="text-[21px] font-bold text-[#FB2E86] mb-6">Eams Sofa Compact</h2>
                    <p className="text-[#B7BACB] mb-8">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
                    </p>
                    <div className="flex gap-4">
                      <div className="flex items-center gap-1">
                        <TiTick className='text-[#B7BACB]' />
                        <p className='text-[#B7BACB]'>Material expose like metals</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <TiTick className='text-[#B7BACB]' />
                        <p className='text-[#B7BACB]'>Material expose like metals</p>
                      </div>
                    </div>
                    <div className="flex gap-4 mb-10">
                      <div className="flex items-center gap-1">
                        <TiTick className='text-[#B7BACB]' />
                        <p className='text-[#B7BACB]'>Material expose like metals</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <TiTick className='text-[#B7BACB]' />
                        <p className='text-[#B7BACB]'>Material expose like metals</p>
                      </div>
                    </div>
                    <Link to="/allproduct">
                      <button className="bg-pink-500 text-white px-8 py-3 cursor-pointer">Shop Now</button>
                    </Link>
                  </div>
                  <div className="flex items-center justify-end">
                    <img src={pinksofa} alt="sofa" className="w-full h-full object-contain" />
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