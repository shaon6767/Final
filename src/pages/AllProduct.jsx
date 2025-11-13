import React, { useContext, useEffect, useState } from 'react'
import Container from '../component/Container'
import { FaList, FaRegStar, FaStar, FaStarHalfAlt, FaTh } from 'react-icons/fa';
import { ApiData } from '../component/ContextApi'
import { Link } from 'react-router-dom';
import { GoZoomIn } from 'react-icons/go';
import { BsCart } from 'react-icons/bs';
import { SlHeart } from 'react-icons/sl';
import { useDispatch } from 'react-redux';
import { addToCart } from '../component/slice/productSlice';
import com from "../assets/company.png"

const AllProduct = () => {
  let info = useContext(ApiData);
  let [perPage, setPerPage] = useState(6);
  let [currentPage, setCurrentPage] = useState(1);
  let [categories, setCategories] = useState([]);
  let [brands, setBrands] = useState([]);
  let [colors, setColors] = useState([]);
  let [filterShow, setFilterShow] = useState([]);
  let [view, setView] = useState("");
  let [cateFilterShow, setCateFilterShow] = useState([]);
  let [show, setShow] = useState(true);
  let dispatch = useDispatch()

  let lastPage = perPage * currentPage;
  let firstPage = lastPage - perPage;
  let allPage = info.products.slice(firstPage, lastPage)

  let pageNumber = []
  for (let i = 0; i < Math.ceil(info.products?.length / perPage); i++) {
    pageNumber.push(i)
  }

  let paginate = (index) => {
    setCurrentPage(index + 1);
  }

  let next = () => {
    if (currentPage < pageNumber.length) {
      setCurrentPage((state) => state + 1);
    }
  }

  let previous = () => {
    if (currentPage > 1) {
      setCurrentPage((state) => state - 1);
    }
  }

  let handlePerPage = (e) => {
    setPerPage(e.target.value);
  }

  useEffect(() => {
    if (info && info.products) {
      setCategories([...new Set(info.products.map((item) => item.category))]);
      setBrands([...new Set(info.products.map((item) => item.brand))]);
      setColors([...new Set(info.products.map((item) => item.color))]);
    }
  }, [info]);


  let handleCategory = (citem) => {
    let cateFilter = info.products.filter((item) => item.category === citem);
    setFilterShow(cateFilter);
  }

  let handleBrand = (bitem) => {
    let brandFilter = info.products.filter((item) => item.brand === bitem);
    setFilterShow(brandFilter);
  }

  let handleColor = (colorItem) => {
    let colorFilter = info.products.filter((item) => item.color === colorItem);
    setFilterShow(colorFilter);
  }

  let handlePrice = (value) => {
    let priceShow = info.products.filter((item) => item.price > value.low && item.price < value.high);
    setFilterShow(priceShow);
  }

  let handleRating = (rating) => {
    let ratingFilter = info.products.filter((item) => item.rating == rating);
    setFilterShow(ratingFilter);
  }

  let handleClear = () => {
    setFilterShow([]);
  }

  useEffect(() => {
    let cateAll = filterShow.slice(0, 6);
    setCateFilterShow(cateAll);
  }, [filterShow]);

  let handleShow = () => {
    setCateFilterShow(filterShow);
    setShow(false);
  }

  let handleLess = () => {
    let cateAll = filterShow.slice(0, 6);
    setCateFilterShow(cateAll);
    setShow(true);
  }

  let handleGridView = () => {
    setView("");
  }

  let handleListView = () => {
    setView("active");
  }

  let discountPrice = (product) => {
    let discount = (product.price * product.discountPercentage) / 100;
    let mainPrice = product.price - discount;
    return mainPrice.toFixed(2);
  };

  let clientRating = (rating) => {
    return Array.from({ length: 5 }, (_, index) => {
      let number = index + 0.5;
      return (
        rating > index + 1
          ? <FaStar key={index} className='text-[gold]' />
          : rating > number
            ? <FaStarHalfAlt key={index} className='text-[gold]' />
            : <FaRegStar key={index} className='text-[gold]' />
      );
    });
  };

  return (
    <Container>
      <div className="mt-2 lg:mt-[60px] py-[40px]">
        <h2 className='text-[#101750] text-[36px] font-semibold'>Category</h2>
        <div className="">
          <h2 className='text-[#0D134E]'><Link to="/"><span className='text-[#0D134E] hover:text-[#FB2E86]'>Home</span></Link>.Pages.<Link to="/allproduct"><span className='text-[#0D134E] hover:text-[#FB2E86]'>Products</span></Link></h2>
        </div>
      </div>

      <div className="">
        <div className="mx-auto py-3">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="w-full md:w-2/5 mb-3 md:mb-0 hidden lg:block">
              <h2 className="text-lg font-semibold text-[#151875]">
                Ecommerce Accessories & Fashion Items
              </h2>
            </div>

            <div className="flex gap-2 w-full md:flex lg:flex sm:flex-row justify-end items-center space-y-3 md:space-y-0 md:space-x-4">
              {filterShow.length === 0 && (
                <div className="flex items-center space-x-0 lg:space-x-2">
                  <span className="text-sm text-[#3F509E] hidden sm:block">Per page:</span>
                  <select onChange={handlePerPage} className="text-sm border rounded px-2 w-[60px] py-1">
                    <option value="6">6</option>
                    <option value="9">9</option>
                    <option value="15">15</option>
                    <option value="27">27</option>
                    <option value="36">36</option>
                  </select>
                </div>
              )}

              <div className="flex items-center space-x-2">
                <span className="text-sm text-[#3F509E] hidden sm:block">Sort by:</span>
                <select className="text-sm border w-[150px] rounded px-2 py-1">
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name A-Z</option>
                </select>
              </div>

              <div className="flex items-center space-x-1 p-1">
                <h2 className='text-[#3F509E]'>View:</h2>
                <button onClick={handleGridView} className={`p-1.5 rounded ${view == "active" ? "" : "bg-blue-500 text-white"}`}> <FaTh size={16} /> </button>
                <button onClick={handleListView} className={`p-1.5 rounded ${view == "active" ? "bg-blue-500 text-white" : ""}`}>
                  <FaList size={16} /> </button></div>
              <div className="flex-1 max-w-xs"> <input type="text" className="hidden sm:block w-full py-1.5 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm" placeholder="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="container mx-auto py-6">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="w-full lg:w-1/5 hidden md:block">
              <div className="bg-white">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="font-semibold text-[18px] text-[blue] hidden lg:block">All Category</h2>
                  {filterShow.length > 0 &&
                    <button onClick={handleClear} className="text-sm underline text-red-600 cursor-pointer">
                      Clear Filters
                    </button>
                  }
                </div>

                <div className="pb-4 mb-4">
                  <h3 className="font-semibold text-[#151875] underline">Categories</h3>
                  <div className="mt-3 space-y-2 max-h-[180px] overflow-y-scroll">
                    {categories.map(category => (
                      <div key={category} className="flex items-center">
                        <label onClick={() => handleCategory(category)} className="text-sm text-gray-600 cursor-pointer capitalize" > {category} </label> </div>
                    ))}
                  </div>
                </div>

                <div className="pb-4 mb-4">
                  <h3 className="font-semibold text-[#151875] underline">Brand</h3>
                  <div className="mt-3 space-y-2 max-h-[200px] overflow-y-scroll">
                    {brands.map(brand => (
                      <div key={brand} className="flex items-center"> <label onClick={() => handleBrand(brand)} className="text-sm text-gray-600 cursor-pointer">{brand}</label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pb-4 mb-4">
                  <h3 className="font-semibold text-[#151875] underline">Price</h3>
                  <div className="mt-3 space-y-2">
                    <div className="flex items-center"> <label onClick={() => handlePrice({ low: 0, high: 100 })} className="text-sm text-gray-600 cursor-pointer py-2" >$0 - $99.99 </label>
                    </div>
                    <div className="flex items-center"><label onClick={() => handlePrice({ low: 100, high: 500 })} className="text-sm text-gray-600 cursor-pointer py-2"> $100 - $499.99 </label>
                    </div>
                    <div className="flex items-center"><label onClick={() => handlePrice({ low: 500, high: 1000 })} className="text-sm text-gray-600 cursor-pointer py-2" > $500 - $999.99 </label>
                    </div>
                    <div className="flex items-center"><label onClick={() => handlePrice({ low: 1000, high: 2000 })} className="text-sm text-gray-600 cursor-pointer py-2"> $1000 - $1999.99 </label>
                    </div>
                  </div>
                </div>

                <div className="pb-4 mb-4">
                  <h3 className="font-semibold text-[#151875] underline mb-3">Rating</h3>
                  <div className="space-y-2">
                    <div className="flex items-center"> <label onClick={() => handleRating(5)} className="text-sm text-gray-600 cursor-pointer py-2 flex items-center" >{clientRating(5)} (5)</label>
                    </div>
                    <div className="flex items-center"> <label onClick={() => handleRating(4)} className="text-sm text-gray-600 cursor-pointer py-2 flex items-center" > {clientRating(4)}(4) </label>
                    </div>
                    <div className="flex items-center"> <label onClick={() => handleRating(3)} className="text-sm text-gray-600 cursor-pointer py-2 flex items-center" >{clientRating(3)} (3)</label>
                    </div>
                    <div className="flex items-center"> <label onClick={() => handleRating(2)} className="text-sm text-gray-600 cursor-pointer py-2 flex items-center" >{clientRating(2)}(2)</label>
                    </div>
                    <div className="flex items-center"><label onClick={() => handleRating(1)} className="text-sm text-gray-600 cursor-pointer py-2 flex items-center" >{clientRating(1)}(1) </label>
                    </div>
                  </div>
                </div>

                <div className="pb-4 ">
                  <h3 className="font-semibold text-[#151875] underline">Color</h3>
                  <div className="mt-3 max-h-[200px] overflow-y-scroll space-y-2">
                    {colors.map(color => (
                      <div key={color} className="flex items-center"><label onClick={() => handleColor(color)} className="text-sm text-gray-600 cursor-pointer capitalize" > {color}</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-4/5">
              <div className="bg-white">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-[#151875]">
                    {filterShow.length > 0 ? `Showing ${cateFilterShow.length} of ${filterShow.length} products` : `Showing ${allPage.length} of ${info.products?.length || 0} products`}
                  </h2>
                </div>

                {filterShow.length > 0 ? (
                  <div>
                    {view == "active" ? (
                      <div className={`w-full flex flex-col space-y-4`}>
                        {cateFilterShow.map((item) => (
                          <div key={item.id} className={`flex items-center gap-4 p-4 w-full bg-white hover:shadow-lg hover:scale-105 transition-all ease-in-out`}>
                            <Link to={`/productdetails/${item.id}`}>
                              <img src={item.thumbnail} alt="" className={`w-[60px] h-[60px] md:w-[120px] md:h-[100px] lg:w-[200px] lg:h-[170px] flex justify-start`} />
                            </Link>
                            <div className="flex-1">
                              <h2 className={`w-full flex justify-start text-[#151875] font-semibold text-lg`}>{item.title}</h2>
                              <div className="flex items-center mt-2">
                                <div className=" text-yellow-400 hidden md:flex">
                                  {clientRating(item.rating)}
                                </div>
                                <span className="text-sm text-gray-600 hidden md:block ml-2">({item.rating})</span>
                              </div>
                              <p className="text-[#9295AA] mt-2 hidden lg:block">{item.description}</p>
                              <div className="flex justify-between items-center mt-3">
                                <div className="flex items-center gap-2">
                                  <span className="text-lg font-bold text-[#111C85]">${discountPrice(item)}</span>
                                  <span className="text-lg font-bold line-through text-[#FF2AAA]">${item.price}</span>
                                </div>
                                <div className="flex">
                                  <button className="bg-white p-2 rounded-full hover:bg-gray-200">
                                    <SlHeart size={18} className="text-blue-600" />
                                  </button>
                                  <button className="bg-white p-2 rounded-full hover:bg-gray-200">
                                    <GoZoomIn size={18} className="text-blue-600" />
                                  </button>
                                  <button onClick={() => dispatch(addToCart(item))} className="bg-white p-2 rounded-full hover:bg-gray-200">
                                    <BsCart size={18} className="text-blue-600 cursor-pointer" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className={`w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6`}>
                        {cateFilterShow.map((item) => (
                          <div key={item.id} className={`py-2 group relative bg-white hover:shadow-lg hover:scale-105 transition-all ease-in-out`}>
                            <Link to={`/productdetails/${item.id}`}>
                              <img src={item.thumbnail} alt="" className={`w-full h-[150px] lg:h-[250px] object-cover`} />
                            </Link>
                            <div className="p-4">
                              <h2 className={`flex justify-center text-blue-600 duration-150 ease-in-out`}>{item.title}</h2>
                              <div className="flex items-center justify-center mt-2">
                                <div className="flex text-yellow-400">
                                  {clientRating(item.rating)}
                                </div>
                              </div>
                              <div className="flex items-center gap-4 mt-4 justify-center">
                                <p className="text-[16px] line-through text-[#FF2AAA]">${item.price}</p>
                                <p className={` text-blue-600 duration-150 ease-in-out`}>${discountPrice(item)} </p>
                              </div>
                              <div className="absolute top-3 left-0">
                                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100">
                                  <button className='bg-white p-2 rounded-full hover:bg-gray-200 transition-all duration-200 ease-in-out'>
                                    <SlHeart size={18} className="text-blue-800" />
                                  </button>
                                  <button className=' bg-white p-2 rounded-full hover:bg-gray-200'>
                                    <GoZoomIn size={18} className="text-blue-800" />
                                  </button>
                                  <button onClick={() => dispatch(addToCart(item))} className=' bg-white p-2 rounded-full hover:bg-gray-200'>
                                    <BsCart size={18} className="text-blue-800 cursor-pointer" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {filterShow.length > 6 && (
                      <div className="flex justify-center mt-8">
                        {show ? (
                          <button onClick={handleShow} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"> Show All ({filterShow.length} products)
                          </button>
                        ) : (
                          <button onClick={handleLess} className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"> Show Less</button>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <div>
                    {view == "active" ? (
                      <div className={`w-full flex flex-col space-y-0 md:space-y-2 lg:space-y-4`}>
                        {allPage.map((item) => (
                          <div key={item.id} className={`flex items-center gap-4 p-4 w-full bg-white hover:shadow-lg hover:scale-105 transition-all ease-in-out`}>
                            <Link to={`/productdetails/${item.id}`}>
                              <img src={item.thumbnail} alt="" className={`w-[60px] h-[60px] md:w-[120px] md:h-[100px] lg:w-[200px] lg:h-[170px] flex justify-start`} />
                            </Link>
                            <div className="flex-1">
                              <h2 className={`w-full flex justify-start text-[#151875] font-semibold text-lg`}>{item.title}</h2>
                              <div className="flex items-center mt-2">
                                <div className=" text-yellow-400 hidden md:flex">
                                  {clientRating(item.rating)}
                                </div>
                                <span className="text-sm text-gray-600 hidden md:block ml-2">({item.rating})</span>
                              </div>
                              <p className="text-[#9295AA] mt-2 hidden lg:block">{item.description}</p>
                              <div className="flex justify-between items-center mt-3">
                                <div className="flex items-center gap-2">
                                  <span className="text-lg font-bold text-[#111C85]">${discountPrice(item)}</span>
                                  <span className="text-lg font-bold line-through text-[#FF2AAA]">${item.price}</span>
                                </div>
                                <div className="flex sm:gap-4 lg:gap-0">
                                  <button className="bg-white p-2 rounded-full hover:bg-gray-200">
                                    <SlHeart size={18} className="text-blue-800" />
                                  </button>
                                  <button className="bg-white p-2 rounded-full hover:bg-gray-200">
                                    <GoZoomIn size={18} className="text-blue-800" />
                                  </button>
                                  <button onClick={() => dispatch(addToCart(item))} className="bg-white p-2 rounded-full hover:bg-gray-200">
                                    <BsCart size={18} className="text-blue-800 cursor-pointer" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className={`w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6`}>
                        {allPage.map((item) => (
                          <div key={item.id} className={`py-2 group relative bg-white hover:shadow-lg hover:scale-105 transition-all ease-in-out`}>
                            <Link to={`/productdetails/${item.id}`}>
                              <img src={item.thumbnail} alt="" className={`w-full h-[150px] lg:h-[250px] object-cover`} />
                            </Link>
                            <div className="p-4">
                              <h2 className={`flex justify-center text-blue-600 duration-150 ease-in-out`}>{item.title}</h2>
                              <div className="flex items-center justify-center mt-2">
                                <div className="flex text-yellow-400">
                                  {clientRating(item.rating)}
                                </div>
                              </div>
                              <div className="flex items-center gap-4 mt-4 justify-center">
                                <p className="text-[16px] line-through text-[#FF2AAA]">${item.price}</p>
                                <p className={` text-blue-600 duration-150 ease-in-out`}>${discountPrice(item)} </p>
                              </div>
                              <div className="absolute top-3 left-0">
                                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100">
                                  <button className='bg-white p-2 rounded-full hover:bg-gray-200'>
                                    <SlHeart size={18} className="text-blue-800" />
                                  </button>
                                  <button className='bg-white p-2 rounded-full hover:bg-gray-200'>
                                    <GoZoomIn size={18} className="text-blue-800" />
                                  </button>
                                  <button onClick={() => dispatch(addToCart(item))} className='bg-white p-2 rounded-full hover:bg-gray-200'>
                                    <BsCart size={18} className="text-blue-800 cursor-pointer" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {pageNumber.length > 1 && (
                      <div className="flex justify-center mt-[50px]">
                        <ul className="flex items-center gap-1">
                          <li> <a onClick={previous} className="px-3 py-1 border rounded cursor-pointer hover:bg-blue-50">Previous</a>
                          </li>
                          {pageNumber.map((_, i) => {
                            let last = pageNumber.length - 1;
                            if (i < 4 || i === last || (i >= currentPage - 2 && i <= currentPage)) {
                              return (
                                <li key={i} onClick={() => paginate(i)}><a className={`px-3 py-1 rounded cursor-pointer ${currentPage === i + 1 ? "bg-blue-600 text-white" : "border text-blue-700"}`} > {i + 1} </a> </li>);
                            }
                            if (i === last - 1 && currentPage < last - 1)
                              return <span className="px-2">...</span>;
                            return null;
                          })}
                          <li><a onClick={next} className="px-3 py-1 border rounded cursor-pointer hover:bg-blue-50">Next</a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-end mr-[80px] cursor-pointer">
        <img src={com} alt="" />
      </div>
    </Container>
  )
}

export default AllProduct