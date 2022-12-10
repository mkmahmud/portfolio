import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../../../Assetes/hero.svg';
// import image from '../../../Assetes/image.jpg'
import image from '../../../Assetes/image2.png'
import './Hero.css'

const Hero = () => {



    return (
        <div className='md:h-[80vh] text-white px-20 py-10  md:flex items-center justify-between'
            style={{
                backgroundImage: `url(${hero})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',

            }}
        >

            <div className="left">
                <img src={image} className='image' alt="" />
            </div>

            <div className="right text-left">
                <p className='text-[60px]  text-left text-white'>Hi there <br /> I am Full stack <span className='heroText'>developer</span></p>
                <button type="button" class=" my-5 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"><Link>Download CV</Link></button>
            </div>


        </div>
    );
};

export default Hero;