import React from 'react';

const Contact = () => {
  return (
    <div id="contact">
      <h1 id="section">Contact</h1>
      <div id="contact_row">
        <div className="contact_col">
          <div>
            <p>
              <i className="fa fa-map-marker"></i>
              Vrindavan Hostel, Amritapuri Ashramam.
            </p>
            <p>
              <a href="mailto:amritam@yahoo.com">
                <i className="fa fa-envelope"></i>
                amritam@yahoo.com
              </a>
            </p>
            <p>
              <a href="tel:+918125640607">
                <i className="fa fa-phone-square"></i>
                +918125640607
              </a>
            </p>
            <h3>Follow us</h3>
            <p id="social">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-instagram fa-2x"></i>
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-facebook-official fa-2x"></i>
              </a>
              <a href="https://x.com/login" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-twitter fa-2x"></i>
              </a>
              <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-youtube-square fa-2x"></i>
              </a>
            </p>
          </div>
        </div>
        <div className="contact_col">
          <form>
            <h2>Get in touch</h2>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea rows="6" placeholder="Type Feedback"></textarea>
            <button>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;