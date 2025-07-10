import '../styles/Meetings.css';

function Meetings() {
  return (
    <div className="meetings-section">
      <h2>Meetings & Events</h2>
      <p>We will be delighted to make your special event memorable.</p>

      <section className="intro">
        <p>
          Our goal is to help you fulfill the objective of each meeting or corporate event you plan. With personalized service, we listen carefully and make full arrangements to deliver a stress-free experience. From small executive meetings to private celebrations, we are committed to excellent service before, during, and after your event.
        </p>
      </section>

      <div className="meeting-grid">

        <div className="meeting-card">
          <img src="/images/hall-1.jpg" alt="Main Conference Hall" />
          <h4>Main Conference Hall</h4>
          <p>
            A spacious, flexible venue for up to 200 guests. Perfect for conferences, workshops, and social gatherings. Includes projector, sound system, and catering.
          </p>
        </div>

        <div className="meeting-card">
          <img src="/images/boardroom.jpg" alt="Executive Boardroom" />
          <h4>Executive Boardroom</h4>
          <p>
            A quiet, fully equipped room ideal for strategic meetings and private sessions. Comfortably fits up to 20 participants.
          </p>
        </div>

        <div className="meeting-card">
          <img src="/images/business-centre.jpg" alt="Business Centre" />
          <h4>Business Centre</h4>
          <p>
            Located next to the lobby for easy access. Services include printing, scanning, and secure internet access.
          </p>
        </div>

        <div className="meeting-card">
          <img src="/images/outside-catering.jpg" alt="Outside Catering" />
          <h4>Outside Catering</h4>
          <p>
            Host an event at a venue of your choice. We deliver curated menus and professional service for home gatherings, office functions, or open-air celebrations.
          </p>
        </div>

        <div className="meeting-card">
          <img src="/images/private-event.jpg" alt="Private Event Space" />
          <h4>Private Event Spaces</h4>
          <p>
            Celebrate life’s special moments — from birthdays to bridal showers — in a beautiful setting with flexible menus and attentive staff.
          </p>
        </div>

        <div className="meeting-card">
          <img src="/images/facilities.jpg" alt="Meeting Facilities" />
          <h4>Included Facilities</h4>
          <p>
            All rooms come with high-speed Wi-Fi, PA systems, microphones, projectors, writing pads, flip charts, and refreshments for full-day bookings.
          </p>
        </div>

      </div>

      <div className="book-button-container">
        <a
          href="https://theconcordhotels.securedreservations.com/reservation?guest=ac1%3D2"
          className="book-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a Venue
        </a>
      </div>

      <section className="closing-text">
        <p>
          Whether you are planning a large-scale conference or a private dinner, we offer flexible packages tailored to your vision. Get in touch to start planning.
        </p>
      </section>
    </div>
  );
}

export default Meetings;
