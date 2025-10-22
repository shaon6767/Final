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
  let [filterShow, setFilterShow] = useState([]);
  let dispatch = useDispatch()
  let [view, setView] = useState("");
  let [categories, setCategories] = useState([]);
  let [brands, setBrands] = useState([]);
  let [colors, setColors] = useState([]);
  let [perPage, setPerPage] = useState(6);
  let [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (info && info.products) {
      setFilterShow(info.products);
    }
  }, [info]);

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
    let priceShow = info.products.filter((item) => item.price > value.low && item.price < value.high)
    setFilterShow(priceShow);
  }

  let handleRating = (rating) => {
    let ratingFilter = info.products.filter((item) => item.rating == rating);
    setFilterShow(ratingFilter);
  }

  let handleGridView = () => {
    setView("");
  }

  let handleListView = () => {
    setView("active");
  }

  let handlePerPage = (e) => {
    setPerPage(Number(e.target.value));
  }

  let handleClear = () => {
    setFilterShow(info.products);
  }

  let discountPrice = (product) => {
    if (!product) return 0;
    let discount = (product.price * product.discountPercentage) / 100;
    return (product.price - discount).toFixed(2);
  };

  let lastPage = perPage * currentPage;
  let firstPage = lastPage - perPage;
  let currentProducts = filterShow.slice(firstPage, lastPage);

  let pageNumber = [];
  for (let i = 0; i < Math.ceil(filterShow.length / perPage); i++) {
    pageNumber.push(i);
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
      <div className="mt-[60px] py-[40px]">
        <h2 className='text-[#101750] text-[36px] font-semibold'>Category</h2>
        <div className="">
          <h2 className='text-[#0D134E]'><Link to="/"><span className='text-[#0D134E] hover:text-[#FB2E86]'>Home</span></Link>.Pages.<Link to="/shop"><span className='text-[#0D134E] hover:text-[#FB2E86]'>Shop</span></Link></h2>
        </div>
      </div>

      <div className="">
        <div className="mx-auto py-3">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="w-full md:w-2/5 mb-3 md:mb-0">
              <h2 className="text-lg font-semibold text-[#151875]">
                Ecommerce Accessories & Fashion Items
              </h2>
            </div>

            <div className="w-full md:w-3/5 flex flex-col md:flex-row justify-end items-center space-y-3 md:space-y-0 md:space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-[#3F509E]">Per page:</span>
                <select onChange={handlePerPage} className="text-sm border rounded px-2 w-[60px] py-1">
                  <option value="6">6</option>
                  <option value="9">9</option>
                  <option value="15">15</option>
                  <option value="27">27</option>
                  <option value="36">36</option>
                </select>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-sm text-[#3F509E]">Sort by:</span>
                <select className="text-sm border w-[150px] rounded px-2 py-1">
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name A-Z</option>
                </select>
              </div>

              <div className="flex items-center space-x-1 p-1">
                <h2 className='text-[#3F509E]'>View:</h2>
                <button
                  onClick={handleGridView}
                  className={`p-1.5 rounded ${view == "active" ? "" : "bg-blue-500 text-white"}`}
                >
                  <FaTh size={16} />
                </button>
                <button
                  onClick={handleListView}
                  className={`p-1.5 rounded ${view == "active" ? "bg-blue-500 text-white" : ""}`}
                >
                  <FaList size={16} />
                </button>
              </div>

              <div className="flex-1 max-w-xs">
                <input
                  type="text"
                  className="w-full py-1.5 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                  placeholder=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="container mx-auto py-6">
          <div className="flex flex-col lg:flex-row gap-10">

            <div className="w-full lg:w-1/5">
              <div className="bg-white">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="font-semibold text-[18px] text-[blue]">All Category</h2>
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

                        <label
                          onClick={() => handleCategory(category)}
                          className="text-sm text-gray-600 cursor-pointer capitalize"
                        >
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pb-4 mb-4">
                  <h3 className="font-semibold text-[#151875] underline">Brand</h3>
                  <div className="mt-3 space-y-2 max-h-[200px] overflow-y-scroll">
                    {brands.map(brand => (
                      <div key={brand} className="flex items-center">
                        <label
                          onClick={() => handleBrand(brand)}
                          className="text-sm text-gray-600 cursor-pointer"
                        >
                          {brand}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pb-4 mb-4">
                  <h3 className="font-semibold text-[#151875] underline">Price</h3>
                  <div className="mt-3 space-y-2">
                    <div className="flex items-center">
                      <label
                        onClick={() => handlePrice({ low: 0, high: 100 })}
                        className="text-sm text-gray-600 cursor-pointer py-2"
                      >
                        $0 - $99.99
                      </label>
                    </div>
                    <div className="flex items-center">
                      <label
                        onClick={() => handlePrice({ low: 100, high: 500 })}
                        className="text-sm text-gray-600 cursor-pointer py-2"
                      >
                        $100 - $499.99
                      </label>
                    </div>
                    <div className="flex items-center">
                      <label
                        onClick={() => handlePrice({ low: 500, high: 1000 })}
                        className="text-sm text-gray-600 cursor-pointer py-2"
                      >
                        $500 - $999.99
                      </label>
                    </div>
                    <div className="flex items-center">
                      <label
                        onClick={() => handlePrice({ low: 1000, high: 2000 })}
                        className="text-sm text-gray-600 cursor-pointer py-2"
                      >
                        $1000 - $1999.99
                      </label>
                    </div>
                  </div>
                </div>


                <div className="pb-4 mb-4">
                  <h3 className="font-semibold text-[#151875] underline mb-3">Rating</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <label
                        onClick={() => handleRating()}
                        className="text-sm text-gray-600 cursor-pointer py-2 flex items-center"
                      >
                        {clientRating(5)}
                        (5)
                      </label>
                    </div>
                    <div className="flex items-center">
                      <label
                        onClick={() => handleRating(4)}
                        className="text-sm text-gray-600 cursor-pointer py-2 flex items-center"
                      >
                        {clientRating(4)}
                        (4)
                      </label>
                    </div>
                    <div className="flex items-center">
                      <label
                        onClick={() => handleRating(3)}
                        className="text-sm text-gray-600 cursor-pointer py-2 flex items-center"
                      >
                        {clientRating(3)}
                        (3)
                      </label>
                    </div>
                    <div className="flex items-center">
                      <label
                        onClick={() => handleRating(2)}
                        className="text-sm text-gray-600 cursor-pointer py-2 flex items-center"
                      >
                        {clientRating(2)}
                        (2)
                      </label>
                    </div>
                    <div className="flex items-center">
                      <label
                        onClick={() => handleRating(1)}
                        className="text-sm text-gray-600 cursor-pointer py-2 flex items-center"
                      >
                        {clientRating(1)}
                        (1)
                      </label>
                    </div>
                  </div>
                </div>

                <div className="pb-4 ">
                  <h3 className="font-semibold text-[#151875] underline">Color</h3>
                  <div className="mt-3 max-h-[200px] overflow-y-scroll space-y-2">
                    {colors.map(color => (
                      <div key={color} className="flex items-center">
                        <label
                          onClick={() => handleColor(color)}
                          className="text-sm text-gray-600 cursor-pointer capitalize"
                        >
                          {color}
                        </label>
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
                    Showing {currentProducts.length} of {filterShow.length} products
                  </h2>
                </div>

                {view == "active" ? (
                  <div className={`w-full flex flex-col space-y-4`}>
                    {currentProducts.map((item) => (
                      <div key={item.id} className={`flex items-center gap-4 p-4 w-full bg-white hover:shadow-lg hover:scale-105 transition-all ease-in-out`}>
                        <Link to={`/productdetails/${item.id}`}>
                          <img src={item.thumbnail} alt="" className={`w-[200px] h-[170px] flex justify-start`} />
                        </Link>
                        <div className="flex-1">
                          <h2 className={`w-full flex justify-start text-[#151875] font-semibold text-lg`}>{item.title}</h2>
                          <div className="flex items-center mt-2">
                            <div className="flex text-yellow-400">
                              {clientRating(item.rating)}
                            </div>
                            <span className="text-sm text-gray-600 ml-2">({item.rating})</span>
                          </div>
                          <p className="text-[#9295AA] mt-2">{item.description}</p>
                          <div className="flex justify-between items-center mt-3">
                            <div className="flex items-center gap-2">
                              <span className="text-lg font-bold text-[#111C85]">${discountPrice(item)}</span>
                              <span className="text-lg font-bold line-through text-[#FF2AAA]">${item.price}</span>
                            </div>
                            <div className="">
                              <button className="bg-white p-2 rounded-full hover:bg-gray-200">
                                <SlHeart size={18} className="text-gray-600" />
                              </button>
                              <button className="bg-white p-2 rounded-full hover:bg-gray-200">
                                <GoZoomIn size={18} className="text-gray-600" />
                              </button>
                              <button onClick={() => dispatch(addToCart(item))} className="bg-white p-2 rounded-full hover:bg-gray-200">
                                <BsCart size={18} className="text-gray-600 cursor-pointer" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className={`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}>
                    {currentProducts.map((item) => (
                      <div key={item.id} className={`py-2 group relative bg-white hover:shadow-lg hover:scale-105 transition-all ease-in-out`}>
                        <Link to={`/productdetails/${item.id}`}>
                          <img src={item.thumbnail} alt="" className={`w-full h-[250px] object-cover`} />
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
                                <SlHeart size={18} className="text-gray-600" />
                              </button>
                              <button className='bg-white p-2 rounded-full hover:bg-gray-200'>
                                <GoZoomIn size={18} className="text-gray-600" />
                              </button>
                              <button onClick={() => dispatch(addToCart(item))} className='bg-white p-2 rounded-full hover:bg-gray-200'>
                                <BsCart size={18} className="text-gray-600 cursor-pointer" />
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
                    <nav aria-label="Page navigation example">
                      <ul className="flex justify-center gap-1 items-center">
                        <li>
                          <a onClick={previous} className="px-3 py-1 rounded-sm flex justify-center cursor-pointer bg-white hover:bg-blue-50 text-blue-700 border-1 border-[blue]">Previous</a>
                        </li>
                        {pageNumber.map((item, i) => (
                          <li key={i} onClick={() => paginate(item)}>
                            <a className={` px-3 py-1 rounded  flex justify-center cursor-pointer ${currentPage == i + 1 ? "bg-blue-600 text-white" : "bg-white text-blue-700 border-1 border-[blue] "}`}>{item + 1}</a>
                          </li>
                        ))}
                        <li>
                          <a onClick={next} className="px-3 py-1 cursor-pointer rounded-sm flex justify-center  bg-white hover:bg-blue-50 text-blue-700 border-1 border-[blue]">Next</a>
                        </li>
                      </ul>
                    </nav>
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