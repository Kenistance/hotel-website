import '../styles/Rooms.css';

function Rooms() {
  const rooms = [
    {
      name: "Deluxe Room",
      price: "$120/night",
      image: "/images/room-1.jpg",
      features: ["2 beds", "Wi-Fi", "AC", "Balcony"]
    },
    {
      name: "Executive Suite",
      price: "$180/night",
      image: "/images/room-2.jpg",
      features: ["King bed", "Sea view", "Mini bar", "Lounge area"]
    },
    {
      name: "Standard Room",
      price: "$90/night",
      image: "/images/room-3.jpg",
      features: ["1 bed", "Wi-Fi", "Fan", "TV"]
    }
  ];

  return (
    <div className="rooms-section">
      <h2>Our Rooms</h2>
      <div className="room-grid">
        {rooms.map((room, i) => (
          <div key={i} className="room-card">
            <img src={room.image} alt={room.name} />
            <h3>{room.name}</h3>
            <p>{room.price}</p>
            <ul>
              {room.features.map((feat, j) => <li key={j}>{feat}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rooms;
