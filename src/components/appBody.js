import React, { useState } from 'react';
//styles
import '../styles/appBody.css'
import '../styles/animations.css'
//components
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Step4 from './step4';
import Step5 from './step5';

const AppBody = props => {
    const {currnetPage ,changePage ,updateAppData, appData, handleAdd_on, changePageDirection, pageDirection} = props
    // functions
    const
    displayPage = ()=> {
        let comp;
        switch (currnetPage) {
            case 1:
                comp = <Step1 updateAppData={updateAppData} changePage={changePage} appData={appData} changePageDirection={changePageDirection} pageDirection={pageDirection}/>
                break;
            case 2:
                comp = <Step2 updateAppData={updateAppData} changePage={changePage} appData={appData} changePageDirection={changePageDirection} pageDirection={pageDirection}/>
                break;
            case 3:
                comp = <Step3 updateAppData={updateAppData} changePage={changePage} appData={appData} handleAdd_on={handleAdd_on} changePageDirection={changePageDirection} pageDirection={pageDirection}/>
                break;
            case 4:
                comp = <Step4 updateAppData={updateAppData} changePage={changePage} appData={appData} changePageDirection={changePageDirection} pageDirection={pageDirection}/>
                break;
            case 5:
                comp = <Step5 updateAppData={updateAppData} changePage={changePage} appData={appData} changePageDirection={changePageDirection} pageDirection={pageDirection}/>
                break;
            default:
                comp = <Step1 updateAppData={updateAppData} changePage={changePage} appData={appData} changePageDirection={changePageDirection} pageDirection={pageDirection}/>
          }
          return comp;
    }
    return (
        <div className='appBody intro'>
            {displayPage()}
        </div>
    );
};

export default AppBody;