import React from "react";
import { Fragment } from "react";
import { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Logo from "../../assets/logo.svg";
// BEM --> Block element modifier

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#wgpt3">What is GPT</a>
    </p>
    <p>
      <a href="#possibility">Open AI</a>
    </p>
    <p>
      <a href="#features">Case Studies</a>
    </p>
    <p>
      <a href="#blog">Library</a>
    </p>
  </>
);
const Navbar = () => {
  const [toggleMenu, settoggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu></Menu>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign Up</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="white"
            size={27}
            onClick={() => settoggleMenu(false)}
          ></RiCloseLine>
        ) : (
          <RiMenu3Line
            color="white"
            size={27}
            onClick={() => settoggleMenu(true)}
          ></RiMenu3Line>
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu></Menu>
              <div className="gpt3__navbar-menu_container-links-sign">
                  <p>Sign In</p>
                  <button type="button">Sign Up</button>
                </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
