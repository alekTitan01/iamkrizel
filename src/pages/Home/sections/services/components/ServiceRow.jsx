import React from "react";

const ServiceRow = () => {

    const servicesContent = [
        {
            title: 'General Virtual Assistant',
            imgUrl: `${process.env.PUBLIC_URL}/images/cert-1.webp`
        },
        {
            title: 'Social Media Management',
            imgUrl: `${process.env.PUBLIC_URL}/images/cert-1.webp`
        },
        {
            title: 'Search Engine Optimization',
            imgUrl: `${process.env.PUBLIC_URL}/images/cert-1.webp`
        },
        {
            title: 'Graphic Design',
            imgUrl: `${process.env.PUBLIC_URL}/images/cert-1.webp`
        },
        {
            title: 'Digital Marketing',
            imgUrl: `${process.env.PUBLIC_URL}/images/cert-1.webp`
        },
    ]

    const newArray = Array.from({ length: 5 }, (_, index) => index + 1);

    return <div className='service-content'>
        <>
            {newArray.map((num) => {
                return servicesContent.map((service, index) => <div key={`${num}-${index}`} className='service-image'>
                    <img alt={service.title} src={service.imgUrl} />
                    <span>{service.title}</span>
                </div>)
            })}
        </>
    </div>;
};

export default ServiceRow;
