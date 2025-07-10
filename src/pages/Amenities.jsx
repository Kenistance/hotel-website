import '../styles/Amenities.css';

function Amenities() {
  const amenities = [
    {
      name: "Swimming Pool",
      image: "/images/pool-1.jpg",
      description: "Take a refreshing dip or lounge poolside at our serene outdoor pool, perfect for relaxation after a long day."
    },
    {
      name: "Spa & Wellness",
      image: "/images/spa1.jpg",
      description: "Rejuvenate your body and mind with our professional spa treatments, massages, and wellness therapies."
    }
  ];

  return (
    <div className="amenities-section">
      <h2>Our Amenities</h2>
      <p>At BomaView Hotel, we go beyond accommodation to provide exceptional amenities that elevate your stay with comfort and class.</p>

      <div className="amenity-grid">
        {amenities.map((item, i) => (
          <div key={i} className="amenity-card">
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p className="amenity-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Amenities;
