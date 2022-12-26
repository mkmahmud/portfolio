import React from 'react';
import GetInTouch from '../GetInTouch/GetInTouch';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Hero from './Hero/Hero';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Skills></Skills>
            <Projects></Projects>
            <GetInTouch></GetInTouch>
        </div>
    );
};

export default Home;