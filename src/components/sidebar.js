import React from 'react';
import '../styles/sidebar.css';

import dummyImg1 from '../assets/images/bg-sidebar-desktop.svg';
import dummyImg2 from '../assets/images/bg-sidebar-mobile.svg';

const Sidebar = props => {
    // props
    const { currnetPage } = props;

    //funtions
    const
    displayItems1 = ()=> {
        const texts = ['', 'YOUR INFO', 'SELECT PLAN', 'ADD_ONS', 'SUMMARY'];
        let arr = [];
        let bulletClassName = 'sidebarBullet';
        for(let i=1; i<texts.length; i++){

            if(i===currnetPage) bulletClassName = 'sidebarBullet selected';
            else bulletClassName = 'sidebarBullet';
            arr.push(
                <div className='sidebarItem'>
                    <div className={bulletClassName}>{i}</div>
                    <div className='sidebarTexts'>
                        <span className='sidebarText1 stepSpan'>STEP {i}</span>
                        <span className='sidebarText2 itemName'>{texts[i]}</span>
                    </div>
                </div>
            )
        }

        return arr;
    },
    displayItems2 = ()=> {
        let arr = [];
        let bulletClassName = 'sidebarBullet';
        for(let i=1; i<=4; i++){
            if(i===currnetPage) bulletClassName = 'sidebarBullet selected';
            else bulletClassName = 'sidebarBullet';
            arr.push(<div className={bulletClassName}>{i}</div>)
        }
        return arr;
    }

    return (
        <>
        <div className='sidebar intro'>
            <div className='sidebarContainer'>
                { displayItems1() }
            </div>
            <img src={dummyImg1} className='dummyImg1'/>
        </div>
        <div className='topbar intro'>
            <div className='topbarContainer'>
                {displayItems2()}
            </div>
            <img src={dummyImg2} className='dummyImg2'/>
        </div>
        </>
    );
};

export default Sidebar;