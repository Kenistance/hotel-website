import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact-section">
      <h2>Contact Us</h2>
      <form
        action="https://formspree.io/f/your-form-id"
        method="POST"
        className="contact-form"
      >
        <label>Name:</label>
        <input type="text" name="name" required />
        
        <label>Email:</label>
        <input type="email" name="_replyto" required />
        
        <label>Message:</label>
        <textarea name="message" required />

        <button type="submit">Send Message</button>
      </form>

      <div className="contact-details">
        <p>Email: kenkaarick@gmail.com</p>
        <p>Phone: +254 713792717</p>
        <p>Location: Diani Beach, Kenya</p>
      </div>
    </div>
  );
}

export default Contact;
