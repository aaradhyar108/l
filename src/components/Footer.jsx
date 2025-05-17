import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaGoodreads } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#books">Books</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p><FaEnvelope /> contact@booknook.com</p>
          <p><FaPhone /> +1 (555) 123-4567</p>
          <p><FaMapMarkerAlt /> 123 Library St, Bookville</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaGoodreads /></a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2023 BookNook Online Library. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;