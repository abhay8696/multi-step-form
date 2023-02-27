import React from 'react';
//styles
import '../styles/appBody.css';


const Step3 = () => {
    return (
        <div className='formBody step3'>
            <div className='stepHead'>
                <span className='headH1'>Pick add-ons</span>
                <span className='headInfo'>Add-ons help enhance your gaming experience.</span>
            </div>
            <div className='stepBody stepBody2'>
                <div className='squareArea'>
                    <div className='square step3Square '>
                        <input type='checkbox' className='step3Checkbox'/>
                        <div className='squareTexts'>
                            <span className='squareName'>Online Service</span>
                            <span className='squareMsg'>Access to multiplayer games</span>
                        </div>
                        <div className='squarePrice'>+$1/mo</div>
                    </div>
                    <div className='square step3Square selected'>
                        <input type='checkbox' className='step3Checkbox'/>
                        <div className='squareTexts'>
                            <span className='squareName'>Larger Storage</span>
                            <span className='squareMsg'>Extra 1TB of cloud save</span>
                        </div>
                        <div className='squarePrice'>+$2/mo</div>
                    </div>
                    <div className='square step3Square'>
                        <input type='checkbox' className='step3Checkbox'/>
                        <div className='squareTexts'>
                            <span className='squareName'>Customizable profile</span>
                            <span className='squareMsg'>Custom theme on your profile</span>
                        </div>
                        <div className='squarePrice'>+$2/mo</div>
                    </div>
                </div>
            </div>  
        </div>
    );
};

export default Step3;