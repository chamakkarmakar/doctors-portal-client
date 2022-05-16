import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const BookingModal = ({ treatment, selected, setTreatment }) => {
    
    const [user] = useAuthState(auth);
    const { _id, name, slots } = treatment;
    const formattedDate = format(selected, 'PP');

    const handleSubmit = e => {
        e.preventDefault();
        const slot = e.target.slot.value;

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot : slot,
            patient: user.email,
            patientName: user.displayName,
            phone: e.target.phone.value
        }
        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.success){
                    toast(`Appointment is set, ${formattedDate} at ${slot}`)
                }
                else{
                    toast.error(`Already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`)
                }
                // close the modal 
                setTreatment(null);
            })

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
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>

                        <input type="text" name='name' className='py-2 mb-5 px-2 rounded-md w-full outline-none border border-gray-300' placeholder='Full Name' readOnly value={user?.displayName} />

                        <input type="email" name='email' className='py-2 mb-5 px-2 rounded-md w-full outline-none border border-gray-300' placeholder='Email' readOnly value={user?.email} />

                        <input type="number" name='phone' className='py-2 mb-5 px-2 rounded-md w-full outline-none border border-gray-300' placeholder='Phone Number' />
                        
                        <input type="submit" value="Submit" className="btn btn-accent w-full uppercase"/>
                    
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default BookingModal;