import React from 'react';

import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

import { CTA } from './CTA';

import '../styles/about.css';
import ME from '../resources/me-about.jpg';





export const About = () => {
    return (
        <div className="container" id='about'>
            <h2>About Me</h2>

            <div className="about-container">
                <div className="about-me">
                    <div className="about-me-image">
                        <img src={ME} alt="webpage-owner" />
                    </div>
                </div>

                <div className="about-content">
                    <div className="about-cards">
                        <article className='about-card'>
                            <FaAward className='about-icon' />
                            <h5>Experience</h5>
                            <small>2+ Years Working</small>
                        </article>

                        <article className='about-card'>
                            <FiUsers className='about-icon' />
                            <h5>Clients</h5>
                            <small>2  so far</small>
                        </article>

                        <article className='about-card'>
                            <VscFolderLibrary className='about-icon' />
                            <h5>Projects</h5>
                            <small>10+ Completed</small>
                        </article>
                    </div>

                    <div className="about-text">
                        <span>Hi there!</span> <br />
                        I'm AbdulQuadir and I design websites for small bussinesses.
                    </div>
                    <CTA />

                </div>
            </div>

        </div>
    )
}
