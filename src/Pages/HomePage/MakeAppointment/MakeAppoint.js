import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import smallDoctor from '../../../assets/images/doctor-small.png';

const MakeAppoint = () => {
    return (
        <section className='flex  justify-center items-center'
            style={{background : `url(${appointment})`}}
        >
            <div className='flex-1 hidden lg:block'>
                <img src={smallDoctor} alt="small-doctor" className='md:ml-40 h-96 mt-[-70px]'/>
            </div>
            <div className='flex-1 py-10 px-7'>
                <h3 className='text-xl text-primary'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointment</h2>
                <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, tempore dolorum earum, voluptate cumque quam eveniet esse nam est veniam ipsa sit atque explicabo, eaque cupiditate velit beatae dolore nostrum.</p>
                <button className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary ">Get Started</button>
            </div>
        </section>
    );
};

export default MakeAppoint;