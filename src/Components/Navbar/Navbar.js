import React, { useState } from "react";
import "./Navbar.css";
import { Links } from "../../data";
import { BsGithub } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { FiMenu } from "react-icons/fi";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [shwoMenu, isShwoMenu] = useState(false);
  return (
    <div className="headr">
      <header>
        <div className="logo">
          <h2>
            <a href="#home">Mahmoud</a>
          </h2>
        </div>
        <nav style={shwoMenu ? { display: "block" } : { display: "none" }}>
          <ul>
            {Links.map(({ id, text }) => {
              return (
                <li key={id}>
                  <a href={id}>{text}</a>
                </li>
              );
            })}
          </ul>
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
          <div className="lets_connect">
            <a href="#contact">Let's contact</a>
          </div>
        </nav>
        <div className="menu" onClick={() => isShwoMenu(!shwoMenu)}>
          {shwoMenu ? <ImCross /> : <FiMenu />}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
