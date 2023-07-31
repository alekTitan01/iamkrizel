import React from "react";
import { ServicesContainer } from '../../styles';
import ServiceRow from './components/ServiceRow';

const Services = () => {
    return <ServicesContainer>
        <h1>Services</h1>
        <div className='service-row'>
            <ServiceRow />
            <ServiceRow />
            <ServiceRow />
            <ServiceRow />
            <ServiceRow />
        </div>
    </ServicesContainer>;
};

export default Services;
