import React from 'react';
import cavity from '../../../assets/images/cavity.png';
import fluoride from '../../../assets/images/fluoride.png';
import treatment from '../../../assets/images/treatment.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1, title: 'Fluoride Treatment', img: fluoride, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, temporibus?'
        },
        {
            _id: 2, title: 'Cravity Filling', img: cavity, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, temporibus?'
        },
        {
            _id: 3, title: 'Fluoride Treatment', img: whitening, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, temporibus?'
        }
    ];
    return (
        <div className='my-14'>
            <p className='uppercase text-center text-secondary font-bold'>our services</p>
            <h1 className='text-3xl font-semibold text-center'>Services We Provide</h1>

            <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>

            <div className="hero min-h-screen mt-20">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} className="max-w-sm rounded-lg shadow-2xl md:mx-16" alt='treatment'/>
                <div className='md:w-1/2 w-auto md:pl-20'>
                    <h1 className="md:text-5xl text-2xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary ">Get Started</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Services;