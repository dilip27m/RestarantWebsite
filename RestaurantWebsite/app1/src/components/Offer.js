import React, { useState, useEffect } from 'react';

const Offer = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isOfferEnded, setIsOfferEnded] = useState(false);

  useEffect(() => {
    const endDate = new Date('2025-05-31T23:59:59');
    const timer = setInterval(() => {
      const now = new Date();
      const remaining = endDate - now;

      if (remaining < 0) {
        setIsOfferEnded(true);
        clearInterval(timer);
      } else {
        const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

        setTimeRemaining({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="offer-container">
      <h2>OFFER!!</h2>
      <p>As we are a newly opened restaurant we are giving out an 50% off on our dinner menu. Hurry up offer ends in: </p>
      {isOfferEnded ? (
        <div>Offer Ended!</div>
      ) : (
        <div id="countdown" className="countdown-container">
          <div>
            <div className="countdown-item">{timeRemaining.days}</div>
            <div className="countdown-item-label">Days</div>
          </div>
          <div>
            <div className="countdown-item">{timeRemaining.hours}</div>
            <div className="countdown-item-label">Hours</div>
          </div>
          <div>
            <div className="countdown-item">{timeRemaining.minutes}</div>
            <div className="countdown-item-label">Minutes</div>
          </div>
          <div>
            <div className="countdown-item">{timeRemaining.seconds}</div>
            <div className="countdown-item-label">Seconds</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Offer;