import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const Info = () => {
    return (
            <div className='grid md:grid-cols-3 grid-cols-1 gap-5 text-white content-ceneter'>
                <div className="card lg:card-side shadow-xl bg-gradient-to-r from-secondary to-primary h-48 px-8 py-6">
                    <figure><img src={clock} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Opening Hour!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                    </div>
                </div>
                <div className="card lg:card-side shadow-xl bg-accent  h-48 px-8 py-6">
                    <figure><img src={marker} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Visit Our Location</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                    </div>
                </div>
                <div className="card lg:card-side shadow-xl bg-gradient-to-r from-secondary to-primary h-48 px-8 py-6">
                    <figure><img src={phone} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Contact us Now</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                    </div>
                </div>
            </div>
    );
};

export default Info;