import React from "react";
import "./features.css";
import { Feature } from "../../components";
const featureData = [
  {
    title: "Improving and Distrus instantly",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolor ",
  },
  {
    title: "Become and Distrus instantly",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolor ",
  },
  {
    title: "Fine and Distrus instantly",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolor ",
  },
  {
    title: "Ollala and Distrus instantly",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolor ",
  }
];
const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen
        </h1>
        <p>Request Early Access To Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featureData.map((data, index) => (
           <Feature title={data.title} text={data.text} key={index}></Feature>
        ))}
      </div>
    </div>
  );
};

export default Features;
