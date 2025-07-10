import '../styles/About.css';

function About() {
  return (
    <div className="about-section">
      <h2>About BomaView Hotel</h2>
      <p>
        Nestled along the serene Diani coastline, BomaView Hotel is your escape to comfort,
        elegance, and unforgettable service. Whether you are here for business, leisure, or
        a quiet retreat, our mission is to make every moment memorable.
      </p>

      <div className="about-highlights">
        <div className="highlight">
          <h4>Our Vision</h4>
          <p>To be the leading hospitality destination in the region, known for unmatched comfort and warm service.</p>
        </div>

        <div className="highlight">
          <h4>Our Values</h4>
          <p>We value excellence, authenticity, and heartfelt service in everything we do.</p>
        </div>

        <div className="highlight">
          <h4>Our Promise</h4>
          <p>From check-in to departure, we are committed to ensuring your stay is smooth, restful, and inspiring.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
