import React from 'react';
//styles
import '../styles/appBody.css'
//components
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Step4 from './step4';

const AppBody = () => {
    return (
        <div className='appBody'>
            {/* <Step1 /> */}
            {/* <Step2 /> */}
            {/* <Step3 /> */}
            <Step4 />
        </div>
    );
};

export default AppBody;