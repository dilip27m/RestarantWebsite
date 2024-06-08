import React from 'react';
import './outer.css';
import aboutImage from './about.jpg';

const About = () => {
  return (
    <div id="about">
      <div id="about_row">
        <div className="about_col">
          <h1>About Us</h1>
          <p>
            Welcome to Amritam, your go-to destination for a delightful dining experience. Located in the city's vibrant
            center, our restaurant boasts a menu rich with globally inspired dishes, all prepared with fresh,
            locally-sourced ingredients. Whether you're in the mood for a hearty brunch, a quick lunch, or an elegant
            dinner, our cozy and stylish setting is perfect for any occasion. Join us at Amritam, where every meal is a
            celebration of flavor and community.
          </p>
        </div>
        <div className="about_col">
          <div id="about_img">
            <img src={aboutImage} alt="About" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;