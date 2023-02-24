import React from 'react';
//styles
import '../styles/appBody.css'
//components
import Step1 from './step1';
import Step2 from './step2';

const AppBody = () => {
    return (
        <div className='appBody'>
            {/* <Step1 /> */}
            <Step2 />
        </div>
    );
};

export default AppBody;