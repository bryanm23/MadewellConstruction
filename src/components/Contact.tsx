import '../styles/Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-container">
          <div className="contact-info" itemScope itemType="http://schema.org/LocalBusiness">
            <h3>Get in Touch with Madewell Construction</h3>
            <p>Interested in working with us? Contact us directly through any of the methods below for a free estimate for your project.</p>
            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-icon">
                  <i className="contact-icon-inner">📍</i>
                </div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                    <span itemProp="streetAddress">176 Statesville Quarry Road</span>, 
                    <span itemProp="addressLocality">Lafayette</span>, 
                    <span itemProp="addressRegion">NJ</span> 
                    <span itemProp="postalCode">07848</span>
                  </p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-icon">
                  <i className="contact-icon-inner">📞</i>
                </div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <p><a href="tel:2019248164" itemProp="telephone">201-924-8164</a></p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-icon">
                  <i className="contact-icon-inner">✉️</i>
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p><a href="mailto:tom@madewellconstruction.org" itemProp="email">tom@madewellconstruction.org</a></p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-icon">
                  <i className="contact-icon-inner">⏰</i>
                </div>
                <div className="contact-text">
                  <h4>Hours</h4>
                  <p itemProp="openingHours" content="Mo-Fr 08:00-16:00">Monday - Friday: 8:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 