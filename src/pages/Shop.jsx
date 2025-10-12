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

const Shop = () => {

    let [view, setView] = useState('grid');
    let data = useContext(ApiData);
    let [info, setInfo] = useState([]);
    let [filterShow, setFilterShow] = useState([]);
    let dispatch = useDispatch()
    let [currentPage, setCurrentPage] = useState(1);
    let [productsPerPage, setProductsPerPage] = useState(9);
    let [sortBy, setSortBy] = useState('newest');

    useEffect(() => {
        if (data && data.products) {
            setInfo(data.products);
            setFilterShow(data.products);
        }
    }, [data]);

    let discountPrice = (product) => {
        if (!product) return 0;
        let discount = (product.price * product.discountPercentage) / 100;
        return (product.price - discount).toFixed(2);
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
                return sorted;
        }
    };

    useEffect(() => {
        setCurrentPage(1);
    }, [sortBy, productsPerPage]);

    let indexOfLastProduct = currentPage * productsPerPage;
    const sortedProducts = sortProducts(filterShow);
    let indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    let currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    let totalPages = Math.ceil(filterShow.length / productsPerPage);

    let paginate = (pageNumber) => setCurrentPage(pageNumber);
    let nextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
    let prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

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
                <h2 className='text-[#101750] text-[36px] font-semibold'>Shop list</h2>
                <div className="">
                    <h2><Link to="/">Home</Link>.Pages.<Link to="/allproduct">Products</Link></h2>
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
                                    <option value={12}>12</option>
                                    <option value={20}>20</option>
                                    <option value={32}>32</option>
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

                        {/* All Products - Full width */}
                        <div className="w-full">
                            <div className="bg-white">

                                {/*Grid - 4 columns full width */}
                                {view === 'grid' ? (
                                    <div className="grid grid-cols-4 gap-6">
                                        {currentProducts.map(item => (
                                            <div key={item.id} className="p-4 hover:shadow-lg group hover:scale-105 duration-300 ease-in-out transition-all">
                                                <div className="bg-gray-200 h-64 mb-4 rounded flex items-center justify-center">
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

                                    // List view
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
                                        <p className="text-lg">No products found</p>
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

export default Shop