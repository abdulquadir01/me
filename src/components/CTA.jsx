import React from 'react';
import resume from '../resources/AbdulQuadir_Resume.pdf';

import '../styles/cta.css';

export const CTA = () => {
  return (
    <div className="cta">
        <a href={resume} download className="btn">Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Connect</a> 
    </div>
  )
}
