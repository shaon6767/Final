import React, { useContext, useEffect, useState } from 'react'
import Container from '../component/Container'
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { FaStar, FaStarHalfAlt, FaRegStar, FaShoppingCart, FaArrowLeft, FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { addToCart } from '../component/slice/productSlice';
import com from "../assets/company.png"
import { ApiData } from '../component/ContextApi';
import { initFlowbite } from 'flowbite';

const ProductDetails = () => {
    let info = useContext(ApiData);
    let productId = useParams();
    let dispatch = useDispatch();
    let navigate = useNavigate();

    let [singleProduct, setSingleProduct] = useState([]);
    let [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        if (info.products.length > 0) {
            let product = info.products.find(item => item.id == productId.id);
            setSingleProduct(product);
        }
    }, [info, productId.id]);

    useEffect(() => {
        if (singleProduct.id && info.products) {
            let related = info.products.filter(product =>
                product.category == singleProduct.category &&
                product.id !== singleProduct.id
            ).slice(0, 4);
            setRelatedProducts(related);
        }
    }, [singleProduct, info]);

    let discountPrice = () => {
        let discount = (singleProduct.price * singleProduct.discountPercentage) / 100;
        return (singleProduct.price - discount).toFixed(2);
    };

    let clientRating = Array.from({ length: 5 }, (_, index) => {
        let number = index + 0.5;
        return (
            singleProduct.rating > index + 1
                ? <FaStar className='text-yellow-400' key={index} />
                : singleProduct.rating > number
                    ? <FaStarHalfAlt className='text-yellow-400' key={index} />
                    : <FaRegStar className='text-yellow-400' key={index} />
        );
    });

    let handleCart = (item) => {
        dispatch(addToCart({ ...item, quantity: 1 }))
        toast("Your product has been added!");
        setTimeout(() => navigate("/cart"), 1500)
    }

    useEffect(() => {
        initFlowbite();
    }, []);

    return (
        <Container>
            <div className="mt-[40px] py-[40px]">
                <h2 className='text-[#101750] text-[36px] font-semibold'>Product Details</h2>
                <h2 className='text-[#0D134E]'>
                    <Link to="/"><span className='hover:text-[#FB2E86]'>Home</span></Link>.Pages.
                    <Link to="/allproduct"><span className='hover:text-[#FB2E86]'>Products</span></Link>
                </h2>
            </div>

            <div className="min-h-screen py-8 font-josefin">
                <Link to="/allproduct">
                    <button className="flex items-center gap-2 text-gray-600 hover:text-[#FB2E86] cursor-pointer mb-6">
                        <FaArrowLeft />Back to Products
                    </button>
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <img src={singleProduct.thumbnail} alt={singleProduct.title} className="h-[400px] w-[450px] object-cover rounded-lg" />
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl font-bold text-[#0D134E] mb-2">{singleProduct.title}</h1>
                            <div className="flex items-center gap-2">
                                <div className="flex text-yellow-400">{clientRating}</div>
                                <span className="text-sm text-gray-600">({singleProduct.rating})</span>
                            </div>
                        </div>

                        <div>
                            {singleProduct.discountPercentage > 0 ? (
                                <div className="flex items-center gap-4">
                                    <span className="text-3xl font-bold text-blue-600">${discountPrice()}</span>
                                    <span className="text-xl text-[#FB2E86] line-through">${singleProduct.price}</span>
                                </div>
                            ) : (
                                <span className="text-3xl font-bold text-blue-600">${singleProduct.price}</span>
                            )}
                           <div className="mt-4 space-y-1">
                             <h2 className="text-gray-600 capitalize"><span className='text-pink-500 text-[18px] font-semibold'>Color: </span> {singleProduct.color}</h2>
                            <h2 className="text-gray-600 capitalize"><span className='text-pink-500 text-[18px] font-semibold'>Category: </span>{singleProduct.category}</h2>
                            <h2 className="text-gray-600 capitalize"><span className='text-pink-500 text-[18px] font-semibold'>Tag: </span><span>{singleProduct.tags}</span></h2>
                           </div>

                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
                            <p className="text-gray-600">{singleProduct.description}</p>
                        </div>

                        <button onClick={() => handleCart(singleProduct)} className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-800 transition-all duration-300 ease-in-out cursor-pointer font-semibold flex items-center justify-center  w-full  gap-2">
                            <FaShoppingCart />Add to Cart
                        </button>

                        <ToastContainer />

                        <div className="flex items-center gap-2">
                            <h2>Share:</h2>
                            <div className="flex gap-3">
                                <FaFacebook className='text-blue-700 cursor-pointer' />
                                <FaXTwitter className='text-black cursor-pointer' />
                                <FaInstagram className='text-red-500 cursor-pointer' />
                            </div>
                        </div>
                    </div>
                </div>


                {/* Accordions */}

                <div className="mt-10">
                    <div id="accordion-collapse" data-accordion="collapse">
                        <h2 id="accordion-collapse-heading-1">
                            <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black border-1 border-gray-300 gap-3 aria-expanded:bg-white aria-expanded:text-black" data-accordion-target="#accordion-collapse-body-1" aria-expanded="false" aria-controls="accordion-collapse-body-1">
                                <p>Additional Info</p>
                                <svg data-accordion-icon className="w-3 h-3 shrink-0" aria-hidden="true" xmlns="#" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
                            <div class="p-5 border-1 border-gray-300">
                                <p className="mb-2 text-gray-500"><span className='text-[16px] font-semibold'>Rating:</span>  {singleProduct.rating}</p>
                                <p className="mb-2 text-gray-500"><span className='text-[16px] font-semibold'>Weight:</span> {singleProduct.weight}</p>
                                <p className="mb-2 text-gray-500"><span className='text-[16px] font-semibold'>SKU:</span>  {singleProduct.sku}</p>
                                <p className="mb-2 text-gray-500"><span className='text-[16px] font-semibold'>Warranty:</span>  {singleProduct.warrantyInformation}</p>
                                <p className="mb-2 text-gray-500"><span className='text-[16px] font-semibold'>Shipping:</span>  {singleProduct.shippingInformation}</p>
                                <p className="mb-2 text-gray-500"><span className='text-[16px] font-semibold'>Policy:</span>  {singleProduct.returnPolicy}</p>
                                <p className="mb-2 text-gray-500"><span className='text-[16px] font-semibold'>in Stock:</span>  {singleProduct.stock}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-1">
                    <div id="accordion-collapse-2" data-accordion="collapse">
                        <h2 id="accordion-collapse-heading-2">
                            <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black border-1 border-gray-300 gap-3 aria-expanded:bg-white aria-expanded:text-black" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                                <p>Description</p>
                                <svg data-accordion-icon className="w-3 h-3 shrink-0" aria-hidden="true" xmlns="#" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
                            <div class="p-5 border-1 border-gray-300">
                                <h2 className='text-[18px] font-semibold text-blue-700 mb-3'>Description</h2>
                                <p className="mb-2 text-gray-500">{singleProduct.description}</p>

                                <h2 className='text-[18px] mt-4 font-semibold text-blue-700 mb-3'>What customers say</h2>

                                {singleProduct.reviews && singleProduct.reviews.map((review, index) => (
                                    <>
                                        <div key={index} className="">
                                            <p className=' text-pink-600 text-[18px] mb-3'>{review.comment}</p>
                                            <p className='text-pink-600'>{review.reviewerName}</p>
                                            <p className='text-pink-600'>{review.reviewerEmail}</p>
                                            <p className='text-pink-600'>{review.date}</p>
                                        </div>
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


                <div className="mt-16">
                    <h2 className="text-2xl font-bold text-[#0D134E] mb-6">Related Products</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {relatedProducts.map(relatedProduct => (
                            <div key={relatedProduct.id} className="rounded-lg p-4 hover:shadow-lg cursor-pointer" onClick={() => navigate(`/productdetails/${relatedProduct.id}`)}>
                                <img src={relatedProduct.thumbnail} alt={relatedProduct.title} className="w-full h-48 object-cover rounded-md mb-4" />
                                <h3 className="font-semibold text-[#0D134E] mb-2">{relatedProduct.title}</h3>
                                <div className="flex justify-between items-center">
                                    <span className="text-[#0D134E] font-bold">${relatedProduct.price}</span>
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

            <div className="mt-8 flex justify-center cursor-pointer">
                <img src={com} alt="" />
            </div>
        </Container>
    )
}

export default ProductDetails