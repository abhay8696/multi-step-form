import React, { useState } from 'react';
import '../styles/appBody.css'

const Step1 = props => {
    //props
    const {changePage, updateAppData} = props;
    //states
    const [formData, setFormData] = useState({ name: 'Abhay', email: 'abhay@email.com', phone: '45465465' });
    //functions
    const 
    submitForm1 = (evt)=>{
        evt.preventDefault();
        updateAppData({name: 'form1', value:formData});
        changePage();
    },
    handleChange = (event) => {
      const { name, value } = event.target;
      console.log({name, value})
      setFormData({ ...formData, [name]: value });
    };
    return (
        <form className='formBody step1' onSubmit={submitForm1}>
            <div className='stepHead'>
                <span className='headH1'>Personal Info</span>
                <span className='headInfo'>Please provide your name, email address and phone number.</span>
            </div>
            <div className='stepBody stepBody1'>
                <div className='step1Inputs'>
                    <label for='name'>Name</label>
                    <input 
                    id='name' 
                    name='name'
                    placeholder='e.g. Stephen King' 
                    required
                    autoComplete='none'
                    value={formData.name}
                    onChange={handleChange} 
                    >
                    </input>
                </div>
                <div className='step1Inputs'>
                    <label for='email'>Email Address</label>
                    <input 
                    id='email' 
                    type='email'
                    name='email' 
                    placeholder='e.g. stephen@email.com' 
                    required
                    autoComplete='none'
                    value={formData.email}
                    onChange={handleChange}
                    >
                    </input>
                </div>
                <div className='step1Inputs'>
                    <label for='phone'>Phone Number</label>
                    <input 
                    id='phone' 
                    type='number'
                    name='phone' 
                    placeholder='e.g. +1 12347555' 
                    required
                    autoComplete='none'
                    value={formData.phone}
                    onChange={handleChange}
                    >
                    </input>
                </div>
            </div>
            <div className='formButtons'>
                <div className='backButton'></div>
                <button 
                className='nextButton' 
                type='submit'
                >Next Step</button>
            </div>
        </form>
    );
};

export default Step1;