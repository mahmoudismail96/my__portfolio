import React from "react";
import "./Home.css";
import img from "../../assets/intro-section-illustration.png";
import TrackVisibility from "react-on-screen";
import "animate.css";
const Home = () => {
  return (
    <section id="#home" className="home">
      <div className="home_container">
        <div className="home_headr">
          <h1>
            Hey!, I'm
            <br /> Mahmoud Ismail
          </h1>

          <div>
            <p>
              I'm
              <br /> <span className="span">Front-End </span>React Developer
            </p>
          </div>

          <span className="welcome">Welcome to my Portfolio</span>
        </div>

        <div className="imd_container">
          <img src={img} alt="img" />
        </div>
      </div>
    </section>
  );
};

export default Home;
