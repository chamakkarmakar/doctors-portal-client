import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';

const Testimonial = () => {
    const reviews = [
        { _id: 1, name: 'Winson Harry', country: 'california',img:`${people1}`, review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content' },
        { _id: 2, name: 'Winson Harry', country: 'california',img:`${people2}`, review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content' },
        { _id: 3, name: 'Winson Harry', country: 'california',img:`${people3}`, review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content' }
    ]
    return (
        <section className='mt-20'>
            <div className='flex justify-between items-center'>
                <div>
                    <p className='text-md text-secondary font-medium'>Testimonial</p>
                    <h1 className='text-3xl'>What Our Patients Says</h1>
                </div>
                <div>
                    <img src={quote} alt="" className='h-52' />
                </div>

            </div>

            <div className='grid md:grid-cols-3'>
                {
                    reviews.map(review =>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <p>{review.review}</p>
                                <div className="card-actions justify-start">
                                    <img src={review.img} alt=""  className='w-10 h-10 border-1'/>
                                    <div>
                                        <h4>{review.name}</h4>
                                        <p>{ review.country}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </section>
    );
};

export default Testimonial;