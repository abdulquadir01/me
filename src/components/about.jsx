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
              <small>4+ Years Working</small>
            </article>

            <article className="about-card">
              <VscFolderLibrary className="about-icon" />
              <h5>Projects</h5>
              <small>25+ Completed</small>
            </article>
          </div>

          <div className="about-text">
            <span>Hey there!</span> <br />
            I build custom solutions for real world problems.
          </div>
          <CTA />
        </div>
      </div>
    </div>
  );
};
export default About;
