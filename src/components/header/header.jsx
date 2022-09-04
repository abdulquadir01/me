import React from 'react';

import {HeaderSocials} from './HeaderSocials';

import '../../styles/header.css';
import dp1 from '../../resources/dp1.png';




export const Header = () => {
    return (
        <div className="container" id='header'>
            <div className="header-container">
                <h1>AbdulQuadir</h1>
                <h5 className="text-light">Backend Developer</h5>
                
                <HeaderSocials />

                <div className="dp-avatar">
                    <img src={dp1} alt="me" />
                </div>

                <a href="#contact" className='scroll-down'>Scroll Down</a>

            </div>
        </div>
    )
}
