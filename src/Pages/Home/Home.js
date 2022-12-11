import React from 'react';
import GetInTouch from '../GetInTouch/GetInTouch';
import Projects from '../Projects/Projects';
import Hero from './Hero/Hero';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Projects></Projects>
            <GetInTouch></GetInTouch>
        </div>
    );
};

export default Home;