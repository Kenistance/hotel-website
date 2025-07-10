import '../styles/Home.css';

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <img src="/images/hotel.jpg" alt="Hotel Exterior" />
        <div className="hero-text">
          <h1>Welcome to BomaView Hotel</h1>
          <p>Your comfort, our passion.</p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <h2>Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature"> Luxurious rooms with sea views</div>
          <div className="feature"> Fine dining experiences</div>
          <div className="feature"> Relaxing spa and wellness services</div>
          <div className="feature"> Convenient location near top attractions</div>
        </div>
      </section>

      {/* Offers */}
      <section className="offers">
        <h2>Special Offers</h2>
        <div className="offer-cards">
          <div className="offer-card">
            <h3>Stay 3 Nights, Pay for 2</h3>
            <p>Limited time weekend offer for deluxe rooms.</p>
          </div>
          <div className="offer-card">
            <h3>Free Spa Day</h3>
            <p>Book a suite and enjoy a complimentary spa session.</p>
          </div>
        </div>
      </section>

      {/* Video Tour */}
      <section className="video-tour">
        <h2>Take a Virtual Tour</h2>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="Hotel Tour"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </section>

    </div>
  );
}

export default Home;
