import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ modal, selected ,setModal}) => {
    const { name, slots } = modal;
    const handleSubmit = e => {
        e.preventDefault();
        setModal(null);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle w-full px-10">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg mb-10">{name}</h3>
                    <form onSubmit={handleSubmit}>
                        <input className='bg-gray-300 py-2 mb-5 px-2 rounded-md w-full outline-none font-medium' type="text" name='date' value={format(selected, 'PP')} readOnly />
                        <select name='slot' className="select select-bordered bg-gray-300 py-2 mb-5 px-2 rounded-md w-full outline-none focus:outline-none">
                            {
                                slots.map(slot => <option>{ slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' className='py-2 mb-5 px-2 rounded-md w-full outline-none border border-gray-300' placeholder='Full Name' />
                        <input type="number" name='phone' className='py-2 mb-5 px-2 rounded-md w-full outline-none border border-gray-300' placeholder='Phone Number' />
                        <input type="email" name='email' className='py-2 mb-5 px-2 rounded-md w-full outline-none border border-gray-300' placeholder='Email' />
                    </form>
                    <div className="modal-action">
                        <label htmlFor="booking-modal" className="btn btn-accent w-full uppercase">Submit</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;