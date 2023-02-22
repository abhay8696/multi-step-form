import React from 'react';
import '../styles/sidebar.css';

import dummyImg from '../assets/images/bg-sidebar-desktop.svg';

const Sidebar = () => {

    //funtions
    const
    displayItems = ()=> {
        const texts = ['', 'YOUR INFO', 'SELECT PLAN', 'ADD_ONS', 'SUMMARY'];
        let arr = [];
        for(let i=1; i<texts.length; i++){
            arr.push(
                <div className='sidebarItem'>
                    <div className='sidebarBullet selected'>{i}</div>
                    <div className='sidebarTexts'>
                        <span className='sidebarText1 stepSpan'>STEP {i}</span>
                        <span className='sidebarText2 itemName'>{texts[i]}</span>
                    </div>
                </div>
            )
        }

        return arr;
    }

    return (
        <div className='sidebar'>
            <div className='sidebarContainer'>
                { displayItems() }
            </div>
            <img src={dummyImg} className='dummyImg'/>
        </div>
    );
};

export default Sidebar;