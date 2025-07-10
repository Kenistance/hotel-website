import '../styles/Activities.css';

function Activities() {
  return (
    <div className="activities-section">
      <h2>Meetings & Events</h2>
      <p>Host your next event in our fully equipped, elegant halls designed for all occasions.</p>

      <div className="activity-grid">
        <div className="activity-card">
          <img src="/images/hall-1.jpg" alt="Main Hall" />
          <h4>Grand Conference Hall</h4>
          <p>Accommodates up to 300 guests. Ideal for corporate meetings, product launches, and weddings. Includes AV setup and catering options.</p>
        </div>
      </div>
    </div>
  );
}

export default Activities;
