import React from 'react';
import { Link } from 'react-router-dom';
// import hero from '../../../Assetes/hero.svg';
import bg from '../../../Assetes/bg.png'
// import image from '../../../Assetes/image.jpg'
import image from '../../../Assetes/image2.png'
import ResumeButton from '../../../Componentes/Button/ResumeButton';

import './Hero.css'

const Hero = () => {



    return (
        <div className='md:h-[80vh] text-white px-20 py-10  md:flex items-center justify-between'

        >

            <div className="left">
                <img src={image} className='image' alt="" />
            </div>

            <div className="right text-left">
                <p className='text-[60px]  text-left text-white'>Hi there <br /> I am Mahmudul Hasan MK<br /> Full stack <span className='heroText'>developer</span></p>
                <div className='my-10'>
                    <ResumeButton content='Download CV'></ResumeButton>
                </div>
            </div>


        </div>
    );
};

export default Hero;