import React from 'react'
import Container from '../component/Container'
import { useDispatch, useSelector } from 'react-redux'
import { PiSmileySadLight } from 'react-icons/pi'
import { Link, useNavigate } from 'react-router-dom'
import { decrement, increment, productRemove } from '../component/slice/productSlice'

const Cart = () => {
    let dispatch = useDispatch();
    let data = useSelector((state) => state.product.cartItem)
    //    console.log(data);
    let handleIncrement = (i) => {
        dispatch(increment(i));
    };

    let handleDecrement = (i) => {
        dispatch(decrement(i));
    };

    let handleRemove = (i) => {
        dispatch(productRemove(i));
    };

    let { totalPrice, totalQuantity } = data.reduce((acc, item) => {
        acc.totalPrice += item.price * item.quantity;
        acc.totalQuantity += item.quantity;
        return acc;
    }, { totalPrice: 0, totalQuantity: 0 });

    let shipping = totalPrice > 0 ? 15.00 : 0;
    let tax = totalPrice > 0 ? (totalPrice * 0.07) : 0;
    let finalTotal = totalPrice + shipping + tax;

    return (
        <Container>
            <div className="mt-[80px]">

                {data.length > 0 ? (
                    <>
                        <div className="min-h-screen py-8 font-josefin">
                            <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {/* Left Column - Cart Items */}
                                <div className="lg:col-span-2 bg-white">
                                    {/* Table Header */}
                                    <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 font-semibold text-gray-700">
                                        <div className="col-span-4">Product</div>
                                        <div className="col-span-2 text-center">Price</div>
                                        <div className="col-span-3 text-center">Quantity</div>
                                        <div className="col-span-2 text-center">Total</div>
                                        <div className="col-span-1 text-center"></div>
                                    </div>

                                    {/* Cart */}

                                    {data.map((item, i) => (
                                        <div className="divide-y">
                                            <div className="grid grid-cols-12 gap-4 items-center px-6 py-4">
                                                <div className="col-span-4 flex items-center gap-4">
                                                    <img
                                                        src={item.thumbnail}
                                                        alt="Product"
                                                        className="w-20 h-20 object-cover rounded-sm"
                                                    />
                                                    <div>
                                                        <h3 className="font-semibold text-gray-800">{item.title}</h3>
                                                        <p className="text-sm text-gray-500">{item.category}</p>
                                                    </div>
                                                </div>
                                                <div className="col-span-2 text-center text-gray-600">${item.price}</div>
                                                <div className="col-span-3 flex justify-center">
                                                    <div className="flex items-center bg-blue-50 rounded-lg overflow-hidden">
                                                        <button onClick={() => handleDecrement(i)} className="px-4 py-2 text-blue-600 hover:bg-blue-100 transition-colors">-</button>
                                                        <span className="px-4 py-2 bg-white border-x border-blue-200">{item.quantity}</span>
                                                        <button onClick={() => handleIncrement(i)} className="px-4 py-2 text-blue-600 hover:bg-blue-100 transition-colors">+</button>
                                                    </div>
                                                </div>
                                                <div className="col-span-2 text-center font-semibold text-gray-800 flex items-center justify-center gap-2">
                                                    ${(item.price * item.quantity).toFixed(2)}
                                                </div>
                                                <div className="col-span-1">
                                                    <button onClick={() => handleRemove(i)} className="ml-6 text-red-500 hover:text-red-700 transition-colors">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}


                                    <div className="items-center px-6 py-4 border-t">
                                        <div className="flex justify-between">
                                            <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                                                Update Cart
                                            </button>
                                            <button
                                                onClick={() => {
                                                    data.forEach((_, index) => dispatch(productRemove(0)));
                                                }}
                                                disabled={data.length === 0}
                                                className={`px-6 py-2 rounded-lg transition-colors ${data.length === 0
                                                        ? 'bg-gray-400 cursor-not-allowed'
                                                        : 'bg-red-600 hover:bg-red-700 text-white'
                                                    }`}
                                            >
                                                Clear Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>


                                <div className="space-y-6">
                                    <div className="bg-gray-50 p-6">
                                        <h2 className="text-xl font-bold text-gray-800 mb-4">Cart Total</h2>
                                        <div className="space-y-3 mb-6">
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
                                            <div className="border-t pt-3">
                                                <div className="flex justify-between text-lg font-bold text-gray-800">
                                                    <span>Total:</span>
                                                    <span>${finalTotal.toFixed(2)}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                                            Proceed to Checkout
                                        </button>
                                    </div>


                                    <div className="bg-gray-50 p-6">
                                        <h2 className="text-xl font-bold text-gray-800 mb-4">Calculate Shipping</h2>

                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                                                <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                    <option>Bangladesh</option>
                                                    <option>Canada</option>
                                                    <option>United Kingdom</option>
                                                </select>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                                                    <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                        <option>Dhaka</option>
                                                        <option>Sylhet</option>
                                                        <option>Chittagong</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code</label>
                                                    <input
                                                        type="text"
                                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                        placeholder="12345"
                                                    />
                                                </div>
                                            </div>

                                            <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                                                Calculate Shipping
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="max-w-[300px] mx-auto mt-[200px] pb-[100px]">
                        <div className="flex items-center gap-2">
                            <p className="text-[24px]">No data found </p>
                            <PiSmileySadLight className='text-[30px]' />
                        </div>
                        <Link to="/allproduct"><button className='ml-6 mt-6 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700'><a href="#">Back to Shop</a></button></Link>
                    </div>
                )}
            </div>
        </Container>
    )
}

export default Cart