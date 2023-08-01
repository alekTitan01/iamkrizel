import React from "react";
import { HeaderSection } from '../../styles';
import { headerUrl } from '../../../../utils/constants';


const MainHeader = () => {
    return <HeaderSection>
        <div className='header-content'>
            <div>
                <h1>Meet Your Virtual Assistant: The Future of Productivity!</h1>
                <p>Welcome to KM Virtual Assistant, where your productivity meets its perfect match. I am your dedicated virtual assistant, committed to simplifying your life and helping you achieve your goals with ease</p>
            </div>
        </div>
        <div className='image-content'>
            <img src={headerUrl} alt='' />
        </div>
    </HeaderSection>;
};

export default MainHeader;
