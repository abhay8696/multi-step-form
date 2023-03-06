import React from 'react';
//styles
import '../styles/appBody.css';

//assets
import thankYou from '../assets/images/icon-thank-you.svg';

const Step5 = () => {
    return (
        <div className='formBody step5 intro2'>
            <div className='thankYouDiv'>
                <img src={thankYou} />
                <div className='thankYouHead'>Thank You!</div>
                <div className='thankYouMsg'>
                    <span>
                        Thanks for confirming your subscription!
                    </span>
                    <span>
                        We hope ypu have fun using our platform. If you ever need support, please feel free to email us at
                    </span>
                    <span>
                        support@loremgaming.com.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Step5;