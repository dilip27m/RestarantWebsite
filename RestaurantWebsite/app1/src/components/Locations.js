import React from 'react';
import hydLocationImage from './hyd_location.jpg';
import coimbatoreLocationImage from './coimbatore_location.jpg';
import amritapuriLocationImage from './amritapuri_location_2.jpg';

const Location = () => {
  return (
    <div id="locations">
      <h1>Our Locations</h1>
      <div className="flip-container">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p className="title">HYDERABAD</p>
            </div>
            <div className="flip-card-back">
              <img src={hydLocationImage} alt="Hyderabad Location" />
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p className="title">COIMBATORE</p>
            </div>
            <div className="flip-card-back">
              <img src={coimbatoreLocationImage} alt="Coimbatore Location" />
            </div>
          </div>
        </div>
        <div className="flip-container">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p className="title">AMRITAPURI</p>
              </div>
              <div className="flip-card-back">
                <img src={amritapuriLocationImage} alt="AMRITAPURI" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;