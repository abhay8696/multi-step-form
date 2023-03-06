import React, { useState } from 'react';
//styles
import '../styles/appBody.css';


const Step4 = props => {
    //props
    const { changePage ,updateAppData, appData, changePageDirection, pageDirection } = props;
    // states
    // functions
    const 
    displayPlanName = ()=> {
        const {planType, isMonthlyPlan, planCost} = appData?.form2;
        let str = ``;
        isMonthlyPlan ? str = `${planType}(Monthly)` : str = `${planType}(Yearly)`

        return str;
    },
    displayPrice1 = ()=> {
        const {planCost} = appData?.form2;
        return appData?.form2?.isMonthlyPlan ? `+\$${planCost}/mo` : `+\$${planCost}/yr`
    },
    displayTotalPrice1 = ()=> {
        const {planCost} = appData?.form2;
        let total=0;
        for(let i=0; i<3; i++){
            let p = appData?.form3?.[i]?.price;
            if(p) total += p;
            console.log({i, p, total})
        }
        let period = ''
        appData?.form2?.isMonthlyPlan ? period='mo' : period='yr';
        
        return `\$${total+planCost}/${period}`;
    },
    displayAddOns = ()=> {
        let arr = [], time;
        if(appData?.form2?.isMonthlyPlan) time = 'mo';
        else time='yr';
        appData.form3.forEach(element => {
            if(element?.name){
                arr.push(
                    <div className='detailInfo' key={element?.name}>
                        <span className='detailName'>{element?.name}</span>
                        <span className='detailPrice'>${`${element?.price}/${time}`}</span>
                    </div>
                )
            }
        });
        console.log(arr)
        return arr;
    },
    handleSubmit4 = ()=>{
        changePage();
        changePageDirection('forwardDirection');
    },
    handleBack4 = ()=> {
        changePage(true);
        changePageDirection('backwardDirection');
    }
    return (
        <div className='formBody step4 intro2'>
            <div className='stepHead'>
                <span className='headH1'>Finishing up</span>
                <span className='headInfo'>Double-check everything looks OK before confirming.</span>
            </div>
            <div className='stepBody stepBody3'>
                <div className='description'>
                    <div className='subscriptionPlan'>
                        <div className='planTexts'>
                            <span className='planName'>{displayPlanName()}</span>
                            <span className='planChange'>Change</span>
                        </div>
                        <div className='squarePrice'>{displayPrice1()}</div>   
                    </div>
                    <div className='details'>
                        {displayAddOns()}
                    </div>
                </div>
                <div className='totalDiv'>
                    <span className='total'>Total{'(Monthly)'}</span>
                    <span className='totalPrice'>{displayTotalPrice1()}</span>
                </div>
            </div>  
            <div className='formButtons'>
                <div className='backButton'onClick={()=> handleBack4()}>Go Back</div>
                <div className='nextButton' onClick={()=> handleSubmit4()}>Next Step</div>
            </div>
        </div>
    );
};

export default Step4;