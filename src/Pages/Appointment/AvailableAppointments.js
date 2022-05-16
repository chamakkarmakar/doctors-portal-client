import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import ApointmentService from './ApointmentService';
import BookingModal from './BookingModal';

const AvailableAppointments = ({ selected }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/appointment')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='container mx-auto'>
            <h1 className='text-xl text-center text-secondary font-bold'>Available Apointments on {format(selected,'PP')}</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    services.map(service => <ApointmentService
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></ApointmentService>)
                }
            </div>
            {treatment && <BookingModal
                treatment={treatment}
                selected={selected}
                setTreatment={setTreatment}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;