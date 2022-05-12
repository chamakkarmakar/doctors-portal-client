import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../assets/images/chair.png';

const AppointmentBanner = ({selected,setSelected}) => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div className='md:w-1/2 w-auto px-10'>
                    <DayPicker
                         mode="single"
                         selected={selected}
                         onSelect={setSelected}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;