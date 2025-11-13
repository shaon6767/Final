import React, { useContext, useState } from 'react'
import Container from './Container'
import { ApiData } from './ContextApi'
import { FaHeart, FaShoppingCart, FaSearchPlus } from 'react-icons/fa'
import delivery from "../assets/delivery.png"
import quality from "../assets/quality.png"
import cashback from "../assets/cashback.png"
import support from "../assets/support.png"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from './slice/productSlice'

const Latest = () => {
  let data = useContext(ApiData)
  let dispatch = useDispatch()
  
  let [activeCategory, setActiveCategory] = useState("newArrival")
  let filteredProducts = []

  if (data && data.products) {
    if (activeCategory == "newArrival") {
      filteredProducts = data.products.filter(item => item.isNew)
    } else if (activeCategory == "bestSeller") {
      filteredProducts = data.products.filter(item => item.isBestSeller)
    } else if (activeCategory == "featured") {
      filteredProducts = data.products.filter(item => item.isFeatured)
    } else if (activeCategory == "specialOffer") {
      filteredProducts = data.products.filter(item => item.isSpecialOffer)
    }
  }

  filteredProducts = filteredProducts.slice(0, 6)

  let handleNewArrival = () => {
    setActiveCategory("newArrival")
  }

  let handleBestSeller = () => {
    setActiveCategory("bestSeller")
  }

  let handleFeatured = () => {
    setActiveCategory("featured")
  }

  let handleSpecialOffer = () => {
    setActiveCategory("specialOffer")
  }

  let discountPrice = (product) => {
    if (!product) return 0;
    let discount = (product.price * product.discountPercentage) / 100;
    return (product.price - discount).toFixed(2);
  };

  return (
    <Container>
      <div className="mt-[100px] sm:mt-[200px] lg:mt-[120px] font-josefin">
        <div className="text-center text-[#1A0B5B] text-2xl sm:text-3xl lg:text-[42px] font-semibold">
          <h2 className=''>Latest Products</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-12 mt-4 sm:mt-6 lg:mt-8">
          <button onClick={handleNewArrival} className={`text-sm sm:text-base lg:text-[18px] font-semibold pb-2 ${activeCategory == "newArrival" ? 'text-pink-500 border-b-2 border-pink-500' : 'text-[#1A0B5B]'}`}>New Arrival</button>
          <button onClick={handleBestSeller} className={`text-sm sm:text-base lg:text-[18px] font-semibold pb-2 ${activeCategory == "bestSeller" ? 'text-pink-500 border-b-2 border-pink-500' : 'text-[#1A0B5B]'}`}>Best Seller </button>
          <button onClick={handleFeatured} className={`text-sm sm:text-base lg:text-[18px] font-semibold pb-2 ${activeCategory == "featured" ? 'text-pink-500 border-b-2 border-pink-500' : 'text-[#1A0B5B]'}`}>Featured</button>
          <button onClick={handleSpecialOffer} className={`text-sm sm:text-base lg:text-[18px] font-semibold pb-2 ${activeCategory == "specialOffer" ? 'text-pink-500 border-b-2 border-pink-500' : 'text-[#1A0B5B]'}`}>Special Offer</button>
        </div>

        <div className="mt-6 sm:mt-8 lg:mt-[50px] grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredProducts.map((item) => (
            <Link to={`/productdetails/${item.id}`} className="group">
              <div className="bg-white p-2 sm:p-6 lg:p-4 h-[180px] sm:h-[350px] lg:h-[400px] flex items-center cursor-pointer justify-center relative overflow-hidden">
                <img
                  className='w-[180px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px] object-cover transition-all z-10 duration-300 group-hover:scale-105' src={item.thumbnail} alt="" />
                <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                <div className="absolute left-0 lg:left-1 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col gap-2 sm:gap-4 pointer-events-none z-100">
                  <button className="bg-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-blue-50 pointer-events-auto hover:text-blue-500 transition-colors">
                    <FaHeart className="text-sm sm:text-lg" />
                  </button>
                  <button className="bg-white p-2 sm:p-3 rounded-full shadow-lg pointer-events-auto hover:bg-blue-50 hover:text-blue-500 transition-colors">
                    <FaSearchPlus className="text-sm sm:text-lg" />
                  </button>
                  <button onClick={() => dispatch(addToCart(item))} className="bg-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-blue-50 pointer-events-auto hover:text-blue-500 transition-colors">
                    <FaShoppingCart className="text-sm sm:text-lg cursor-pointer" />
                  </button>
                </div>
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-red-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  SALE
                </div>
              </div>
              <div className="flex justify-center gap-10 items-center px-2 sm:px-4 mt-3 sm:mt-4">
                <h3 className="text-xs sm:text-sm lg:text-[16px] font-semibold text-[#151875] line-clamp-2">
                  {item.title}
                </h3>

                <div className="flex gap-1 sm:gap-2 items-center">
                  <p className="text-[#151875] font-bold text-xs sm:text-[14px]">${discountPrice(item)}</p>
                  <p className="text-[#FB2448] line-through font-bold text-xs sm:text-[14px]">${item.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 lg:mt-[100px]">
          <h2 className='text-center text-[#1A0B5B] text-2xl sm:text-3xl lg:text-[42px] font-semibold'>What Shopex Offer!</h2>
          <div className="">
            <div className="grid grid-cols-2  xl:grid-cols-4 gap-4 sm:gap-6 mt-6 sm:mt-8">
              <div className="bg-white p-6 sm:p-8 lg:p-16 shadow-lg text-center">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <span><img src={delivery} alt="" className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" /></span>
                  </div>
                </div>
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 sm:mb-3 text-[#151875]">24/7 Support</h3>
                <p className="text-[#1a0b5b6c] text-xs sm:text-sm w-full sm:w-[180px] lg:w-[200px] mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 lg:p-16 shadow-lg text-center">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <span><img src={cashback} alt="" className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" /></span>
                  </div>
                </div>
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 sm:mb-3 text-[#151875]">24/7 Support</h3>
                <p className="text-[#1a0b5b6c] text-xs sm:text-sm w-full sm:w-[180px] lg:w-[200px] mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 lg:p-16 shadow-lg text-center">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <span><img src={quality} alt="" className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" /></span>
                  </div>
                </div>
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 sm:mb-3 text-[#151875]">24/7 Support</h3>
                <p className="text-[#1a0b5b6c] text-xs sm:text-sm w-full sm:w-[180px] lg:w-[200px] mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 lg:p-16 shadow-lg text-center">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <span><img src={support} alt="" className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" /></span>
                  </div>
                </div>
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 sm:mb-3 text-[#151875]">24/7 Support</h3>
                <p className="text-[#1a0b5b6c] text-xs sm:text-sm w-full sm:w-[180px] lg:w-[200px] mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Latest