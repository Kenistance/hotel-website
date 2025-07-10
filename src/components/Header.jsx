import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">BomaView</Link>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>

        <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/rooms" onClick={toggleMenu}>Rooms</Link>
          <Link to="/dining" onClick={toggleMenu}>Dining</Link>
          <Link to="/amenities" onClick={toggleMenu}>Amenities</Link>
          <Link to="/meetings" onClick={toggleMenu}>Meetings</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
