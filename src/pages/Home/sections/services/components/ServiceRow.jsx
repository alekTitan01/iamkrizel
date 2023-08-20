import React from "react";
import { servicesContent } from './constants';
import { HashLink } from 'react-router-hash-link';

const ServiceRow = () => {

    const newArray = Array.from({ length: 5 }, (_, index) => index + 1);

    return <div className='service-content'>
        {newArray.map((num) => {
            return servicesContent.map((service) => <div key={`${num}-${service.index}`} className='service-image'>
                <img alt={service.title} src={service.imgUrl} />
                <div className='service-info'>
                    <span>{service.title}</span>
                    <HashLink smooth to={`/iamkrizel/services#${service.index}`}>Learn More</HashLink>
                </div>
            </div>)
        })}
    </div>;
};

export default ServiceRow;
