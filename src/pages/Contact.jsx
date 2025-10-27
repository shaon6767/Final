import React, { useEffect } from 'react'
import Container from '../component/Container'
import { initFlowbite } from 'flowbite';
import con from "../assets/contactus.png"


const Contact = () => {
      useEffect(() => {
          initFlowbite();
      }, []);

  return (

    <Container>
      <div className=" mt-[100px] flex justify-between items-center">
        <section class="bg-white">
          <div class="py-8 lg:py-16 px-4 max-w-screen-md">
            <h2 class="mb-4 text-4xl tracking-tight font-bold text-center text-[#151875]">Get in Touch</h2>
            <p class="mb-8 lg:mb-16 w-[550px] font-light text-center text-[#151875]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
            <form action="#" class="space-y-8">
              <div>
                <label for="name" class="block mb-2 text-sm font-medium text-black">Name</label>
                <input type="name" id="name" class=" border border-gray-300 text-gray-900 text-sm block w-full p-2.5" placeholder="Your Name" required />
              </div>
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-black">Email</label>
                <input type="email" id="email" class=" border border-gray-300 text-gray-900 text-sm block w-full p-2.5" placeholder="Your Email" required />
              </div>

              <div class="sm:col-span-2">
                <label for="message" class="block mb-2 text-sm font-medium text-black ">Your message</label>
                <textarea id="message" rows="6" class="block border border-gray-300 p-2.5 w-full h-[250px] text-sm text-black" placeholder="Leave a comment..."></textarea>
              </div>
              <button type="submit" class="py-3 px-9 text-sm font-medium text-center text-white rounded-sm bg-[#FB2E86]"><a href="#">Send Mail</a></button>
            </form>
          </div>
        </section>
        <div className="">
          <img src={con} alt="" />
        </div>
      </div>
    </Container>
  )
}

export default Contact