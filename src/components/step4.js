import React from 'react';
//styles
import '../styles/appBody.css';

//assets
import arcade from '../assets/images/icon-arcade.svg';
import advanced from '../assets/images/icon-advanced.svg';
import pro from '../assets/images/icon-pro.svg';

const Step4 = () => {
    return (
        <div className='formBody step4'>
            <div className='stepHead'>
                <span className='headH1'>Finishing up</span>
                <span className='headInfo'>Double-check everything looks OK before confirming.</span>
            </div>
            <div className='stepBody stepBody3'>
                <div className='description'>
                    <div className='subscriptionPlan'>
                        <div className='planTexts'>
                            <span className='planName'>Arcade{'(Monthly)'}</span>
                            <span className='planChange'>Change</span>
                        </div>
                        <div className='squarePrice'>+$9/mo</div>   
                    </div>
                    <div className='details'>
                        <div className='detailInfo'>
                            <span className='detailName'>Online service</span>
                            <span className='detailPrice'>+$1/mo</span>
                        </div>
                        <div className='detailInfo'>
                            <span className='detailName'>Larger storage</span>
                            <span className='detailPrice'>+$2/mo</span>
                        </div>
                    </div>
                </div>
                <div className='totalDiv'>
                    <span className='total'>Total{'(Monthly)'}</span>
                    <span className='totalPrice'>+$12/mo</span>
                </div>
            </div>  
        </div>
    );
};

export default Step4;