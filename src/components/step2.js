import React from 'react';
//styles
import '../styles/appBody.css';
import '../styles/extra.css';   
//assets
import arcade from '../assets/images/icon-arcade.svg';
import advanced from '../assets/images/icon-advanced.svg';
import pro from '../assets/images/icon-pro.svg';

const Step2 = () => {
    return (
        <div className='formBody step2'>
            <div className='stepHead'>
                <span className='headH1'>Select Your Plan</span>
                <span className='headInfo'>You have option for monthly and yearly billing.</span>
            </div>
            <div className='stepBody stepBody2'>
                <div className='squareArea'>
                    <div className='square square1 '>
                        <span className='squareIcon'>
                            <img src={arcade} />
                        </span>
                        <div className='squareTexts'>
                            <span className='squareName'>Arcade</span>
                            <span className='squarePrice'>$9/mo</span>
                            <span className='squareMsg'>2 months free</span>
                        </div>
                    </div>
                    <div className='square square1 selected'>
                        <span className='squareIcon'>
                            <img src={advanced} />
                        </span>
                        <div className='squareTexts'>
                            <span className='squareName'>Advanced</span>
                            <span className='squarePrice'>$12/mo</span>
                            <span className='squareMsg'>2 months free</span>
                        </div>
                    </div>
                    <div className='square square1'>
                        <span className='squareIcon'>
                            <img src={pro} />
                        </span>
                        <div className='squareTexts'>
                            <span className='squareName'>Pro</span>
                            <span className='squarePrice'>$150/mo</span>
                            <span className='squareMsg'>2 months free</span>
                        </div>
                    </div>
                </div>
                <div className='monthYearSwitch'>
                    <span id='month'>Monthly</span>
                    <input type="checkbox" id="switch" className='toggleInput'/>
                    <label for="switch" className='toggle'>Toggle</label>
                    <span id='year'>Yearly</span>
                </div>
            </div>  
        </div>
    );
};

export default Step2;