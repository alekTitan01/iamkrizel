import React from "react";
import { ServicesContainer } from '../../styles';
import { ActionButton } from '../../../../common/components/buttons/style';

const Services = () => {
    return <ServicesContainer>
        <h1>Services</h1>
        <div>
            Main Services
        </div>
        <ActionButton>
            Learn more
        </ActionButton>
    </ServicesContainer>;
};

export default Services;
