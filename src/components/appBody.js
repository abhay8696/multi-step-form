import React from 'react';
//styles
import '../styles/appBody.css'
//components
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';

const AppBody = () => {
    return (
        <div className='appBody'>
            {/* <Step1 /> */}
            {/* <Step2 /> */}
            <Step3 />
        </div>
    );
};

export default AppBody;