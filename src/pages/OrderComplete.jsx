import React from 'react'
import Container from '../component/Container'
import { FaCheckCircle, FaSmileBeam } from 'react-icons/fa'

const OrderComplete = () => {
    return (
        <Container>
            <div className="mt-20">
                <div className="max-h-screen py-12 font-josefin">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="flex justify-center mb-6">
                            <FaCheckCircle className="text-[#FF1788] text-6xl" />
                        </div>


                        <h1 className="text-3xl font-bold text-[#101750] mb-4">Your Order Is Completed! </h1>
                        <p className="text-gray-600 text-lg mb-2">Thank you for your order! Your order is being processed and will be completed within 3-6
                            hours. You will receive an email confirmation when your order is completed.
                        </p>

                        <div className="flex mt-6 gap-4 justify-center">
                            <button className="flex items-center gap-2 text-white rounded-sm bg-[#FF1788] px-6 py-3 cursor-pointer transition-colors">
                                Continue Shopping
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default OrderComplete