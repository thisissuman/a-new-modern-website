import React from "react";
import "./footer.css";
import gpt3logo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Do ytou want to explore more</h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3logo} alt="gpt3logo" />
          <p>All rights resevered</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Social</p>
          <p>Countries</p>
          <p>Countries</p>
          <p>Countries</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Social</p>
          <p>Countries</p>
          <p>Countries</p>
          <p>Countries</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get In Touch</h4>
          <p>Social</p>
          <p>Countries</p>
          <p>Countries</p>
          <p>Countries</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>2023- GPT3 All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
