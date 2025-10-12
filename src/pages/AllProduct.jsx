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

  let [view, setView] = useState('grid');

  let data = useContext(ApiData);

  let [info, setInfo] = useState([]);
  let [filterShow, setFilterShow] = useState([]);
  let dispatch = useDispatch()


  let [categories, setCategories] = useState([]);
  let [brands, setBrands] = useState([]);
  let [colors, setColors] = useState([]);

  let [selectedBrand, setSelectedBrand] = useState('');
  let [selectedCategory, setSelectedCategory] = useState('');
  let [selectedRating, setSelectedRating] = useState(0);
  let [selectedDiscount, setSelectedDiscount] = useState('');
  let [priceRange, setPriceRange] = useState({ low: 0, high: 2000 });
  let [selectedColor, setSelectedColor] = useState('');
  let [currentPage, setCurrentPage] = useState(1);
  let [productsPerPage, setProductsPerPage] = useState(9);
  let [sortBy, setSortBy] = useState('newest');


  let [expandedSections, setExpandedSections] = useState({
    brand: false,
    discount: false,
    rating: false,
    categories: false,
    price: false,
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
    if (bitem === '') {
      setFilterShow(info);
    } else {
      let brandFilter = info.filter((item) => item.brand === bitem);
      setFilterShow(brandFilter);
    }
  };

  let handleCategory = (citem) => {
    setSelectedCategory(citem);
    if (citem === '') {
      setFilterShow(info);
    } else {
      let cateFilter = info.filter((item) => item.category === citem);
      setFilterShow(cateFilter);
    }
  };

  let handleRating = (rating) => {
    setSelectedRating(rating);
    if (rating === 0) {
      setFilterShow(info);
    } else {
      let ratingFilter = info.filter((item) => item.rating >= rating);
      setFilterShow(ratingFilter);
    }
  };

  let handleDiscount = (discount) => {
    setSelectedDiscount(discount);
    if (discount === '') {
      setFilterShow(info);
    } else {
      let discountValue = parseInt(discount);
      let discountFilter = info.filter((item) => item.discountPercentage >= discountValue);
      setFilterShow(discountFilter);
    }
  };

  let handlePrice = (value) => {
    setPriceRange(value);
    let priceShow = info.filter((item) => item.price >= value.low && item.price <= value.high);
    setFilterShow(priceShow);
  };

  let handleColor = (colorItem) => {
    setSelectedColor(colorItem);
    if (colorItem === '') {
      setFilterShow(info);
    } else {
      let colorFilter = info.filter((item) => item.color === colorItem);
      setFilterShow(colorFilter);
    }
  };


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


  let clearAllFilters = () => {
    setSelectedBrand('');
    setSelectedCategory('');
    setSelectedRating(0);
    setSelectedDiscount('');
    setPriceRange({ low: 0, high: 2000 });
    setSelectedColor('');
    setFilterShow(info);
  };


  const sortProducts = (products) => {
    const sorted = [...products];
    switch (sortBy) {
      case 'price-low':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-high':
        return sorted.sort((a, b) => b.price - a.price);
      case 'name':
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case 'newest':
      default:
        return sorted.sort((a, b) => new Date(b.meta?.createdAt) - new Date(a.meta?.createdAt));
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedBrand, selectedCategory, selectedRating, selectedDiscount, selectedColor, sortBy, productsPerPage]);


  let indexOfLastProduct = currentPage * productsPerPage;
  const sortedProducts = sortProducts(filterShow);
  let indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  let currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  let totalPages = Math.ceil(filterShow.length / productsPerPage);


  let paginate = (pageNumber) => setCurrentPage(pageNumber);
  let nextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  let prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  let priceRanges = [
    { label: 'Under $100', value: { low: 0, high: 100 } },
    { label: '$100 to $250', value: { low: 100, high: 250 } },
    { label: '$250 to $500', value: { low: 250, high: 500 } },
    { label: '$500 to $1000', value: { low: 500, high: 1000 } },
    { label: 'Over $1000', value: { low: 1000, high: 2000 } }
  ];

  let discountRanges = [10, 15, 20, 25, 30];



  let renderRatingStars = (rating) => {
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
        <h2 className='text-[#101750] text-[36px] font-semibold'>Products</h2>
        <div className="">
          <h2><Link to="/">Home</Link>.Pages.<Link to="/shop">Shop</Link></h2>
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
                <select value={productsPerPage} onChange={(e) => setProductsPerPage(Number(e.target.value))} className="text-sm border rounded px-2 w-[60px] py-1">
                  <option value={6}>6</option>
                  <option value={9}>9</option>
                  <option value={15}>15</option>
                  <option value={27}>27</option>
                  <option value={36}>36</option>
                </select>
              </div>


              <div className="flex items-center space-x-2">
                <span className="text-sm text-[#3F509E]">Sort by:</span>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="text-sm border w-[150px] rounded px-2 py-1">
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name A-Z</option>
                </select>
              </div>


              <div className="flex items-center space-x-1 p-1">
                <h2 className='text-[#3F509E]'>View:</h2>
                <button
                  onClick={() => setView('list')}
                  className={`p-1.5 rounded ${view === 'list'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                    }`}
                >
                  <FaList size={16} />
                </button>
                <button
                  onClick={() => setView('grid')}
                  className={`p-1.5 rounded ${view === 'grid'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                    }`}
                >
                  <FaTh size={16} />
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
                  <button
                    onClick={clearAllFilters}
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    Clear All
                  </button>
                </div>

                <div className="max-h-[1000px] overflow-y-scroll">

                  {/* Brand */}
                  <div className="pb-4 mb-4">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleSection('brand')}
                    >
                      <h3 className="font-semibold text-[#151875] underline">Product Brand</h3>
                      {expandedSections.brand ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                    </div>
                    {expandedSections.brand && (
                      <div className="mt-3 space-y-2">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            name="brand"
                            checked={selectedBrand === ''}
                            onChange={() => handleBrand('')}
                            className="mr-2"
                          />
                          <label className="text-sm text-gray-600 cursor-pointer">All Brands</label>
                        </div>
                        {brands.map(brand => (
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              name="brand"
                              checked={selectedBrand === brand}
                              onChange={() => handleBrand(brand)}
                              className="mr-2"
                            />
                            <label className="text-sm text-gray-600 cursor-pointer">
                              {brand}
                            </label>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>


                  {/* Discount */}
                  <div className="pb-4 mb-4">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleSection('discount')}
                    >
                      <h3 className="font-semibold text-[#151875] underline">Discount Offer</h3>
                      {expandedSections.discount ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                    </div>
                    {expandedSections.discount && (
                      <div className="mt-3 space-y-2">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            name="discount"
                            checked={selectedDiscount === ''}
                            onChange={() => handleDiscount('')}
                            className="mr-2"
                          />
                          <label className="text-sm text-gray-600 cursor-pointer">Any Discount</label>
                        </div>
                        {discountRanges.map(discount => (
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              name="discount"
                              checked={selectedDiscount === discount.toString()}
                              onChange={() => handleDiscount(discount.toString())}
                              className="mr-2"
                            />
                            <label className="text-sm text-gray-600 cursor-pointer">
                              {discount}% or more
                            </label>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>


                  {/* Rating */}
                  <div className="pb-4 mb-4">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleSection('rating')}
                    >
                      <h3 className="font-semibold text-[#151875] underline">Rating Item</h3>
                      {expandedSections.rating ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                    </div>
                    {expandedSections.rating && (
                      <div className="mt-3 space-y-2">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            name="rating"
                            checked={selectedRating === 0}
                            onChange={() => handleRating(0)}
                            className="mr-2"
                          />
                          <label className="text-sm text-gray-600 cursor-pointer">Any Rating</label>
                        </div>
                        {[4.5, 4, 3, 2, 1].map(rating => (
                          <div key={rating} className="flex items-center">
                            <input
                              type="checkbox"
                              name="rating"
                              checked={selectedRating === rating}
                              onChange={() => handleRating(rating)}
                              className="mr-2"
                            />
                            <label className="flex items-center text-sm text-gray-600 cursor-pointer">
                              <div className="flex mr-1">
                                {renderRatingStars(rating)}
                              </div>
                              <span className="ml-1">& Up</span>
                            </label>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>


                  {/* Category */}
                  <div className="pb-4 mb-4">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleSection('categories')}
                    >
                      <h3 className="font-semibold text-[#151875] underline">Categories</h3>
                      {expandedSections.categories ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                    </div>
                    {expandedSections.categories && (
                      <div className="mt-3 space-y-2">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            name="category"
                            checked={selectedCategory === ''}
                            onChange={() => handleCategory('')}
                            className="mr-2"
                          />
                          <label className="text-sm text-gray-600 cursor-pointer">All Categories</label>
                        </div>
                        {categories.map(category => (
                          <div key={category} className="flex items-center">
                            <input
                              type="checkbox"
                              name="category"
                              checked={selectedCategory === category}
                              onChange={() => handleCategory(category)}
                              className="mr-2"
                            />
                            <label className="text-sm text-gray-600 cursor-pointer capitalize">
                              {category}
                            </label>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>


                  {/* Price */}
                  <div className="pb-4 mb-4">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleSection('price')}
                    >
                      <h3 className="font-semibold text-[#151875] underline">Price</h3>
                      {expandedSections.price ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                    </div>
                    {expandedSections.price && (
                      <div className="mt-3 space-y-2">
                        {priceRanges.map(price => (
                          <div key={price.label} className="flex items-center">
                            <input
                              type="checkbox"
                              name="price"
                              checked={priceRange.low === price.value.low && priceRange.high === price.value.high}
                              onChange={() => handlePrice(price.value)}
                              className="mr-2"
                            />
                            <label className="text-sm text-gray-600 cursor-pointer">
                              {price.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>


                  {/* Color */}
                  <div className="pb-4">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleSection('color')}
                    >
                      <h3 className="font-semibold text-[#151875] underline">Color</h3>
                      {expandedSections.color ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                    </div>
                    {expandedSections.color && (
                      <div className="mt-3 space-y-2">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            name="color"
                            checked={selectedColor === ''}
                            onChange={() => handleColor('')}
                            className="mr-2"
                          />
                          <label className="text-sm text-gray-600 cursor-pointer">All Colors</label>
                        </div>
                        {colors.map(color => (
                          <div key={color} className="flex items-center">
                            <input
                              type="checkbox"
                              name="color"
                              checked={selectedColor === color}
                              onChange={() => handleColor(color)}
                              className="mr-2"
                            />
                            <label className="flex items-center text-sm text-gray-600 cursor-pointer capitalize">
                              <span
                                className={`w-4 h-4 rounded-full mr-2 border`}
                                style={{
                                  backgroundColor: color === 'natural' ? '#f5deb3' :
                                    color === 'walnut' ? '#773f1a' :
                                      color === 'oak' ? '#daa520' :
                                        color === 'teak' ? '#b8860b' :
                                          color === 'cherry' ? '#a52a2a' :
                                            color === 'clear' ? 'transparent' :
                                              color === 'multicolor' ? 'linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet)' : color
                                }}
                              ></span>
                              {color}
                            </label>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* All Products */}

            <div className="w-full lg:w-4/5">
              <div className="bg-white">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-[#151875]">
                    Showing {currentProducts.length} of {filterShow.length} products
                  </h2>
                  <div className="text-sm text-gray-600">
                    {selectedBrand && `Brand: ${selectedBrand} • `}
                    {selectedCategory && `Category: ${selectedCategory} • `}
                    {selectedRating > 0 && `Rating: ${selectedRating}+ • `}
                    {selectedDiscount && `Discount: ${selectedDiscount}%+ • `}
                    {selectedColor && `Color: ${selectedColor}`}
                  </div>
                </div>

                {/* changes */}

                {/*Grid */}
                {view === 'grid' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentProducts.map(item => (
                      <div key={item.id} className="p-4 hover:shadow-lg group hover:scale-105 duration-300 ease-in-out transition-all">
                        <div className="bg-gray-200 h-48 mb-4 rounded flex items-center justify-center">
                          <Link to={`/productdetails/${item.id}`} className='w-full h-full block'>
                            <img
                              src={item.thumbnail}
                              alt=""
                              className="h-full w-full object-cover rounded"
                            />
                          </Link>
                        </div>
                        <div className="flex justify-between items-center">
                          <h3 className="font-semibold text-[#151875] mb-2">{item.title}</h3>
                          <span className="text-sm text-gray-500 capitalize">{item.color}</span>
                        </div>
                        <div className="flex items-center mb-2">
                          <div className="flex text-yellow-400">
                            {renderRatingStars(item.rating)}
                          </div>
                          <span className="text-sm text-gray-600 ml-2">({item.rating})</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className='flex items-center gap-3'>
                            <div className="flex items-center gap-2">
                              <span className="text-lg font-bold text-[#111C85]">${discountPrice(item)}</span>
                              <span className="text-lg font-bold line-through text-[#FF2AAA]">${item.price}</span>
                            </div>
                            {item.discountPercentage > 0 && (
                              <span className="text-sm text-green-600 ml-2 mt-1">
                                {item.discountPercentage}% off
                              </span>
                            )}
                          </div>
                          <div className="flex opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out flex-col gap-3">
                            <button className=" hover:bg-gray-100 rounded-full transition-colors"><SlHeart size={18} className="text-gray-600 hover:text-red-500" /></button>
                            <button className=" hover:bg-gray-100 rounded-full transition-colors"><GoZoomIn size={18} className="text-gray-600 hover:text-red-500" /></button>
                            <button onClick={() => dispatch(addToCart(item))} className=" hover:bg-gray-100 rounded-full transition-colors"><BsCart size={18} className="text-gray-600 cursor-pointer hover:text-red-500" /></button>
                          </div>
                        </div>
                        <div className="text-xs text-gray-500 mt-2">
                          {item.brand} • {item.category}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (

                  // List

                  <div className="space-y-6">
                    {currentProducts.map(item => (
                      <div key={item.id} className="flex p-6 hover:shadow-lg hover:scale-105 transition-all duration-200 group">
                        <div className="w-1/4 mr-6">
                          <div className="bg-gray-200 h-48 rounded flex items-center justify-center">
                            <Link to={`/productdetails/${item.id}`} className='block h-full w-full'>
                              <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="h-full w-full object-cover rounded"
                              />
                            </Link>
                          </div>
                        </div>

                        <div className="w-3/4">
                          <div className="flex justify-between items-start mb-3">
                            <h3 className="text-xl font-semibold text-[#111C85]">{item.title}</h3>
                            <span className="text-sm text-gray-500 capitalize bg-gray-100 px-2 py-1 rounded">{item.color}</span>
                          </div>

                          <div className="flex items-center mb-3">
                            <div className="flex text-yellow-400 mr-2">{renderRatingStars(item.rating)}</div>
                            <span className="text-sm text-gray-600">({item.rating}) • {item.brand} • {item.category}</span>
                          </div>

                          <p className="text-[#9295AA] mb-4 line-clamp-2">{item.description}</p>

                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center gap-2">
                                <span className="text-lg font-bold text-[#111C85]">${discountPrice(item)}</span>
                                <span className="text-lg font-bold line-through text-[#FF2AAA]">${item.price}</span>
                              </div>
                              {item.discountPercentage > 0 && (
                                <span className="text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full">
                                  {item.discountPercentage}% OFF
                                </span>
                              )}
                              <span className="text-sm text-gray-500">SKU: {item.sku}</span>
                            </div>

                            {/* buttons */}
                            <div className="flex opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out space-x-4">
                              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                <SlHeart size={18} className="text-gray-600 hover:text-red-500" />
                              </button>
                              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                <GoZoomIn size={18} className="text-gray-600 hover:text-blue-500" />
                              </button>
                              <button onClick={() => dispatch(addToCart(item))} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                <BsCart size={18} className="text-gray-600 cursor-pointer hover:text-green-500" />
                              </button>
                            </div>
                          </div>

                          {/* Extra */}
                          <div className="flex space-x-6 mt-4 text-xs text-gray-500">
                            <span>🛒 {item.stock} in stock</span>
                            <span>🚚 {item.shippingInformation}</span>
                            <span>📦 {item.returnPolicy}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                )}

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center space-x-2 mt-8">

                    <button
                      onClick={prevPage}
                      disabled={currentPage === 1}
                      className={`px-3 py-1 rounded border ${currentPage === 1
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-blue-600 hover:bg-blue-50'
                        }`}
                    >
                      Previous
                    </button>

                    {[...Array(totalPages)].map((_, index) => {
                      const pageNumber = index + 1;
                      return (
                        <button
                          key={pageNumber}
                          onClick={() => paginate(pageNumber)}
                          className={`px-3 py-1 rounded border ${currentPage === pageNumber
                            ? 'bg-blue-600 text-white'
                            : 'bg-white text-blue-600 hover:bg-blue-50'
                            }`}
                        >
                          {pageNumber}
                        </button>
                      );
                    })}


                    <button
                      onClick={nextPage}
                      disabled={currentPage === totalPages}
                      className={`px-3 py-1 rounded border ${currentPage === totalPages
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-blue-600 hover:bg-blue-50'
                        }`}
                    >
                      Next
                    </button>

                    <span className="text-sm text-gray-600 ml-4">
                      Page {currentPage} of {totalPages}
                    </span>
                  </div>
                )}



                {filterShow.length === 0 && (
                  <div className="text-center text-gray-500 py-12">
                    <p className="text-lg">No products found matching your filters</p>
                    <button
                      onClick={clearAllFilters}
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