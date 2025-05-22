import '../styles/Contact.css'
import { useState } from 'react'

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)
  const formspreeUrl = "https://formspree.io/f/xnqejpbj" // Replace this with your Formspree form ID

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    
    try {
      await fetch(formspreeUrl, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json"
        }
      })
      setSubmitted(true)
      form.reset()
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-container">
          <div className="contact-info" itemScope itemType="http://schema.org/LocalBusiness">
            <h3>Get in Touch with Madewell Construction</h3>
            <p>Interested in working us? Fill out the form and we'll get back to you as soon as possible with a free estimate for your project.</p>
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
          <div className="contact-form-wrapper">
            <div className="contact-form">
              {submitted ? (
                <div className="form-success">
                  <h3>Thank you for your message!</h3>
                  <p>We've received your inquiry and will get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
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
                    <label htmlFor="service">Service Needed</label>
                    <select id="service" name="service" required>
                      <option value="">Select a service</option>
                      <option value="Home Renovation">Home Renovation</option>
                      <option value="Commercial Construction">Commercial Construction</option>
                      <option value="Custom Home Building">Custom Home Building</option>
                      <option value="Addition">Addition</option>
                      <option value="Kitchen Remodel">Kitchen Remodel</option>
                      <option value="Bathroom Remodel">Bathroom Remodel</option>
                      <option value="Other">Other (Please Specify)</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Project Details</label>
                    <textarea id="message" name="message" rows={5} placeholder="Tell us about your project" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-submit">Get a Free Estimate</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 