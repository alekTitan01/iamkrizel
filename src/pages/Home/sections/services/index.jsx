import React from "react";
import { ServicesContainer } from '../../styles';
import { ActionButton } from '../../../../common/components/buttons/style';
import { useNavigate } from 'react-router-dom';
import ServiceRow from './components/ServiceRow';

const Services = () => {

    const navigate = useNavigate()

    return <ServicesContainer>
        <h1>Services</h1>
        <div className='service-row'>
            <ServiceRow />
            <ServiceRow />
            <ServiceRow />
            <ServiceRow />
            <ServiceRow />
        </div>
        <ActionButton onClick={() => navigate('/iamkrizel/services')}>
            Learn more
        </ActionButton>
    </ServicesContainer>;
};

export default Services;
