import "../styles/portfolio.css";

import { projects } from "../resources/data";


const Portfolio = () => {
  return (
    <div className="container" id="portfolio">
      <h2>Some of my Projects</h2>

      <div className="portfolio-container">
        {projects.map((project) => {

          const { id, image, title, github, liveDemo } = project;
          
          return (
            <article key={id} className="portfolio-item">
              <div className="portfolio-item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio-item-cta">
                <a
                  href={github}
                  target="_blank"
                  className="btn"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={liveDemo}
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
