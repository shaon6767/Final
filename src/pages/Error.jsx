import React from 'react'
import { Link } from 'react-router-dom'
import error from "../assets/error.png"

const Error = () => {
  return (
    <div className="">
       <section class="bg-white">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
            <h1 class=" text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 text-[blue] dark:text-primary-500">404</h1>
            <p class=" text-3xl tracking-tight font-bold md:text-4x text-[black] py-5">Whoops! That page doesn’t exist.</p>
           <img src={error} alt="" />
           <Link to = "/">
            <a href="" class="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-sm text-sm px-8 py-2.5 text-center dark:focus:ring-primary-900 my-4 bg-pink-600">Back to Home</a></Link>
        </div>   
    </div>
</section>
</div>
  )
}

export default Error