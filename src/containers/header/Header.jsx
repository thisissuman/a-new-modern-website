import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">
        Lets's Build Something Amazing with GPT-3 OpenAI
      </h1>
      <p>
        Unleash the potential of ChatGPT to craft extraordinary websites. Dive
        into the world of innovative conversation design, creating engaging and
        intelligent user experiences. Build something amazing as you weave the
        magic of ChatGPT into your web projects
      </p>
      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" className="" />
        <button id="getStartedButton" type="button">
          Get Started
        </button>
      </div>
      <div className="gpt3__header-content__people">
        <img src={people} alt="" />
        <p>1000 people tried to access a visti in last 23 hours</p>
      </div>
    </div>
    <div className="gpt3__header-image">
      <img src={ai} alt="ai" />
    </div>
  </div>
);

export default Header;
