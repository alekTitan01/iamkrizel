import React from "react";
import { ProfileInfoContainer } from '../../styles';
import { ActionButton } from '../../../../common/components/buttons/style';
import { useNavigate } from 'react-router-dom';

const ProfileInfo = () => {

    const navigate = useNavigate()

    return <ProfileInfoContainer>
        <div className='column image'>
            <img alt='' src='/images/random-profile.jpg' />
        </div>
        <div className='column content'>
            <h2>About Me</h2>
            <ActionButton onClick={() => navigate('/about')}>
                Learn more
            </ActionButton>
        </div>
    </ProfileInfoContainer>;
};

export default ProfileInfo;
