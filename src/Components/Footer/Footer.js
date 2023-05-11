import React from "react";
import "./Footer.css";
import { BsGithub } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_contaenr">
        <div className="footer_headr">
          <h3>Mahmoud Ismail</h3>
        </div>
        <div className="icon">
          <div className="icon_1">
            <a href="https://github.com/mahmoudismail96" target="_blank">
              <BsGithub />
            </a>
          </div>
          <div className="icon_2">
            <a
              href="https://www.linkedin.com/in/mahmoud-ali-28417022a/"
              target="_blank"
            >
              <SiLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
