import '../styles/Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>Interested in working with us? Fill out the form and we'll get back to you as soon as possible.</p>
            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-icon">
                  <i className="contact-icon-inner">📍</i>
                </div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>176 Statesville Quarry Road, Lafayette NJ 07848</p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-icon">
                  <i className="contact-icon-inner">📞</i>
                </div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <p>201-924-8164</p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-icon">
                  <i className="contact-icon-inner">✉️</i>
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p>madewellconst@gmail.com</p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-icon">
                  <i className="contact-icon-inner">⏰</i>
                </div>
                <div className="contact-text">
                  <h4>Hours</h4>
                  <p>Monday - Friday: 8:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <div className="contact-form">
              <form>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your email" required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" placeholder="Your phone number" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} placeholder="Tell us about your project" required></textarea>
                </div>
                <button type="submit" className="btn btn-submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 