import React from "react";
import { ServicesSection } from './style';
import { servicesData } from './constants';
import ServiceRow from './ServiceRow';

const Services = () => {

    return <>
        <ServicesSection>
            <header className='services-header-container'>
                <div className='service-header' />
                <div className='bg-gradient' />
                <h1 className='service-title'>My Services</h1>
            </header>
            <div className='service-content'>
                {servicesData.map((service, idx) => <ServiceRow id={service.index} key={service.index} imgUrl={service.imgUrl} serviceName={service.serviceName} contentList={service.contentList} isReversed={idx % 2 === 0} />)}
            </div>
        </ServicesSection>
    </>;
};

export default Services;
