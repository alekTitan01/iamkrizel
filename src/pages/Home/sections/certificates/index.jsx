import React from "react";
import { CertificatesContainer } from '../../styles';
import ReactImageMagnify from 'react-image-magnify';

const Certificates = () => {
    return <CertificatesContainer>
        <h1>Certificates</h1>
        <div className='column-container'>
            <div className='column'>
                <ReactImageMagnify {...{
                    smallImage: {
                        alt: 'Wristwatch by Ted Baker London',
                        isFluidWidth: true,
                        src: `${process.env.PUBLIC_URL}/images/cert-1.jpg`
                    },
                    largeImage: {
                        src: `${process.env.PUBLIC_URL}/images/cert-1.jpg`,
                        width: 1280,
                        height: 905
                    },
                    isHintEnabled: true,
                    enlargedImagePosition: 'over'
                }} />
            </div>
            <div className='column'>
                <ReactImageMagnify {...{
                    smallImage: {
                        alt: 'Wristwatch by Ted Baker London',
                        isFluidWidth: true,
                        src: `${process.env.PUBLIC_URL}/images/cert-2.jpg`
                    },
                    largeImage: {
                        src: `${process.env.PUBLIC_URL}/images/cert-2.jpg`,
                        width: 1280,
                        height: 905
                    },
                    isHintEnabled: true,
                    enlargedImagePosition: 'over'
                }} />
            </div>
        </div>
    </CertificatesContainer>;
};

export default Certificates;
