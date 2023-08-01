import React from "react";
import { ProfileInfoContainer } from '../../styles';
import { ActionButton } from '../../../../common/components/buttons/style';
import { useNavigate } from 'react-router-dom';

const ProfileInfo = () => {

    const navigate = useNavigate()

    return <ProfileInfoContainer>
        <div className='column image' />
        <div className='column content'>
            <p>
                Aspiring digital marketer and virtual assistant with a passion for driving business growth. Eager to learn and adapt to the dynamic world of online marketing. Dedicated to providing top-notch support and organization to help businesses thrive. Let's create success together in the digital realm!
            </p>
            <ActionButton onClick={() => navigate('/iamkrizel/about')}>
                Learn more
            </ActionButton>
        </div>
    </ProfileInfoContainer>;
};

export default ProfileInfo;
