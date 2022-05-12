import React from 'react';
import Banner from '../Banner/Banner';
import Info from '../Information/Info';
import MakeAppoint from '../MakeAppointment/MakeAppoint';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='container mx-auto sm:mx-auto'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppoint></MakeAppoint>
        </div>
    );
};

export default Home;