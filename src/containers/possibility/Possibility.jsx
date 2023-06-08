import React from 'react'
import './possibility.css';
import possibilityImage from './../../assets/possibility.png'
const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibilityImage" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">The possibility are beyond your imagination</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quaerat placeat reiciendis alias odio dolorum deserunt, quibusdam aliquid vero eaque officia est quis ipsa quas consequatur accusamus sint voluptate quam!</p>
        <h4>Request for Early Access</h4>
      </div>
    </div>
  )
}

export default Possibility