import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import hero from '../../../Assetes/hero.svg';
import bg from '../../../Assetes/bg.png'
// import image from '../../../Assetes/image.jpg'
import image from '../../../Assetes/image2.png'
import ResumeButton from '../../../Componentes/Button/ResumeButton';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import './Hero.css'
import logo from '../../../Assetes/logo.png'
import myresume from '../../../Assetes/mahmud-resume.pdf'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {

    const [myfacts, setFacts] = useState()

    const facts = ['The first programmer was the daughter of a mad poet', 'The first computer virus was a Creeper', 'NASA still operates some projects on programming from the 1970’s', 'There is BIG money in coding', 'It’s all 0’s and 1’s', 'Computer was a job title, and the first programmers were women', 'There are around 700 separate programming languages'];
    useEffect(() => {
        const currentFacts = Math.ceil(Math.random() * facts.length - 1);
        setFacts(facts[currentFacts])
    }, [])


    return (
        <div className='overflow-x-hidden w-full'>


            <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>

                <div className='md:h-[80vh] text-white px-20 py-10  md:flex items-center justify-between '>
                    <MouseParallaxChild factorX={0.1} factorY={0.2}>
                        <div className="left">
                            <img src={image} className='image' alt="" />
                        </div>
                    </MouseParallaxChild>
                    <div className="right text-left">
                        <h6 className='text-[#FF5F00] py-5'>##__{myfacts}</h6>
                        <p className='text-[60px]  text-left text-white'>Hello <br /> I am Mahmudul <br /> Full stack web <span className='heroText'>developer</span></p>
                        <div className='my-20 flex justify-between'>
                            <div>

                                <ResumeButton content='Download CV' resume={myresume}> </ResumeButton>
                            </div>
                            <div>
                                <div class="flex space-x-2 justify-center">
                                    <div>
                                        <button type="button" class="mx-2">
                                            <a href="https://github.com/mkmahmud"><i class="fa-brands fa-github text-[25px] hover:text-[#FF5F00] "></i></a>
                                        </button>
                                        <button type="button" class="mx-2">
                                            <a href="https://www.linkedin.com/in/mkmahmud/"><i class="fa-brands fa-linkedin text-[25px] hover:text-[#FF5F00]"></i></a>
                                        </button>
                                        <button type="button" class="mx-2">
                                            <a href="https://www.facebook.com/mkmahmuddev/"><i class="fa-brands fa-facebook text-[25px] hover:text-[#FF5F00]"></i></a>
                                        </button>
                                        <button type="button" class="mx-2">
                                            <a href="mailto:mahmudulmk4@gmail.com"><i class="fa-solid fa-envelope text-[25px] hover:text-[#FF5F00]"></i></a>
                                        </button>
                                        <button type="button" class="mx-2">
                                            <a href="tel:+8801309548540"><i class="fa-solid fa-phone text-[25px] hover:text-[#FF5F00]"></i></a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </MouseParallaxContainer>
        </div>

    );
};

export default Hero;