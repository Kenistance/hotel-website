import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/rooms">Rooms</Link>
        <Link to="/dining">Dining</Link>
        <Link to="/amenities">Amenities</Link>
        <Link to="/activities">Activities</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
