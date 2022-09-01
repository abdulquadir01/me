import React, {useState} from 'react';

import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai';
import {BiBook, BiMessageDetail} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';

import '../styles/navbar.css';




export const Navbar = ()=>{
    const [activeNav, setActiveNav] = useState('');
    return(
        <nav>
            <a href="#" onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
            <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
            <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
            <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
            <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageDetail/></a>
        </nav>
    )
}
