import React from 'react';
import '../styles/appBody.css'

const Step1 = () => {
    return (
        <div className='formBody step1'>
            <div className='stepHead'>
                <span className='headH1'>Personal Info</span>
                <span className='headInfo'>Please provide your name, email address and phone number.</span>
            </div>
            <div className='stepBody stepBody1'>
                <div className='step1Inputs'>
                    <label for='name'>Name</label>
                    <input id='name' placeholder='e.g. Stephen King' autoComplete='none'>

                    </input>
                </div>
                <div className='step1Inputs'>
                    <label for='email'>Email Address</label>
                    <input id='email' type='email' placeholder='e.g. stephen@email.com' autoComplete='none'></input>
                </div>
                <div className='step1Inputs'>
                    <label for='phone'>Phone Number</label>
                    <input id='phone' type='number' placeholder='e.g. +1 12347555' autoComplete='none'></input>
                </div>
            </div>
            <div className='formButtons'>
                <div className='backButton'></div>
                <div className='nextButton'>Next Step</div>
            </div>
        </div>
    );
};

export default Step1;