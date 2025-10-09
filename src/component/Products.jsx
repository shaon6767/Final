import React, { useContext } from 'react'
import Container from './Container'
import { ApiData } from './ContextApi'
import Slider from 'react-slick'
import { FaHeart, FaShoppingCart, } from 'react-icons/fa'
import { FiZoomIn } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from './slice/productSlice'



const Products = () => {
  let data = useContext(ApiData);
  let dispatch = useDispatch()

  let featuredProducts = data?.products?.filter(item => item.isFeatured) || [];

  var products = {
    infinite: true,
    arrows: false,
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    appendDots: dots => (
      <div style={{
        position: 'absolute',
        bottom: '-100px',
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
      }}>
        <ul style={{
          display: 'flex',
          gap: '10px',
          margin: 0,
          padding: 0
        }}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: i => (
      <div style={{
        width: '20px',
        height: '5px',
        marginBottom: '40px',
        borderRadius: '20%',
        backgroundColor: '#d1d5db',
        cursor: 'pointer'
      }}></div>
    )
  };


  return (
    <Container>
      <div className="mt-[80px] font-josefin">
        <div className="text-center text-[#1A0B5B] text-[42px] font-semibold ">
          <h2>Featured Products</h2>
        </div>

        <div className="mt-[60px] prdct ">
          <Slider {...products}>
            {featuredProducts.map((item) => (
              <div className="w-[24%] px-3">
                <div className="bg-gray-100 p-4 h-[320px] flex items-center justify-center shadow-lg relative group">
                  <div className="absolute left-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex  gap-2">
                    <button className="bg-white p-2 rounded-full shadow-md hover:bg-red-50 hover:text-red-500 transition-colors">
                      <FaHeart className="text-sm" />
                    </button>
                    <button className="bg-white p-2 rounded-full shadow-md hover:bg-blue-50 hover:text-blue-500 transition-colors">
                      <FiZoomIn className="text-sm" />
                    </button>
                    <button onClick={()=>dispatch(addToCart(item))} className="bg-white p-2 rounded-full shadow-md hover:bg-green-50 hover:text-green-500 transition-colors">
                      <FaShoppingCart className="text-sm cursor-pointer" />
                    </button>
                  </div>
                   <Link to={`/productdetails/${item.id}`}>
                  <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-md opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-300 hover:bg-blue-700">
                    View Details
                  </button>
                   </Link>

                  <Link to="/allproduct"> <img
                    className='w-[250px] h-[250px] object-cover'
                    src={item.thumbnail}
                    alt={item.title}
                  /></Link>
                </div>
                <div className="bg-white p-4 shadow-lg min-h-[120px] group hover:bg-[#2F1AC4] transition-all duration-300 ease-in-out cursor-pointer text-center">
                  <div className="">
                    <h3 className="text-lg text-[#FB2E86] group-hover:text-white mb-2">
                      {item.title}
                    </h3>
                  </div>

                  <div className="flex gap-3 justify-center py-2">
                    <div className="h-[2px] w-[20px] bg-[green] rounded-[2px]"></div>
                    <div className="h-[2px] w-[20px] bg-[#fc03f3] rounded-[2px]"></div>
                    <div className="h-[2px] w-[20px] bg-[blue] group-hover:bg-[white] rounded-[2px]"></div>
                  </div>

                  <div className="items-center mt-3">
                    <span className="text-[#151875] group-hover:text-white">Code - Y523201</span>
                  </div>
                  <div className="mt-4">
                    <span className="text-[#151875] group-hover:text-white">${item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Container>
  )
}

export default Products