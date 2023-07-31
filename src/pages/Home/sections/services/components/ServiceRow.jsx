import React from "react";
import { Link } from 'react-router-dom';

const ServiceRow = () => {

    const servicesContent = [
        {
            title: 'General Virtual Assistant',
            imgUrl: `${process.env.PUBLIC_URL}/images/general-virtual-assistance.jpg`
        },
        {
            title: 'Social Media Management',
            imgUrl: `${process.env.PUBLIC_URL}/images/social-media-management.jpg`
        },
        {
            title: 'Search Engine Optimization',
            imgUrl: `${process.env.PUBLIC_URL}/images/search-engine-optimization.jpg`
        },
        {
            title: 'Graphic Design',
            imgUrl: `${process.env.PUBLIC_URL}/images/graphic-design.jpg`
        },
        {
            title: 'Digital Marketing',
            imgUrl: `${process.env.PUBLIC_URL}/images/digital-marketing.jpg`
        },
    ]

    const newArray = Array.from({ length: 5 }, (_, index) => index + 1);

    return <div className='service-content'>
        <>
            {newArray.map((num) => {
                return servicesContent.map((service, index) => <div key={`${num}-${index}`} className='service-image'>
                    <img alt={service.title} src={service.imgUrl} />
                    <div className='service-info'>
                        <span>{service.title}</span>
                        <Link to='/iamkrizel/services'>Learn More</Link>
                    </div>
                </div>)
            })}
        </>
    </div>;
};

export default ServiceRow;
