import React, { useState } from 'react';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    people: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const errors = {};

    // Name validation
    if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters long';
    }

    // Email validation
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }

    // Date validation
    const selectedDate = new Date(formData.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set time to the beginning of the day
    if (selectedDate < today) {
      errors.date = 'Date cannot be in the past';
    }

    // People validation
    const people = parseInt(formData.people);
    if (isNaN(people) || people < 1 || people > 20) {
      errors.people = 'Number of people must be between 1 and 20';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Submit form data
      console.log(formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div id="reservation">
      <section className="reservation" id="contact">
        <div className="section__container reservation__container">
          <h3>RESERVATION</h3>
          <h2 className="section__header">BOOK YOUR TABLE</h2>
          <form id="reservationForm" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="NAME"
              value={formData.name}
              onChange={handleChange}
              required
              minLength="2"
            />
            {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
            <input
              type="email"
              name="email"
              placeholder="EMAIL"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
            <input
              type="date"
              name="date"
              placeholder="DATE"
              value={formData.date}
              onChange={handleChange}
              required
            />
            {errors.date && <span style={{ color: 'red' }}>{errors.date}</span>}
            <input
              type="time"
              name="time"
              placeholder="TIME"
              value={formData.time}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="people"
              placeholder="PEOPLE"
              value={formData.people}
              onChange={handleChange}
              required
              min="1"
              max="20"
            />
            {errors.people && <span style={{ color: 'red' }}>{errors.people}</span>}
            <button className="btn" type="submit">
              FIND TABLE
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Reservation;