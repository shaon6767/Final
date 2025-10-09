import React from 'react'
import Container from '../component/Container'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';

const Checkout = () => {
    let navigate = useNavigate()
    let data = useSelector((state) => state.product.cartItem)

    let handleOrder = () => {
        toast("Your Order is Successfull");
        setTimeout(() => {
            navigate("/ordercomplete")
        }, 1500)
    }



    let { totalPrice } = data.reduce((acc, item) => {
        acc.totalPrice += item.price * item.quantity;
        return acc;
    }, { totalPrice: 0 });

    let shipping = totalPrice > 0 ? 15.00 : 0;
    let tax = totalPrice > 0 ? (totalPrice * 0.07) : 0;
    let finalTotal = totalPrice + shipping + tax;
    return (
        <Container>
            <div className="">
                <div className="min-h-screen py-8 font-josefin">
                    <h1 className="text-3xl font-bold text-[#0D134E] mb-2 mt-12">Checkout</h1>
                    <h2 className='mb-16 text-[#0D134E]'><Link to="/"><span className='text-[#0D134E] hover:text-[#FB2E86]'>Home</span></Link>.Pages.<Link to="/allproduct"><span className='text-[#0D134E] hover:text-[#FB2E86]'>Shop</span></Link></h2>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                        <div className="lg:col-span-3 space-y-6">
                            {/* Contact*/}
                            <div className="bg-white p-6">
                                <h2 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                        <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                        <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                        <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                        <input type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    </div>
                                </div>
                            </div>

                            {/*Address */}
                            <div className="bg-white p-6">
                                <h2 className="text-xl font-bold text-gray-800 mb-4">Shipping Address</h2>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                                        <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                                            <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code</label>
                                            <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                                            <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                <option>Bangladesh</option>
                                                <option>Canada</option>
                                                <option>United Kingdom</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                                            <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                <option>Dhaka</option>
                                                <option>Sylhet</option>
                                                <option>Chittagong</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Payment*/}
                            <div className="bg-white p-6">
                                <h2 className="text-xl font-bold text-[#0D134E] mb-4">Payment Method</h2>
                                <div className="space-y-3">
                                    <label className="flex items-center gap-3">
                                        <input type="radio" name="payment" className="text-[#FB2E86]" />
                                        <span>Cash on Delivery</span>
                                    </label>
                                    <label className="flex items-center gap-3">
                                        <input type="radio" name="payment" className="text-[#FB2E86]" />
                                        <span>PayPal</span>
                                    </label>
                                    <label className="flex items-center gap-3">
                                        <input type="radio" name="payment" className="text-[#FB2E86]" />
                                        <span>Credit Card</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-2">
                            <div className="bg-gray-50 p-6 mt-8">
                                <h2 className="text-xl font-bold text-[#0D134E] mb-4">Order Summary</h2>

                                {/* Info*/}
                                <div className="space-y-4 mb-6 max-h-80 overflow-y-auto">
                                    {data.map((item, i) => (

                                        <div className="flex items-center gap-3 pb-4 border-b border-b-[#c9bbbb]">
                                            <img
                                                src={item.thumbnail}
                                                alt="Product"
                                                className="w-20 h-20 object-cover rounded-sm"
                                            />
                                            <div className="flex-1">
                                                <h4 className="text-sm font-semibold text-[#0D134E]">{item.title}</h4>
                                                <p className="text-xs text-gray-500">Qty:{item.quantity}</p>
                                            </div>
                                            <span className="font-semibold text-[#0D134E]">${item.price}</span>
                                        </div>
                                    ))}

                                </div>

                                {/* Order Totals */}
                                <div className="space-y-3 pt-4">
                                    <div className="flex justify-between text-gray-600">
                                        <span>Subtotal:</span>
                                        <span>${totalPrice.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Shipping:</span>
                                        <span>${shipping.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Tax:</span>
                                        <span>${tax.toFixed(2)}</span>
                                    </div>
                                    <div className="border-t border-t-[#c9bbbb] pt-3">
                                        <div className="flex justify-between text-lg font-bold text-gray-800">
                                            <span>Total:</span>
                                            <span>${finalTotal.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>

                                <button onClick={handleOrder} className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold mt-6">
                                    Place Order
                                </button>
                                 <ToastContainer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Checkout