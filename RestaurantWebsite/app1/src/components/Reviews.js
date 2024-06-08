import React, { useState, useEffect } from 'react';
import './outer.css';
import review5Image from './review5.jpg';
import reviews2Image from './review2.jpg';
import reviews3Image from './review3.jpg';

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      image: review5Image,
      text: 'Amazing food and great service!<br>- Rajinikanth',
    },
    {
      image: reviews2Image,
      text: 'A wonderful dining experience.<br>- Allu Arjun',
    },
    {
      image: reviews3Image,
      text: 'Highly recommend this restaurant!<br>- Virat kohli',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Celeb Reviews</h1>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial ${index === activeIndex ? 'active' : ''}`}
          >
            <div
              className="imaga"
              style={{ backgroundImage: `url(${testimonial.image})` }}
            >
              <p
                className="text-center font-weight-bold font-italic"
                dangerouslySetInnerHTML={{ __html: testimonial.text }}
              ></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;