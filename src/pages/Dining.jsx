import { useEffect, useState } from 'react';
import '../styles/Dining.css';

function Dining() {
  const truncate = (text, limit = 200) =>
    text.length > limit ? text.slice(0, limit).trim() + "..." : text;

  const restaurants = [
    {
      name: "Bonhomie Restaurant",
      images: [
        "/images/drinks.png",
        "/images/drinks.png",
        "/images/drinks.png",
        "/images/drinks.png"
      ],
      description:
        "Bonhomie offers a warm and friendly atmosphere with contemporary Continental gourmet dishes, fine wines, and vibrant terrace dining from 6:00am to Midnight.",
      policy:
        "Upscale Business Casual. No swimwear, midriff tops, or undergarment exposure allowed."
    },
    {
      name: "Umami Oriental",
      images: [
        "/images/drinks.png",
        "/images/umami-2.jpg",
        "/images/drinks.png",
        "/images/drinks.pngg"
      ],
      description:
        "Experience savory Asian fusion — Chinese, Japanese, Thai, and Korean flavors come together at Umami, open daily from 11:00am to 10:00pm.",
      policy:
        "Smart Casual attire encouraged. No beachwear, very short shorts, or exposed midriffs. Guests are encouraged to dress appropriately in keeping with the restaurant’s ambiance and elegance."
    },
    {
      name: "Curry Flavors",
      images: [
        "/images/curry-1.jpg",
        "/images/curry-2.jpg",
        "/images/curry-3.jpg",
        "/images/curry-4.jpg"
      ],
      description:
        "Savor rich North and South Indian dishes at Curry Flavors, where traditional recipes are crafted with modern presentation, open 11:00am to 10:00pm. The chefs combine royal Indian heritage with contemporary plating.",
      policy:
        "Guests are expected to wear smart casual. No exposed undergarments, swimwear, or midriff tops."
    },
    {
      name: "Aroma Mocha",
      images: [
        "/images/aroma-1.jpg",
        "/images/aroma-2.jpg",
        "/images/aroma-3.jpg",
        "/images/aroma-4.jpg"
      ],
      description:
        "Grab fresh cakes, pastries, and specialty drinks made daily from the Bonhomie kitchen — the perfect casual treat spot.",
      policy:
        "Casual attire welcomed. No swimwear or revealing clothing permitted indoors."
    },
  ];

  const [indexes, setIndexes] = useState(restaurants.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexes(prev =>
        prev.map((val, i) => (val + 2) % restaurants[i].images.length)
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [restaurants]);

  return (
    <div className="dining-section">
      <h2>Dining Experience</h2>
      <p className="intro-text">
        Explore the wide choice of cuisine at BomaView — from fine dining to international favorites and authentic Indian and Asian flavors.
      </p>

      <div className="dining-list">
        {restaurants.map((rest, i) => {
          const activeIndexes = [indexes[i], (indexes[i] + 1) % rest.images.length];
          return (
            <div key={i} className="dining-card">
              <div className="image-column">
                {activeIndexes.map((idx, k) => (
                  <img
                    key={k}
                    src={rest.images[idx]}
                    alt={`${rest.name} ${idx + 1}`}
                    className="image-item"
                  />
                ))}
              </div>
              <div className="indicator-row">
                {rest.images.map((_, idx) => (
                  <span
                    key={idx}
                    className={`circle ${indexes[i] === idx || (indexes[i] + 1) % rest.images.length === idx ? 'active' : ''}`}
                    onClick={() => setIndexes(prev => {
                      const copy = [...prev];
                      copy[i] = idx;
                      return copy;
                    })}
                  ></span>
                ))}
              </div>
              <div className="dining-details">
                <h3>{rest.name}</h3>
                <p className="description">{truncate(rest.description)}</p>
                <p className="policy-label">Guest Attire Policy</p>
                <p className="policy-text">{truncate(rest.policy)}</p>
                {(rest.description.length > 200 || rest.policy.length > 200) && (
                  <a href="#" className="read-more">Read More</a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dining;
