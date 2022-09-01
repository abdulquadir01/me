import React from 'react';

import {CTA} from './CTA';
import {HeaderSocials} from './HeaderSocials';

import '../../styles/header.css';
import dp1 from '../../resources/dp1.png';




export const Header = () => {
    return (
        <header>
            <div className="container header__container">
                {/* <h5>Hello I'm</h5> */}
                <h1>AbdulQuadir</h1>
                <h5 className="text-light">Backend Developer</h5>
                <CTA />
                <HeaderSocials />

                <div className="dp-avatar">
                    <img src={dp1} alt="me" />
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>

            </div>
        </header>
    )
}
