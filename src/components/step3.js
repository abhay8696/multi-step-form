import React, { useState } from 'react';
//styles
import '../styles/appBody.css';


const Step3 = props => {
    //props
    const { changePage , appData, handleAdd_on } = props;

    let isMonthlyPlan = appData?.form2?.isMonthlyPlan;
    //states
    const add_onData = appData?.form3;
    //functions
    const 
    sqaureClass = sqrNo=> {
        if(sqrNo===1 && add_onData[0]?.name==='Online Service') return 'square step3Square selected';
        if(sqrNo===2 && add_onData[1]?.name==='Larger Storage') return 'square step3Square selected';
        if(sqrNo===3 && add_onData[2]?.name==='Customizable profile') return 'square step3Square selected';
        return 'square step3Square';
    }
    return (
        <div className='formBody step3'>
            <div className='stepHead'>
                <span className='headH1'>Pick add-ons</span>
                <span className='headInfo'>Add-ons help enhance your gaming experience.</span>
            </div>
            <div className='stepBody stepBody2'>
                <div className='squareArea'>
                    <div className={sqaureClass(1)}>
                        <input 
                            type='checkbox' 
                            className='step3Checkbox' 
                            onClick={e=> handleAdd_on(e.target.checked, 0)}
                            checked={add_onData[0]?.name==='Online Service' ? true : false}
                        />
                        <div className='squareTexts'>
                            <span className='squareName'>Online Service</span>
                            <span className='squareMsg'>Access to multiplayer games</span>
                        </div>
                        <div className='squarePrice'>
                            {isMonthlyPlan ? '+$1/mo' : '+$10/yr'}
                        </div>
                    </div>
                    <div className={sqaureClass(2)}>
                        <input 
                        type='checkbox' 
                        className='step3Checkbox' 
                        onClick={e=> handleAdd_on(e.target.checked, 1)}
                        checked={add_onData[1]?.name==='Larger Storage' ? true : false}
                        />
                        <div className='squareTexts'>
                            <span className='squareName'>Larger Storage</span>
                            <span className='squareMsg'>Extra 1TB of cloud save</span>
                        </div>
                        <div className='squarePrice'>
                            {isMonthlyPlan ? '+$2/mo' : '+$20/yr'}
                        </div>
                    </div>
                    <div className={sqaureClass(3)}>
                        <input 
                        type='checkbox' 
                        className='step3Checkbox' 
                        onClick={e=> handleAdd_on(e.target.checked, 2)}
                        checked={add_onData[2]?.name==='Customizable profile' ? true : false}
                        />
                        <div className='squareTexts'>
                            <span className='squareName'>Customizable profile</span>
                            <span className='squareMsg'>Custom theme on your profile</span>
                        </div>
                        <div className='squarePrice'>
                            {isMonthlyPlan ? '+$2/mo' : '+$20/yr'}
                        </div>
                    </div>
                </div>
            </div>  
            <div className='formButtons'>
                <div className='backButton'onClick={()=> changePage(true)}>Go Back</div>
                <div className='nextButton' onClick={()=> changePage()}>Next Step</div>
            </div>
        </div>
    );
};

export default Step3;