import { useState } from 'react'
import '../styles/Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Validate that at least phone or email is provided
    if (!formData.phone.trim() && !formData.email.trim()) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 3000)
      return
    }
    
    setSubmitStatus('submitting')

    const form = e.currentTarget
    const formDataToSend = new FormData(form)

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSend as any).toString()
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
        // Reset form after 3 seconds
        setTimeout(() => setSubmitStatus('idle'), 3000)
      } else {
        setSubmitStatus('error')
        setTimeout(() => setSubmitStatus('idle'), 3000)
      }
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }
  }

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
                    <span itemProp="addressLocality">Lafayette</span>, 
                    <span itemProp="addressRegion">NJ</span>
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
        
        <div className="contact-form-wrapper">
          <form 
            name="contact" 
            method="POST" 
            data-netlify="true" 
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="contact-form"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p style={{ display: 'none' }}>
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </p>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(201) 555-1234"
              />
            </div>
            
            <div className="form-note">
              <p>* Please provide at least one contact method (Email or Phone)</p>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Tell us about your project..."
              />
            </div>
            
            {submitStatus === 'success' && (
              <div className="form-message form-message-success">
                Thank you! Your message has been sent. We'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="form-message form-message-error">
                {!formData.phone.trim() && !formData.email.trim() 
                  ? 'Please provide at least one contact method (Email or Phone)'
                  : 'Sorry, there was an error sending your message. Please try again or contact us directly.'}
              </div>
            )}
            
            <button 
              type="submit" 
              className="btn-submit"
              disabled={submitStatus === 'submitting'}
            >
              {submitStatus === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact 