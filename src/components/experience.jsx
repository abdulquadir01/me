import { BsPatchCheckFill } from "react-icons/bs";

import "../styles/experience.css";

const frontendFrameworks = ["JavaScript", "ReactJs", "Bootstrap", "HTML & CSS"];
const backendFrameworks = [
  "Spring Boot",
  "Spring MVC",
  "Spring Data",
  "MySQL",
  "RESTful APIs",
  "NodeJs",
  "ExpressJs",
  "MongoDB",
  "AWS",
  "DevOps",
];

const Experience = () => {
  return (
    <div className="container" id="experience">
      <h2>Tools I work with</h2>

      <div className="experience-container">
        {/* FRONTEND */}
        <div className="exprience-frontend">
          <h3>Frontend Development</h3>
          <div className="experience-content">
            {frontendFrameworks.map((item, index) => (
              <article key={index} className="experience-details">
                <BsPatchCheckFill className="experience-details-icon" />
                <div>
                  <h4>{item}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* BACKEND */}
        <div className="exprience-backend">
          <h3>Backend Development</h3>
          <div className="experience-content">
            {backendFrameworks.map((item, index) => (
              <article key={index} className="experience-details">
                <BsPatchCheckFill className="experience-details-icon" />
                <div>
                  <h4>{item}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
