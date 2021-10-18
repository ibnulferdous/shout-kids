import React from 'react';
import Process from '../SharedComponents/Process/Process';
import Hero from './Hero/Hero';
import './HomePage.css';
import SectionTwo from './SectionTwo/SectionTwo';
import ServicesForHome from './ServicesForHome/ServicesForHome';

const HomePage = () => {
    return (
        <div>
            <Hero></Hero>
            <SectionTwo></SectionTwo>
            <Process></Process>
            <ServicesForHome></ServicesForHome>
        </div>
    );
};

export default HomePage;