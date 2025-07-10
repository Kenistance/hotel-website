import { useEffect, useState } from 'react';
import '../styles/Home.css';

function Home() {
  const heroImages = [
    "/images/drinks.png",
    "/images/private.png",
    "/images/mboma.jpg",
    "/images/room1.png",
    "/images/view-1.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">

      {/* Top Contact Info */}
      <div className="top-bar">
        <p>Email: info@bomaview.com | +254 711 000000 | +254 722 123456</p>
      </div>

      {/* Hero Section with rotating images */}
      <section className="hero">
        <img src={heroImages[currentIndex]} alt="Hotel Scene" key={currentIndex} />
        <div className="hero-text">
          <h1>Welcome to BomaView Hotel</h1>
          <p>Your comfort, our passion.</p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <h2>Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature">Luxurious rooms with sea views</div>
          <div className="feature">Fine dining experiences</div>
          <div className="feature">Relaxing spa and wellness services</div>
          <div className="feature">Convenient location near top attractions</div>
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

      {/* Book Now */}
      <section className="book-now">
        <h2>Ready to Stay With Us?</h2>
        <a
          href="https://theconcordhotels.securedreservations.com/reservation?guest=ac1%3D2"
          className="book-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book Now
        </a>
      </section>

      {/* Guest Testimonials */}
      <section className="testimonials">
        <h2>What Guests Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial">
            <p>"Absolutely loved my stay — the spa and food were top notch!"</p>
            <strong>- Grace M., Nairobi</strong>
          </div>
          <div className="testimonial">
            <p>"The staff were friendly and the rooms had a perfect ocean view."</p>
            <strong>- John K., Mombasa</strong>
          </div>
          <div className="testimonial">
            <p>"I’ll be coming back again. The atmosphere was peaceful and classy."</p>
            <strong>- Fatuma L., Tanzania</strong>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
