import '../styles/Footer.css';
function Footer() {
    return (
      <footer style={{ padding: '1rem', background: '#f5f5f5', marginTop: '2rem', textAlign: 'center' }}>
        <p>© {new Date().getFullYear()} Hotel BomaView. All rights reserved.</p>
      </footer>
    );
  }
  
  export default Footer;
  