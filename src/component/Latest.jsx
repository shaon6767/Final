import React, { useContext, useState } from 'react'
import Container from './Container'
import { ApiData } from './ContextApi'
import { FaHeart, FaShoppingCart, FaSearchPlus } from 'react-icons/fa'
import delivery from "../assets/delivery.png"
import quality from "../assets/quality.png"
import cashback from "../assets/cashback.png"
import support from "../assets/support.png"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from './slice/productSlice'

const Latest = () => {
  let data = useContext(ApiData)
  let navigate = useNavigate();
  let dispatch = useDispatch()

  let [newArrival, setNewArrival] = useState(true)
  let [bestSeller, setBestSeller] = useState(false)
  let [featured, setFeatured] = useState(false)
  let [specialOffer, setSpecialOffer] = useState(false)

  let filteredProducts = []

  let discountPrice = (product) => {
    if (!product) return 0;
    let discount = (product.price * product.discountPercentage) / 100;
    return (product.price - discount).toFixed(2);
  };

  let handleLtst = () => {
    navigate("/allproduct")
  }


  if (data && data.products) {
    if (newArrival) {
      filteredProducts = data.products.filter(item => item.isNew)
    } else if (bestSeller) {
      filteredProducts = data.products.filter(item => item.isBestSeller)
    } else if (featured) {
      filteredProducts = data.products.filter(item => item.isFeatured)
    } else if (specialOffer) {
      filteredProducts = data.products.filter(item => item.isSpecialOffer)
    }
  }

  filteredProducts = filteredProducts.slice(0, 6)


  let handleNewArrival = () => {
    setNewArrival(true)
    setBestSeller(false)
    setFeatured(false)
    setSpecialOffer(false)
  }

  let handleBestSeller = () => {
    setNewArrival(false)
    setBestSeller(true)
    setFeatured(false)
    setSpecialOffer(false)
  }

  let handleFeatured = () => {
    setNewArrival(false)
    setBestSeller(false)
    setFeatured(true)
    setSpecialOffer(false)
  }

  let handleSpecialOffer = () => {
    setNewArrival(false)
    setBestSeller(false)
    setFeatured(false)
    setSpecialOffer(true)
  }


  return (
    <Container>
      <div className="mt-[120px] font-josefin">
        <div className="text-center text-[#1A0B5B] text-[42px] font-semibold">
          <h2 className=''>Latest Products</h2>
        </div>

        <div className="flex justify-center gap-12 mt-8">
          <button onClick={handleNewArrival} className={`text-[18px] font-semibold pb-2 ${newArrival ? 'text-pink-500 border-b-2 border-pink-500' : 'text-[#1A0B5B]'}`}>New Arrival</button>
          <button onClick={handleBestSeller} className={`text-[18px] font-semibold pb-2 ${bestSeller ? 'text-pink-500 border-b-2 border-pink-500' : 'text-[#1A0B5B]'}`}>Best Seller </button>
          <button onClick={handleFeatured} className={`text-[18px] font-semibold pb-2 ${featured ? 'text-pink-500 border-b-2 border-pink-500' : 'text-[#1A0B5B]'}`}>Featured</button>
          <button onClick={handleSpecialOffer} className={`text-[18px] font-semibold pb-2 ${specialOffer ? 'text-pink-500 border-b-2 border-pink-500' : 'text-[#1A0B5B]'}`}>Special Offer</button>
        </div>

        <div className="mt-[50px] grid grid-cols-3 gap-8">
          {filteredProducts.map((item) => (
            <div className="group">
              <div className="bg-white p-6 h-[400px] flex items-center cursor-pointer justify-center relative overflow-hidden">
                <img onClick={handleLtst}
                  className='w-[300px] h-[300px] object-cover transition-all z-10 duration-300 group-hover:scale-105' src={item.thumbnail} alt="" />
                <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col gap-4">
                  <button className="bg-white p-3 rounded-full shadow-lg hover:bg-red-50 hover:text-red-500 transition-colors">
                    <FaHeart className="text-lg" />
                  </button>
                  <button className="bg-white p-3 rounded-full shadow-lg hover:bg-blue-50 hover:text-blue-500 transition-colors">
                    <FaSearchPlus className="text-lg" />
                  </button>
                  <button onClick={()=>dispatch(addToCart(item))} className="bg-white p-3 rounded-full shadow-lg hover:bg-green-50 hover:text-green-500 transition-colors">
                    <FaShoppingCart className="text-lg cursor-pointer" />
                  </button>
                </div>
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  SALE
                </div>
              </div>
              <div className="flex justify-between items-center px-13 mt-4">
                <h3 className="text-[16px] font-semibold text-[#151875] ">
                  {item.title}
                </h3>

               <div className="flex gap-2 items-center">
                   <p className="text-[#151875] font-bold text-[14px]">${discountPrice(item)}</p>
                <p className="text-[#FB2448] line-through font-bold text-[14px]">${item.price}</p>
               </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-[100px]">
          <h2 className='text-center text-[#1A0B5B] text-[42px] font-semibold'>What Shopex Offer!</h2>
          <div className="">
            <div className="grid grid-cols-4 gap-6 mt-8">
              {/* Card 1 */}
              <div className="bg-white p-16 shadow-lg text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <span>  <img src={delivery} alt="" /></span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-[#151875]">24/7 Support</h3>
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
                <h3 className="text-lg font-semibold mb-3 text-[#151875]">24/7 Support</h3>
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
                <h3 className="text-lg font-semibold mb-3 text-[#151875]">24/7 Support</h3>
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
    </Container>
  )
}

export default Latest