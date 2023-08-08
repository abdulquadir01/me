import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

import "../styles/about.css";
import ME from "../resources/aboutme-img.jpg";

import CTA from "./CTA";

const About = () => {
  return (
    <div className="container" id="about">
      <h2>About Me</h2>

      <div className="about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={ME} alt="developer_image" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about-card">
              <VscFolderLibrary className="about-icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <div className="about-text">
            <span>Hey there!</span> <br />
            I'm Abdul Quadir and I like to build things for the web.
          </div>

          <CTA />
        </div>
      </div>
    </div>
  );
};
export default About;
