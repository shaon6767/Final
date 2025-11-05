// import React, { useContext, useState, useEffect } from 'react'
// import Container from './Container'
// import Slider from 'react-slick';
// import { ApiData } from './ContextApi';
// import bg from "../assets/bg.png"
// import company from "../assets/company.png"
// import { FaPen, FaCalendar } from 'react-icons/fa';
// import one from "../assets/bone.png"
// import two from "../assets/btwo.png"
// import three from "../assets/bthree.png"
// import { useNavigate } from 'react-router-dom';

// const Category = () => {
//   let data = useContext(ApiData)
//   let navigate = useNavigate()
//   let [categories, setCategories] = useState([])

//   useEffect(() => {
//     if (data && data.products) {
//       setCategories([...new Set(data.products.map(item => item.category))])
//     }
//   }, [data])

//   let handleCatgry = ()=>{
//     navigate("/allproduct")
//   }

//   const settings = {
//     arrows: false,
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     appendDots: dots => (
//       <div className="flex justify-center">
//         <ul className="flex justify-center gap-6 mt-[50px]"> {dots} </ul>
//       </div>
//     ),
//     customPaging: i => (
//       <div className="w-3 h-3 bg-white border-1 border-[#FB2E86] rounded-full"></div>
//     )
//   };
  
//   return (
//     <Container>
//       <div className="mt-16 category font-josefin">
//         <h2 className="text-center text-[#1A0B5B] text-[42px] font-semibold">Top Categories</h2>

//         <Slider {...settings}>
//           {categories.map((category) => {
//             let categoryProduct = data.products?.find((item) => item.category == category);
//             return (
//               <div className="px-6 mt-[50px]">
//                 <div className="text-center group cursor-pointer">
//                   <div className="relative w-68 h-68 mx-auto mb-6 group " onClick={handleCatgry}>
//                     <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
//                       <img src={categoryProduct?.thumbnail} alt="" className="w-62 h-62 z-99 object-cover rounded-full transition-all duration-300 group-hover:scale-110"
//                       />
//                     </div>
//                     <div className="absolute top-1 right-1 w-70 h-70 rounded-full bg-[blue] z-1 opacity-0 group-hover:opacity-100 ">
//                     </div>
//                   </div>
//                   <h3 className="text-xl text-[#1A0B5B] font-light capitalize">{category}</h3>
//                 </div>
//               </div>
//             );
//           })}
//         </Slider>
//       </div>

//       <div className="mt-[100px]">
//         <div className="">
//           <div className="relative">
//             <img src={bg} alt="" className='w-full h-full' />
//             <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
//               <p className='w-[574px] text-[35px] text-[#151875] text-center font-josefin font-semibold'>Get Leatest Update By Subscribe Our Newslater</p>
//               <button><a className='bg-pink-500 text-white px-8 py-3 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 mt-[100px]' href="#">Shop Now</a></button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="mt-20 max-w-[800px] mx-auto">
//        <a href="#"> <img src={company} alt="" /></a>
//       </div>

//       {/* blog */}

//       <div className="mt-[80px]">
//         <div className="">
//           <h2 className='text-center text-[#1A0B5B] text-[42px] font-semibold mb-8'>
//             Latest Blog
//           </h2>
//           <div className="grid grid-cols-3 gap-6">
//   <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
//     <div className="">
//       <img src={one} alt="" className="w-full h-full object-cover" />
//     </div>
    

//     <div className="p-6">
//       <div className="flex items-center gap-4 mb-4">
//         <div className="flex items-center gap-2">
//           <FaPen className="text-[#FB2E86]" />
//           <span className="text-sm text-gray-600">SaberAli</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <FaCalendar className="text-gray-600" />
//           <span className="text-sm text-gray-600">21 Aug, 2020</span>
//         </div>
//       </div>
      
//       <h2 className="text-xl font-bold text-[#151875] group-hover:text-[#FB2E86] mb-3">Top essential Trends in 2021</h2>
//       <p className="text-[#72718F] text-[18px] mb-4">
//         More off this less hello samlande lied much over tightly circa horse taped mightly
//       </p>
//       <a href="#" className="text-blue-500 hover:text-pink-500 transition-colors duration-300 border-b-2 border-[#151875] group-hover:border-[#FB2E86] group-hover:text-[#FB2E86]">
//         Read More
//       </a>
//     </div>
//   </div>


//   <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
//     <div className="">
//       <img src={two} alt=""  className="w-full h-full object-cover" />
//     </div>
//     <div className="p-6">
//       <div className="flex items-center gap-4 mb-4">
//         <div className="flex items-center gap-2">
//           <FaPen className="text-[#FB2E86]" />
//           <span className="text-sm text-gray-600">Surfauxion</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <FaCalendar className="text-gray-600" />
//           <span className="text-sm text-gray-600">21 Aug, 2020</span>
//         </div>
//       </div>
//       <h2 className="text-xl font-bold text-[#151875] group-hover:text-[#FB2E86] mb-3">Top essential Trends in 2021</h2>
//       <p className="text-[#72718F] text-[18px] mb-4">
//         More off this less hello samlande lied much over tightly circa horse taped mightly
//       </p>
//       <a href="#" className="text-blue-500 hover:text-pink-500 transition-colors duration-300 border-b-2 border-[#151875] group-hover:border-[#FB2E86] group-hover:text-[#FB2E86]">
//         Read More
//       </a>
//     </div>
//   </div>

//   <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
//     <div className="">
//       <img src={three} alt=""  className="w-full h-full object-cover" />
//     </div>
//     <div className="p-6">
//       <div className="flex items-center gap-4 mb-4">
//         <div className="flex items-center gap-2">
//           <FaPen className="text-[#FB2E86]" />
//           <span className="text-sm text-gray-600">SaberAli</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <FaCalendar className="text-gray-600" />
//           <span className="text-sm text-gray-600">21 Aug, 2020</span>
//         </div>
//       </div>
//       <h2 className="text-xl font-bold text-[#151875] mb-3 group-hover:text-[#FB2E86]">Top essential Trends in 2021</h2>
//       <p className="text-[#72718F] text-[18px] mb-4">
//         More off this less hello samlande lied much over tightly circa horse taped mightly
//       </p>
//       <a href="#" className="text-blue-500 hover:text-pink-500 transition-colors duration-300 border-b-2 border-[#151875] group-hover:border-[#FB2E86] group-hover:text-[#FB2E86]">
//         Read More
//       </a>
//     </div>
//   </div>
// </div>
//         </div>
//       </div>
//     </Container>
//   )
// }

// export default Category


import React, { useContext, useState, useEffect } from 'react'
import Container from './Container'
import Slider from 'react-slick';
import { ApiData } from './ContextApi';
import bg from "../assets/bg.png"
import company from "../assets/company.png"
import { FaPen, FaCalendar } from 'react-icons/fa';
import one from "../assets/bone.png"
import two from "../assets/btwo.png"
import three from "../assets/bthree.png"
import { useNavigate } from 'react-router-dom';

const Category = () => {
  let data = useContext(ApiData)
  let navigate = useNavigate()
  let [categories, setCategories] = useState([])

  useEffect(() => {
    if (data && data.products) {
      setCategories([...new Set(data.products.map(item => item.category))])
    }
  }, [data])

  let handleCatgry = ()=>{
    navigate("/allproduct")
  }

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth < 640 ? 2 : window.innerWidth < 768 ? 2 : window.innerWidth < 1024 ? 3 : 4,
    slidesToScroll: window.innerWidth < 640 ? 2 : window.innerWidth < 768 ? 2 : window.innerWidth < 1024 ? 3 : 4,
    autoplay: window.innerWidth < 1024,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: false
        }
      }
    ],
    appendDots: dots => (
      <div className="flex justify-center">
        <ul className="flex justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 lg:mt-[50px]"> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white border-1 border-[#FB2E86] rounded-full"></div>
    )
  };
  
  return (
    <Container>
      <div className="mt-8 sm:mt-12 lg:mt-16 category font-josefin">
        <h2 className="text-center text-[#1A0B5B] text-2xl sm:text-3xl lg:text-[42px] font-semibold">Top Categories</h2>

        <Slider {...settings}>
          {categories.map((category) => {
            let categoryProduct = data.products?.find((item) => item.category == category);
            return (
              <div className="px-3 sm:px-4 lg:px-6 mt-6 sm:mt-8 lg:mt-[50px]">
                <div className="text-center group cursor-pointer">
                  <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-68 lg:h-68 mx-auto mb-4 sm:mb-5 lg:mb-6 group" onClick={handleCatgry}>
                    <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                      <img src={categoryProduct?.thumbnail} alt="" className="w-36 h-36 sm:w-44 sm:h-44 lg:w-62 lg:h-62 z-99 object-cover rounded-full transition-all duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute top-1 right-1 w-40 h-40 sm:w-48 sm:h-48 lg:w-70 lg:h-70 rounded-full bg-[blue] z-1 opacity-0 group-hover:opacity-100">
                    </div>
                  </div>
                  <h3 className="text-sm sm:text-base lg:text-xl text-[#1A0B5B] font-light capitalize">{category}</h3>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      <div className="mt-8 sm:mt-12 lg:mt-[100px]">
        <div className="">
          <div className="relative">
            <img src={bg} alt="" className='w-full h-48 sm:h-64 lg:h-80 xl:h-full object-cover' />
            <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-full px-4 sm:px-6">
              <p className='w-full sm:w-96 lg:w-[574px] text-lg sm:text-xl lg:text-2xl xl:text-[35px] text-[#151875] text-center font-josefin font-semibold'>Get Leatest Update By Subscribe Our Newslater</p>
              <button className="mt-4 sm:mt-6 lg:mt-8">
                <a className='bg-pink-500 text-white px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-3 text-sm sm:text-base relative lg:absolute lg:top-[50%] lg:left-[50%] lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:mt-[100px]' href="#">
                  Shop Now
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 sm:mt-12 lg:mt-20 max-w-full sm:max-w-[600px] lg:max-w-[800px] mx-auto px-4">
       <a href="#"> 
         <img src={company} alt="" className="w-full h-auto" />
       </a>
      </div>

      {/* blog */}

      <div className="mt-8 sm:mt-12 lg:mt-[80px]">
        <div className="">
          <h2 className='text-center text-[#1A0B5B] text-2xl sm:text-3xl lg:text-[42px] font-semibold mb-4 sm:mb-6 lg:mb-8'>
            Latest Blog
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <div className="">
                <img src={one} alt="" className="w-full h-48 sm:h-56 lg:h-full object-cover" />
              </div>
              
              <div className="p-4 sm:p-5 lg:p-6">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <FaPen className="text-[#FB2E86] text-sm sm:text-base" />
                    <span className="text-xs sm:text-sm text-gray-600">SaberAli</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <FaCalendar className="text-gray-600 text-sm sm:text-base" />
                    <span className="text-xs sm:text-sm text-gray-600">21 Aug, 2020</span>
                  </div>
                </div>
                
                <h2 className="text-base sm:text-lg lg:text-xl font-bold text-[#151875] group-hover:text-[#FB2E86] mb-2 sm:mb-3">Top essential Trends in 2021</h2>
                <p className="text-[#72718F] text-sm sm:text-base lg:text-[18px] mb-3 sm:mb-4">
                  More off this less hello samlande lied much over tightly circa horse taped mightly
                </p>
                <a href="#" className="text-blue-500 hover:text-pink-500 transition-colors duration-300 border-b-2 border-[#151875] group-hover:border-[#FB2E86] group-hover:text-[#FB2E86] text-sm sm:text-base">
                  Read More
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <div className="">
                <img src={two} alt="" className="w-full h-48 sm:h-56 lg:h-full object-cover" />
              </div>
              <div className="p-4 sm:p-5 lg:p-6">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <FaPen className="text-[#FB2E86] text-sm sm:text-base" />
                    <span className="text-xs sm:text-sm text-gray-600">Surfauxion</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <FaCalendar className="text-gray-600 text-sm sm:text-base" />
                    <span className="text-xs sm:text-sm text-gray-600">21 Aug, 2020</span>
                  </div>
                </div>
                <h2 className="text-base sm:text-lg lg:text-xl font-bold text-[#151875] group-hover:text-[#FB2E86] mb-2 sm:mb-3">Top essential Trends in 2021</h2>
                <p className="text-[#72718F] text-sm sm:text-base lg:text-[18px] mb-3 sm:mb-4">
                  More off this less hello samlande lied much over tightly circa horse taped mightly
                </p>
                <a href="#" className="text-blue-500 hover:text-pink-500 transition-colors duration-300 border-b-2 border-[#151875] group-hover:border-[#FB2E86] group-hover:text-[#FB2E86] text-sm sm:text-base">
                  Read More
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <div className="">
                <img src={three} alt="" className="w-full h-48 sm:h-56 lg:h-full object-cover" />
              </div>
              <div className="p-4 sm:p-5 lg:p-6">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <FaPen className="text-[#FB2E86] text-sm sm:text-base" />
                    <span className="text-xs sm:text-sm text-gray-600">SaberAli</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <FaCalendar className="text-gray-600 text-sm sm:text-base" />
                    <span className="text-xs sm:text-sm text-gray-600">21 Aug, 2020</span>
                  </div>
                </div>
                <h2 className="text-base sm:text-lg lg:text-xl font-bold text-[#151875] mb-2 sm:mb-3 group-hover:text-[#FB2E86]">Top essential Trends in 2021</h2>
                <p className="text-[#72718F] text-sm sm:text-base lg:text-[18px] mb-3 sm:mb-4">
                  More off this less hello samlande lied much over tightly circa horse taped mightly
                </p>
                <a href="#" className="text-blue-500 hover:text-pink-500 transition-colors duration-300 border-b-2 border-[#151875] group-hover:border-[#FB2E86] group-hover:text-[#FB2E86] text-sm sm:text-base">
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