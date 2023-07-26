import React from "react";
import { HeaderSection } from '../../styles';

const MainHeader = () => {
    return <HeaderSection>
        <div className='header-img'>
            <img src={`${process.env.PUBLIC_URL}/images/header-image.jpg`} alt='' />
        </div>
        <div className='header-content'>
            <h1>This is the header</h1>
            <p>Nulla cursus rhoncus leo, eu malesuada est tincidunt non. Maecenas quis ligula sit amet sem vestibulum accumsan vitae blandit risus. Integer aliquet eros diam, sed iaculis nulla malesuada in. Quisque in dui sit amet justo congue aliquam. Ut vestibulum, neque sit amet aliquet ultricies, eros tellus suscipit lacus, in accumsan eros odio eget velit. In pretium lectus malesuada, rhoncus ante in, placerat metus. Maecenas rutrum ac sapien at scelerisque</p>
        </div>
    </HeaderSection>;
};

export default MainHeader;
