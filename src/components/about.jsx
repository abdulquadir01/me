import React from 'react';

import '../styles/about.css';
import ME from '../resources/me-about.jpg';

import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';




export const About = () => {
    return (
        <section id='about'>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>1+ Years Working</small>
                        </article>

                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>2  so far</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>15+ Completed</small>
                        </article>
                    </div>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Ratione obcaecati a earum modi magnam esse expedita aliquam
                        autem quibusdam est fugit, accusamus atque consequatur illum
                        vero eum dicta. Tempore, voluptate?
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk </a>

                </div>
            </div>

        </section>
    )
}
