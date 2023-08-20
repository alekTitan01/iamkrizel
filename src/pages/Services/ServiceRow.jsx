import React from "react";
import { ServiceRowArticle } from './style';

const ServiceRow = ({ imgUrl, serviceName, contentList, id, isReversed }) => {
    return <ServiceRowArticle id={id} color='red' className={`${isReversed && 'service-reverse'}`}>
        <div className='service-image'>
            <img alt='' src={imgUrl} />
        </div>
        <div className='service-info'>
            <div>
                <h2>{serviceName}</h2>
            </div>
            <ul>
                {contentList.map((content, idx) => <li key={idx}>{content}</li>)}
            </ul>
        </div>
    </ServiceRowArticle>;
};

export default ServiceRow;
