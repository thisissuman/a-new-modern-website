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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          accusantium sit dolorum beatae dolorem repellat soluta, sapiente
          debitis vel atque nam vero velit quis minus quasi modi alias quae
          expedita.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
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
