import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

import meImg from "../../assets/images/me.jpg";
import cherryImg from "../../assets/images/cherry_blossom.png";
import uwImg from "../../assets/images/uw_campus_yellow.png";
import seattleImg from "../../assets/images/seattle_skyline.png";
import codingImg from "../../assets/images/coding_setup.png";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <a
                    href={greeting.resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="download-link-button"
                  >
                    <Button text="See my resume" />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <div className="collage">
              <img className="tile top-left" src={uwImg} alt="UW campus" />
              <img className="tile top-right" src={seattleImg} alt="Seattle skyline" />
              <img className="tile bottom-left" src={cherryImg} alt="Cherry blossoms" />
              <img className="tile bottom-right" src={codingImg} alt="Coding setup" />
              <img className="center-photo" src={meImg} alt="Akshay Ravi" />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
