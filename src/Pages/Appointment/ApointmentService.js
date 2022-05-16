import React from 'react';

const ApointmentService = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body flex flex-col items-center justify-center">
                <div>
                    <h2 className="card-title text-secondary text-xl leading-10">{name}</h2>
                    <p className='text-xs text-center'>
                        {
                            slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-600'>No Slot Available</span>
                        }
                    </p>
                    <p className='text-xs text-center'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                </div>
                <div className="card-actions">
                    <label
                        htmlFor='booking-modal'
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}
                        className="btn btn-primary text-white">
                        Booking Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default ApointmentService;