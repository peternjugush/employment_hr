import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={footerContentStyle}>
        <div style={footerSectionStyle}>
          <div style={contactStyle}>
            <span>Contact Us:</span>
            <p>hrmanagement@gmail.com</p>
          </div>
        </div>
        <div style={footerSectionStyle}>
          <h2>Quick Links</h2>
          <ul style={listStyle}>
            <li><a href="">Home</a></li>
            <li><a href="about">About</a></li>
            <li><a href="registrater">Register</a></li>
            <li><a href="payrollform">PayrollForm</a></li>
          </ul>
        </div>
        <div style={footerSectionStyle}>
          <h2>Follow Us</h2>
          <div style={socialLinksStyle}>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div style={footerBottomStyle}>
        &copy; 2024 hr management| Designed by [peter]
      </div>
    </footer>
  );
};

export default Footer;

const footerStyle = {
  background: '#343434',
  color: 'white',
  padding: '50px 0',
};

const footerContentStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
};

const footerSectionStyle = {
  flex: 1,
  marginRight: '20px',
};

const contactStyle = {
  marginTop: '15px',
};

const listStyle = {
  listStyle: 'none',
  padding: 0,
};

const socialLinksStyle = {
  display: 'flex',
};

const footerBottomStyle = {
  marginTop: '20px',
  textAlign: 'center',
  background: '#444',
  padding: '10px 0',
};
