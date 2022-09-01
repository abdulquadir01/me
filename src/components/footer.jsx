 import React from 'react';
import '../styles/footer.css';



export const Footer = ()=>{
    return(
        <footer>
            <a href="#" className='footer__logo'>AbdulQuadir</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Conatact</a></li>
            </ul>

            <div className="footer__copyright">
                <small> <strong> &copy; Abdul Quadir. All right reserved </strong></small>
            </div>

        </footer>
    )
}
