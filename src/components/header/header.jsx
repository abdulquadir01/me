import { HeaderSocials } from "./HeaderSocials";

import "../../styles/header.css";
import dp1 from "../../resources/dp1.png";

const Header = () => {
  return (
    <div className="container" id="header">
      <div className="header-container">
        <h1>Abdul Quadir</h1>
        <h3 className="text-light">Backend Developer</h3>

        <HeaderSocials />

        <div className="dp-avatar">
          <img src={dp1} alt="me" />
        </div>

        <a href="#contact" className="scroll-down">
          <strong>Scroll Down</strong>
        </a>
      </div>
    </div>
  );
};

export default Header;
