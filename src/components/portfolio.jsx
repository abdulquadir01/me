import React from 'react';

import '../styles/portfolio.css';

import pi1 from '../resources/pi1.webp';
import pi2 from '../resources/pi2.webp';
import pi3 from '../resources/pi3.webp';
import pi4 from '../resources/pi4.webp';
import pi5 from '../resources/pi5.webp';
import pi6 from '../resources/pi6.webp';


const data = [
    {
        id: 1,
        image: pi1,
        title: 'Isometric programming landing page',
        github: 'https://github.com',
        liveDemo: 'https://dribbble.com/shots/17655929-Isometric-programming-landing-page-template'
    },
    {
        id: 2,
        image: pi2,
        title: 'Developer tools: landing page',
        github: 'https://github.com',
        liveDemo: 'https://dribbble.com/shots/17558437-Developer-tools-landing-page'
    },
    {
        id: 3,
        image: pi3,
        title: 'Shoe Store Ecommerce Landing Page',
        github: 'https://github.com',
        liveDemo: 'https://dribbble.com/shots/17654715-Shoe-Store-Ecommerce-Landing-Page'
    },
    {
        id: 4,
        image: pi4,
        title: 'Wedding Photographer Landing Page',
        github: 'https://github.com',
        liveDemo: 'https://dribbble.com/shots/17657320-Wedding-Photographer-Landing-Page'
    },
    {
        id: 5,
        image: pi5,
        title: 'Job Finder Website',
        github: 'https://github.com',
        liveDemo: 'https://dribbble.com/shots/17654465-Job-Finder-Website'
    },
    {
        id: 6,
        image: pi6,
        title: 'Nutrition Tracker Dashboard',
        github: 'https://github.com',
        liveDemo: 'https://dribbble.com/shots/17655797-Nutrition-Tracker-Dashboard'
    }
]



export const Portfolio = () => {
    return (
        <div className="container" id="portfolio">
            <h2>Recent Projects</h2>

            <div className="portfolio-container">
                {
                    data.map(({ id, image, title, github, liveDemo }) => {
                        return (
                            <article key={id} className="portfolio-item">
                                <div className="portfolio-item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio-item-cta">
                                    <a href={github} target='_blank' className='btn' rel="noreferrer">Github</a>
                                    <a href={liveDemo} target='_blank' className='btn btn-primary' rel="noreferrer">Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>

        </div>
    )
}
