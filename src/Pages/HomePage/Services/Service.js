import React from 'react';

const Service = ({ service }) => {
    return (
        <div className="card shadow-xl">
            <figure className="px-10 pt-10">
                <img src={service.img} alt="fluoride" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{service.title}</h2>
                <p>{service.description}</p>
            </div>
        </div>
    );
};

export default Service;