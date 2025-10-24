import React, { useEffect } from 'react'
import Container from '../component/Container'
import { initFlowbite } from 'flowbite';


const Contact = () => {
      useEffect(() => {
          initFlowbite();
      }, []);

  return (

    <Container>
      <div className="">
        <section class="bg-white">
          <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 class="mb-4 text-4xl tracking-tight font-bold text-center text-black">Contact Us</h2>
            <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-700 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
            <form action="#" class="space-y-8">
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-black">Name</label>
                <input type="email" id="email" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="Your Name" required />
              </div>
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-black">Email</label>
                <input type="email" id="email" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="Your Email" required />
              </div>

              <div class="sm:col-span-2">
                <label for="message" class="block mb-2 text-sm font-medium text-black dark:text-gray-400">Your message</label>
                <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-black" placeholder="Leave a comment..."></textarea>
              </div>
              <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700"><a href="#">Send message</a></button>
            </form>
          </div>
        </section>
      </div>
    </Container>
  )
}

export default Contact