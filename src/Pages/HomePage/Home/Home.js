import React from 'react';
import Banner from '../Banner/Banner';
import Info from '../Information/Info';
import MakeAppoint from '../MakeAppointment/MakeAppoint';
import Services from '../Services/Services';
import Testimonial from '../Testimonials/Testimonial';

const Home = () => {
    return (
        <div className='container mx-auto sm:mx-auto'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppoint></MakeAppoint>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;