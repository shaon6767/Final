import React, { useContext, useEffect, useState } from 'react'
import Container from '../component/Container'
import { FaChevronDown, FaChevronUp, FaList, FaRegStar, FaStar, FaStarHalfAlt, FaTh } from 'react-icons/fa';
import { ApiData } from '../component/ContextApi'
import { Link } from 'react-router-dom';
import { GoZoomIn } from 'react-icons/go';
import { BsCart } from 'react-icons/bs';
import { SlHeart } from 'react-icons/sl';
import { useDispatch } from 'react-redux';
import { addToCart } from '../component/slice/productSlice';
import com from "../assets/company.png"

const AllProduct = () => {
  let data = useContext(ApiData);
  let [info, setInfo] = useState([]);
  let [filterShow, setFilterShow] = useState([]);
  let dispatch = useDispatch()


  let [view, setView] = useState("");
  let [categories, setCategories] = useState([]);
  let [brands, setBrands] = useState([]);
  let [colors, setColors] = useState([]);
  let [perPage, setPerPage] = useState(6);
  let [currentPage, setCurrentPage] = useState(1);


  let [selectedBrand, setSelectedBrand] = useState('');
  let [selectedCategory, setSelectedCategory] = useState('');
  let [selectedColor, setSelectedColor] = useState('');
  let [low, setLow] = useState(0);
  let [high, setHigh] = useState(2000);


  let [expandedSections, setExpandedSections] = useState({
    brand: false,
    categories: false,
    color: false
  });

  useEffect(() => {
    if (data && data.products) {
      setInfo(data.products);
      setFilterShow(data.products);
    }
  }, [data]);

  useEffect(() => {
    if (info.length > 0) {
      setCategories([...new Set(info.map((item) => item.category))]);
      setBrands([...new Set(info.map((item) => item.brand))]);
      setColors([...new Set(info.map((item) => item.color))]);
    }
  }, [info]);


  let handleBrand = (bitem) => {
    setSelectedBrand(bitem);
    let brandFilter = info.filter((item) => item.brand === bitem);
    setFilterShow(brandFilter);
  }

  let handleCategory = (citem) => {
    setSelectedCategory(citem);
    let cateFilter = info.filter((item) => item.category === citem);
    setFilterShow(cateFilter);
  }

  let handleColor = (colorItem) => {
    setSelectedColor(colorItem);
    let colorFilter = info.filter((item) => item.color === colorItem);
    setFilterShow(colorFilter);
  }

  let handlePrice = (value) => {
    setLow(value.low);
    setHigh(value.high);
    let priceShow = info.filter((item) => item.price > value.low && item.price < value.high)
    setFilterShow(priceShow);
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
    setFilterShow(info);
    setSelectedBrand('');
    setSelectedCategory('');
    setSelectedColor('');
    setLow(0);
    setHigh(2000);
  }

  let toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  let discountPrice = (product) => {
    if (!product) return 0;
    let discount = (product.price * product.discountPercentage) / 100;
    return (product.price - discount).toFixed(2);
  };

  // Simple pagination like Page 1
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
          ? <FaStar className='text-yellow-400' />
          : rating > number
            ? <FaStarHalfAlt className='text-yellow-400' />
            : <FaRegStar className='text-yellow-400' />
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
                    <button onClick={handleClear} className="text-sm text-blue-600 hover:text-blue-800">
                      Clear All
                    </button>
                  }
                </div>


                <div className="pb-4 mb-4">
                  <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection('categories')}>
                    <h3 className="font-semibold text-[#151875] underline">Categories</h3>
                    {expandedSections.categories ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                  </div>
                  {expandedSections.categories && (
                    <div className="mt-3 space-y-2">
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
                  )}
                </div>


                <div className="pb-4 mb-4">
                  <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection('brand')}>
                    <h3 className="font-semibold text-[#151875] underline">Brand</h3>
                    {expandedSections.brand ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                  </div>
                  {expandedSections.brand && (
                    <div className="mt-3 space-y-2">
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
                  )}
                </div>

                <div className="pb-4 mb-4">
                  <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection('price')}>
                    <h3 className="font-semibold text-[#151875] underline">Price</h3>
                    {expandedSections.price ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                  </div>
                  {expandedSections.price && (
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
                  )}
                </div>


                <div className="pb-4">
                  <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection('color')}>
                    <h3 className="font-semibold text-[#151875] underline">Color</h3>
                    {expandedSections.color ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                  </div>
                  {expandedSections.color && (
                    <div className="mt-3 space-y-2">
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
                  )}
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
                          <a onClick={previous} className="px-3 py-1 rounded-sm border flex justify-center cursor-pointer bg-blue-900 text-white hover:bg-blue-600">Previous</a>
                        </li>
                        {pageNumber.map((item, i) => (
                          <li key={i} onClick={() => paginate(item)}>
                            <a className={` px-3 py-1 rounded border-1 border-[white] flex justify-center cursor-pointer ${currentPage == i + 1 ? "bg-blue-600 text-white" : "bg-blue-400 text-white "}`}>{item + 1}</a>
                          </li>
                        ))}
                        <li>
                          <a onClick={next} className="px-3 py-1 cursor-pointer rounded-sm border flex justify-center bg-blue-800 hover:bg-blue-600 text-white">Next</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                )}

                {filterShow.length > 0 === (
                  <div className="text-center text-gray-500 py-12">
                    <p className="text-lg">No products found matching your filters</p>
                    <button
                      onClick={handleClear}
                      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      Clear Filters
                    </button>
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