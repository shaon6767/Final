import React, { useContext } from 'react'
import Container from '../component/Container'
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { FaStar, FaStarHalfAlt, FaRegStar, FaShoppingCart, FaArrowLeft } from 'react-icons/fa';
import { ApiData } from '../component/ContextApi';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { addToCart } from '../component/slice/productSlice';


const ProductDetails = () => {

    let productId = useParams();
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let data = useContext(ApiData);

    let [singleProduct, setSingleProduct] = useState();
    let [loading, setLoading] = useState(true);
    let [selectedImage, setSelectedImage] = useState(0);
    let [activeSection, setActiveSection] = useState('reviews');

    useEffect(() => {
        if (data && data.products && data.products.length > 0) {
            if (data.products.length === 0) {
                return;
            }
            let product = data.products.find(item => item.id == productId.id);
            setSingleProduct(product);
            setLoading(false);
        }
    }, [data, productId.id]);


    let discountPrice = () => {
        if (!singleProduct) return 0;
        let discount = (singleProduct.price * singleProduct.discountPercentage) / 100;
        return (singleProduct.price - discount).toFixed(2);
    };


    let renderRatingStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => {
            let number = index + 0.5;
            return (
                rating > index + 1
                    ? <FaStar className='text-yellow-400' key={index} />
                    : rating > number
                        ? <FaStarHalfAlt className='text-yellow-400' key={index} />
                        : <FaRegStar className='text-yellow-400' key={index} />
            );
        });
    }

    let handleCart = (item) => {
        dispatch(addToCart(item))
        toast("Your product has added");
        setTimeout(() => {
            navigate("/cart")
        }, 1500)
    }

    return (
        <Container>
            <div className="">
                <div className="mt-[40px] py-[40px]">
                    <h2 className='text-[#101750] text-[36px] font-semibold'>Product Details</h2>
                    <div className="">
                         <h2 className='text-[#0D134E]'><Link to="/"><span className='text-[#0D134E] hover:text-[#FB2E86]'>Home</span></Link>.Pages.<Link to="/allproduct"><span className='text-[#0D134E] hover:text-[#FB2E86]'>Shop</span></Link></h2>
                    </div>

                </div>
                {loading ? (
                    <div className="min-h-screen flex items-center justify-center">
                        <div className="text-center">
                            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
                            <p className="mt-4 text-gray-600">Loading product details...</p>
                        </div>
                    </div>
                ) : !singleProduct ? (
                    <div className="min-h-screen flex items-center justify-center">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-gray-800">Product not found</h2>
                            <button
                                onClick={() => navigate(-1)}
                                className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                            >
                                Go Back
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="min-h-screen py-8 font-josefin">
                        <Link to="/allproduct">
                        
                        <button
                        
                            className="flex items-center gap-2 text-gray-600 hover:text-[#FB2E86] cursor-pointer mb-6 transition-colors"
                        >
                            <FaArrowLeft />
                            <span>Back to Products</span>
                        </button>
                        </Link>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div className="space-y-4">
                                {/* Main image */}
                                <div className="flex items-center justify-center h-96">
                                    <img
                                        src={singleProduct.images?.[selectedImage] || singleProduct.thumbnail}
                                        alt={singleProduct.title}
                                        className="mt-[80px] h-[450px] w-[500px] object-cover rounded-lg"
                                    />
                                </div>
                            </div>

                            {/* Productdetails*/}
                            <div className="space-y-6">
                                <div>
                                    <h1 className="text-3xl font-bold text-[#0D134E] mb-2">{singleProduct.title}</h1>
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="flex items-center gap-2">
                                            <div className="flex text-yellow-400">
                                                {renderRatingStars(singleProduct.rating)}
                                            </div>
                                            <span className="text-sm text-gray-600">({singleProduct.rating})</span>
                                        </div>
                                        <span className="text-sm text-gray-500">•</span>
                                        <span className="text-sm text-green-600">{singleProduct.stock} in stock</span>
                                    </div>
                                </div>

                                {/* Price*/}
                                <div className="space-y-2">
                                    {singleProduct.discountPercentage > 0 ? (
                                        <div className="flex items-center gap-4">
                                            <span className="text-3xl font-bold text-blue-600">${discountPrice()}</span>
                                            <span className="text-xl text-[#FB2E86] line-through">${singleProduct.price}</span>
                                            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
                                                {singleProduct.discountPercentage}% OFF
                                            </span>
                                        </div>
                                    ) : (
                                        <span className="text-3xl font-bold text-blue-600">${singleProduct.price}</span>
                                    )}
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
                                    <p className="text-gray-600 leading-relaxed">{singleProduct.description}</p>
                                </div>

                                {/* Product details */}
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <span className="font-semibold text-gray-700">Brand:</span>
                                        <span className="ml-2 text-gray-600">{singleProduct.brand}</span>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-gray-700">Category:</span>
                                        <span className="ml-2 text-gray-600 capitalize">{singleProduct.category}</span>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-gray-700">SKU:</span>
                                        <span className="ml-2 text-gray-600">{singleProduct.sku}</span>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-gray-700">Weight:</span>
                                        <span className="ml-2 text-gray-600">{singleProduct.weight} kg</span>
                                    </div>
                                </div>

                                {/* Quantity*/}
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <button onClick={() => handleCart(singleProduct)} className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center gap-2">
                                            <FaShoppingCart />
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                                <ToastContainer />

                                {/* Additional info */}
                                <div className="pt-4 space-y-3 text-sm text-gray-600">
                                    <div className="flex justify-between">
                                        <span>Shipping:</span>
                                        <span>{singleProduct.shippingInformation}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Warranty:</span>
                                        <span>{singleProduct.warrantyInformation}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Return Policy:</span>
                                        <span>{singleProduct.returnPolicy}</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Information */}
                        <div className="mt-16">
                            <div className="flex border-b border-gray-200">
                                {['description', 'additional', 'reviews'].map((section) => (
                                    <button
                                        key={section}
                                        onClick={() => setActiveSection(section)}
                                        className={`px-6 py-3 font-semibold transition-colors ${activeSection === section
                                            ? 'text-blue-600 border-b-2 border-blue-600'
                                            : 'text-gray-500 hover:text-gray-700'
                                            }`}
                                    >
                                        {section === 'description' && 'Description'}
                                        {section === 'additional' && 'Additional Info'}
                                        {section === 'reviews' && `Reviews (${singleProduct.reviews?.length || 0})`}
                                    </button>
                                ))}
                            </div>


                            <div className="py-6">
                                {activeSection === 'description' && (
                                    <div className="prose max-w-none">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">Varius tempor.</h3>
                                        <div className="text-gray-600 leading-relaxed">
                                            <p>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>

                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-4 mt-4">More details</h3>
                                        <div className="text-gray-600 space-y-2 leading-relaxed">
                                            <p className='flex gap-2 items-center'><span><FaArrowRightLong /></span>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>

                                            <p className='flex gap-2 items-center'><span><FaArrowRightLong /></span>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>

                                            <p className='flex gap-2 items-center'><span><FaArrowRightLong /></span>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>

                                            <p className='flex gap-2 items-center'><span><FaArrowRightLong /></span>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>


                                        </div>
                                    </div>
                                )}


                                {activeSection === 'additional' && (
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">Additional Information</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="flex gap-8 py-3">
                                                <span className="font-semibold text-gray-700">Brand:</span>
                                                <span className="text-gray-600">{singleProduct.brand}</span>
                                            </div>
                                            <div className="flex gap-8 py-3">
                                                <span className="font-semibold text-gray-700">Category:</span>
                                                <span className="text-gray-600 capitalize">{singleProduct.category}</span>
                                            </div>
                                            <div className="flex gap-8 py-3">
                                                <span className="font-semibold text-gray-700">SKU:</span>
                                                <span className="text-gray-600">{singleProduct.sku}</span>
                                            </div>
                                            <div className="flex gap-8 py-3">
                                                <span className="font-semibold text-gray-700">Weight:</span>
                                                <span className="text-gray-600">{singleProduct.weight} kg</span>
                                            </div>
                                        </div>
                                    </div>
                                )}


                                {activeSection === 'reviews' && (
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                                            Reviews ({singleProduct.reviews?.length || 0})
                                        </h3>
                                        {singleProduct.reviews && singleProduct.reviews.length > 0 ? (
                                            <div className="space-y-6">
                                                {singleProduct.reviews.map((review, index) => (
                                                    <div key={index} className="pb-6">
                                                        <div className="flex items-center gap-4 mb-3">
                                                            <div className="flex text-yellow-400">
                                                                {renderRatingStars(review.rating)}
                                                            </div>
                                                            <span className="font-semibold text-gray-800">{review.reviewerName}</span>
                                                            <span className="text-sm text-gray-500">
                                                                {new Date(review.date).toLocaleDateString()}
                                                            </span>
                                                        </div>
                                                        <p className="text-gray-600">{review.comment}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <p className="text-gray-500">No reviews yet.</p>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Related products */}
                        <div className="mt-16">
                            <h2 className="text-2xl font-bold text-[#0D134E] mb-6">Related Products</h2>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                {data.products
                                    .filter(product =>
                                        product.category === singleProduct.category &&
                                        product.id !== singleProduct.id
                                    )
                                    .slice(0, 4)
                                    .map(relatedProduct => (
                                        <div
                                            key={relatedProduct.id}
                                            className="rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer"
                                            onClick={() => {
                                                navigate(`/productdetails/${relatedProduct.id}`);
                                                window.scrollTo(0, 0);
                                            }}
                                        >
                                            <img
                                                src={relatedProduct.thumbnail}
                                                alt={relatedProduct.title}
                                                className="w-full h-48 object-cover rounded-md mb-4"
                                            />
                                            <h3 className="font-semibold text-[#0D134E]  mb-2">{relatedProduct.title}</h3>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-5">
                                                    <span className="text-[#0D134E] font-bold">${relatedProduct.price}</span>
                                                    <span className="text-sm line-through text-[#FB2E86]">${discountPrice()}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <FaStar className="text-yellow-400" />
                                                    <span className="text-sm text-gray-600">{relatedProduct.rating}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>

                    </div>
                )}
            </div>
        </Container>
    )
}

export default ProductDetails