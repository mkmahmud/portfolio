import React from 'react';
import { Link } from 'react-router-dom';
// import hero from '../../../Assetes/hero.svg';
import bg from '../../../Assetes/bg.png'
// import image from '../../../Assetes/image.jpg'
import image from '../../../Assetes/image2.png'
import ResumeButton from '../../../Componentes/Button/ResumeButton';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import './Hero.css'
import logo from '../../../Assetes/logo.png'

const Hero = () => {



    return (
        <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>

            <div className='md:h-[80vh] text-white px-20 py-10  md:flex items-center justify-between'>
                <MouseParallaxChild factorX={0.1} factorY={0.2}>
                    <div className="left">
                        <img src={image} className='image' alt="" />
                    </div>
                </MouseParallaxChild>
                <MouseParallaxChild factorX={0.1} factorY={0.2}>
                    <div className="right text-left">
                        <p className='text-[60px]  text-left text-white'>Hi there <br /> I am Mahmudul Hasan MK<br /> Full stack <span className='heroText'>developer</span></p>
                        <div className='my-10'>
                            <ResumeButton content='Download CV'></ResumeButton>
                        </div>
                    </div>
                </MouseParallaxChild>

            </div>
        </MouseParallaxContainer>

    );
};

export default Hero;