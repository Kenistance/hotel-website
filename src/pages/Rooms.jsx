import '../styles/Rooms.css';

function Rooms() {
  const rooms = [
    {
      name: "Superior Room",
      price: "$100/night",
      image: "/images/room1.png",
      features: [
        "24-hour front desk", "Wake up calls", "Disabled Access Facilities", "Luggage storage",
        "Bar / Lounge", "Dining/Restaurants", "Room service - 24hr", "Cafe", "Business center",
        "Credit Cards Accepted", "Free Wi-Fi", "Spa - Charged"
      ]
    },
    {
      name: "Executive Suite",
      price: "$180/night",
      image: "/images/room1.png",
      features: [
        "24-hour front desk", "Wake up calls", "Disabled Access Facilities", "Luggage storage",
        "Bar / Lounge", "Dining/Restaurants", "Room service - 24hr", "Cafe", "Business center",
        "Credit Cards Accepted", "Free Wi-Fi", "Spa - Charged"
      ]
    },
    {
      name: "Deluxe Suite",
      price: "$150/night",
      image: "/images/room1.png",
      features: [
        "24-hour front desk", "Wake up calls", "Disabled Access Facilities", "Luggage storage",
        "Bar / Lounge", "Dining/Restaurants", "Room service - 24hr", "Cafe", "Business center",
        "Credit Cards Accepted", "Free Wi-Fi", "Spa - Charged"
      ]
    },
    {
      name: "Penthouse",
      price: "$250/night",
      image: "/images/room-4.jpg",
      features: [
        "24-hour front desk", "Wake up calls", "Disabled Access Facilities", "Luggage storage",
        "Bar / Lounge", "Dining/Restaurants", "Room service - 24hr", "Cafe", "Business center",
        "Credit Cards Accepted", "Free Wi-Fi", "Spa - Charged"
      ]
    }
  ];

  return (
    <div className="rooms-section">
      <h2>Our Rooms</h2>
      <div className="room-list">
        {rooms.map((room, i) => (
          <section key={i} className="room-slide">
            <img src={room.image} alt={room.name} className="room-full-image" />
            <div className="room-floating-card">
              <h3>{room.name}</h3>
              <p className="room-price">{room.price}</p>
              <ul>
                {room.features.map((feat, j) => <li key={j}>{feat}</li>)}
              </ul>
              <a
                className="book-button"
                href="https://theconcordhotels.securedreservations.com/reservation?guest=ac1%3D2&bID=b274e968-695b-43c7-8845-18611b554eb0&cID=e9278412-d046-4c21-afa6-bcb6ab749629&checkInDate=2025-07-10&checkOutDate=2025-07-11"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Now
              </a>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Rooms;
