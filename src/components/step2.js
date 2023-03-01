import React, { useRef, useState } from 'react';
//styles
import '../styles/appBody.css';
import '../styles/extra.css';   
//assets
import arcade from '../assets/images/icon-arcade.svg';
import advanced from '../assets/images/icon-advanced.svg';
import pro from '../assets/images/icon-pro.svg';

const Step2 = props => {
    //props
    const {changePage, updateAppData} = props;
    //states
    const 
    [planType, setPlanType] = useState('Advanced'),
    [isMonthlyPlan, setIsMonthlyPlan] = useState(true);
    // functions
    const
    handleSquare = val=>{
        setPlanType(val);
    },
    sqaureClass = sqrNo=> {
        if(sqrNo===1 && planType==='Arcade') return 'square selected';
        if(sqrNo===2 && planType==='Advanced') return 'square selected';
        if(sqrNo===3 && planType==='Pro') return 'square selected';
        return 'square';
    },
    handleSubmit = ()=> {
        updateAppData({name: 'form2', value: {planType, isMonthlyPlan}})
    }
    return (
        <div className='formBody step2'>
            <div className='stepHead'>
                <span className='headH1'>Select Your Plan</span>
                <span className='headInfo'>You have option for monthly and yearly billing.</span>
            </div>
            <div className='stepBody stepBody2'>
                <div className='squareArea'>
                    <div className={sqaureClass(1)} onClick={()=> handleSquare('Arcade')}>
                        <span className='squareIcon'>
                            <img src={arcade} />
                        </span>
                        <div className='squareTexts'>
                            <span className='squareName'>Arcade</span>
                            <span className='squarePrice'>
                                {isMonthlyPlan ? '$9/mo' : '$90/yr'}
                            </span>
                            <span className='squareMsg'>2 months free</span>
                        </div>
                    </div>
                    <div className={sqaureClass(2)} onClick={()=> handleSquare('Advanced')}>
                        <span className='squareIcon'>
                            <img src={advanced} />
                        </span>
                        <div className='squareTexts'>
                            <span className='squareName'>Advanced</span>
                            <span className='squarePrice'>
                                {isMonthlyPlan ? '$12/mo' : '$120/yr'}
                            </span>
                            <span className='squareMsg'>2 months free</span>
                        </div>
                    </div>
                    <div className={sqaureClass(3)} onClick={()=> handleSquare('Pro')}>
                        <span className='squareIcon'>
                            <img src={pro} />
                        </span>
                        <div className='squareTexts'>
                            <span className='squareName'>Pro</span>
                            <span className='squarePrice'>
                                {isMonthlyPlan ? '$15/mo' : '$150/yr'}
                            </span>
                            <span className='squareMsg'>2 months free</span>
                        </div>
                    </div>
                </div>
                <div className='monthYearSwitch'>
                    <span id='month'>Monthly</span>
                    <input 
                    type="checkbox" 
                    id="switch" 
                    className='toggleInput'
                    onChange={()=> setIsMonthlyPlan(!isMonthlyPlan)}
                    />
                    <label for="switch" className='toggle'>Toggle</label>
                    <span id='year'>Yearly</span>
                </div>
            </div>  
            <div className='formButtons'>
                <div className='backButton'onClick={()=> changePage(true)}>Go Back</div>
                <div className='nextButton' onClick={()=> handleSubmit()}>Next Step</div>
            </div>
        </div>
    );
};

export default Step2;