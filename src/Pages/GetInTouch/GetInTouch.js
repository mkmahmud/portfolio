import React from 'react';
// import './GetInTouch.css'
import {  toast } from 'react-toastify';

const GetInTouch = () => {

    const notify = () => toast.success("We will reach out you soon.");

    const handelegtInTouch = (e) => {
        e.preventDefault();
        notify()
    }

    return (
        <div className='py-20'>

            <h2 className='text-[50px] font-bold sectionTitle'>Get In Touch</h2>
            <div class="container my-24 px-6 mx-auto">

                <section class="mb-32 text-center text-white">
                    <div class="max-w-[700px] mx-auto px-3 lg:px-6">
                        <form onSubmit={handelegtInTouch}>
                            <div class="form-group mb-6">
                                <input type="text" class="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-[#030f3e] bg-clip-padding
            border border-solid border-[#030f3e]
            rounded
            transition
            ease-in-out
            m-0
            focus:text-white focus:bg-[#030f3e] focus:border-[#030f3e] focus:outline-none" id="exampleInput7"
                                    placeholder="Name" />
                            </div>
                            <div class="form-group mb-6">
                                <input type="email" class="form-control block
         w-full
         px-3
         py-1.5
         text-base
         font-normal
         text-gray-700
         bg-[#030f3e] bg-clip-padding
         border border-solid border-[#030f3e]
         rounded
         transition
         ease-in-out
         m-0
         focus:text-white focus:bg-[#030f3e] focus:border-[#030f3e] focus:outline-none" id="exampleInput8"
                                    placeholder="Email address" />
                            </div>
                            <div class="form-group mb-6">
                                <textarea class="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-[#030f3e] bg-clip-padding
            border border-solid border-[#030f3e]
            rounded
            transition
            ease-in-out
            m-0
            focus:text-white focus:bg-[#030f3e] focus:border-[#030f3e] focus:outline-none
          " id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
                            </div>
                        
                            <button type="submit" class="
          w-full
          px-6
          py-2.5
          bg-[#B20600]
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-[#FF5F00] hover:shadow-lg
          focus:bg-[#FF5F00] focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-[#FF5F00] active:shadow-lg
          transition
          duration-150
          ease-in-out"  >Submit</button>
                        </form>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default GetInTouch;