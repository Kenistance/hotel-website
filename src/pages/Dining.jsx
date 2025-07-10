import '../styles/Dining.css';


function Dining() {
    return (
      <div>
        <h2>Dining Experience</h2>
        <p>Explore a variety of local and international cuisines.</p>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ width: '250px' }}>
            <img src="/images/dinning-1.jpg" alt="Dining Area" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <h4>Buffet Dining</h4>
          </div>
        </div>
      </div>
    );
  }
  
  export default Dining;
  