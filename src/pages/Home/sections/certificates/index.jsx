import React from "react";
import { CertificatesContainer } from '../../styles';

const Certificates = () => {
    return <CertificatesContainer>
        <h1>
            Certificates
        </h1>
        <div className='column-container'>
            <div className='column'>
                <img alt='' src={`${process.env.PUBLIC_URL}/images/cert-1.jpg`} height={500} />
            </div>
            <div className='column'>
                <img alt='' src={`${process.env.PUBLIC_URL}/images/cert-2.jpg`} height={500} />
            </div>
        </div>
    </CertificatesContainer>;
};

export default Certificates;
