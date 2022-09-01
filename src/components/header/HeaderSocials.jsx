import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FaHackerrank} from 'react-icons/fa';


export const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/abdulquadir01/" target='_blank' rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/abdulquadir01" target='_blank' rel="noreferrer"><FaGithub/></a>
        <a href="https://www.hackerrank.com/AbdulQuadir" target='_blank' rel="noreferrer"><FaHackerrank/></a>
    </div>
  )
}
