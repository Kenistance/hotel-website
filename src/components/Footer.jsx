import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h4>About</h4>
          <Link to="/about">Our Story</Link>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: info@bomaview.com</p>
          <p>Phone: +254 711 000000</p>
          <p>Location: Diani Beach, Kenya</p>
        </div>

        <div className="footer-section social-icons">
          <h4>Follow Us</h4>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Hotel BomaView. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
