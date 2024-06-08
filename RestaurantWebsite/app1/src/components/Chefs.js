import React from 'react';
import './outer.css';
import varunImage from './varun.jpg';
import venkatImage from './venkat.jpg';
import rishitImage from './rishit.jpg';
import chaitanyaImage from './chaitanya.jpg';

const ChefSection = () => {
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h1>Chefs of The Website</h1>
      </div>
      <div className="containere">
        <a href="/varun.html" id="resume1" target="_blank" rel="noopener noreferrer">
          <img src={varunImage} alt="chef" />
        </a>
        <a href="/venkat.html" target="_blank" id="resume2">
          <img src={venkatImage} alt="chef" />
        </a>
        <a href="/rishit.html" id="resume3" target="_blank" rel="noopener noreferrer">
          <img src={rishitImage} alt="chef" />
        </a>
        <a href="/chaitanya.html" id="resume4" target="_blank" rel="noopener noreferrer">
          <img src={chaitanyaImage} alt="chef" />
        </a>
      </div>
    </div>
  );
};

export default ChefSection;