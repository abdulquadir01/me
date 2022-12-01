import React from 'react';

import { BsPatchCheckFill } from 'react-icons/bs';

import '../styles/experience.css';




export const Experience = () => {
    return (
        <div className="container" id="experience">
            <h2>What I work with</h2>

            <div className="experience-container">

                {/* FRONTEND */}
                <div className="exprience-frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience-content">
                        <article className="experience-details">
                            <BsPatchCheckFill className='experience-details-icon' />
                            <div>
                                <h4>JavaScript</h4>
                            </div>
                        </article>
                        <article className="experience-details">
                            <BsPatchCheckFill className='experience-details-icon' />
                            <div>
                                <h4>ReactJs</h4>
                            </div>
                        </article>
                        <article className="experience-details">
                            <BsPatchCheckFill className='experience-details-icon' />
                            <div>
                                <h4>React Bootstrap</h4>
                            </div>
                        </article>
                        <article className="experience-details">
                            <BsPatchCheckFill className='experience-details-icon' />
                            <div>
                                <h4>HTML &amp; CSS</h4>
                            </div>
                        </article>
                    </div>
                </div>

                {/* BACKEND */}
                <div className="exprience-backend">
                    <h3>Backend Development</h3>
                    <div className="experience-content">
                        <article className="experience-details">
                            <BsPatchCheckFill className='experience-details-icon' />
                            <div>
                                <h4>Spring</h4>
                            </div>
                        </article>
                        <article className="experience-details">
                            <BsPatchCheckFill className='experience-details-icon' />
                            <div>
                                <h4>Spring Boot</h4>
                            </div>
                        </article>
                        <article className="experience-details">
                            <BsPatchCheckFill className='experience-details-icon' />
                            <div>
                                <h4>Node</h4>
                            </div>
                        </article>
                        <article className="experience-details">
                            <BsPatchCheckFill className='experience-details-icon' />
                            <div>
                                <h4>Express</h4>
                            </div>
                        </article>
                        <article className="experience-details">
                            <BsPatchCheckFill className='experience-details-icon' />
                            <div>
                                <h4>MySQL</h4>
                            </div>
                        </article>
                        <article className="experience-details">
                            <BsPatchCheckFill className='experience-details-icon' />
                            <div>
                                <h4>MongoDB</h4>
                            </div>
                        </article>
                        <article className="experience-details">
                            <BsPatchCheckFill className='experience-details-icon' />
                            <div>
                                <h4>AWS</h4>
                            </div>
                        </article>
                        <article className="experience-details">
                            <BsPatchCheckFill className='experience-details-icon' />
                            <div>
                                <h4>REST APIs</h4>
                            </div>
                        </article>
                    </div>

                </div>


            </div>
        </div>

    );
}
