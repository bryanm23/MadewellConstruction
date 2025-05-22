import '../styles/Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Madewell Construction</h3>
            <p>Sussex County's trusted general contractor since 1981. Serving Lafayette, Newton, Sparta, Andover,Sussex, Wantage, and all of northern New Jersey with quality construction services.</p>
            <div className="footer-social">
              <a href="https://madewellconstruction.org" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <span className="social-icon"></span>
              </a>
              <a href="https://madewellconstruction.org" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <span className="social-icon"></span>
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Services</h3>
            <ul className="footer-links">
              <li><a href="#services">Residential Construction</a></li>
              <li><a href="#services">Commercial Construction</a></li>
              <li><a href="#services">Kitchen & Bathroom Remodels</a></li>
              <li><a href="#services">Additions & Renovations</a></li>
              <li><a href="#services">Sustainable Building</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <address itemScope itemType="http://schema.org/LocalBusiness">
              <span itemProp="name">Madewell Construction</span>
              <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                <p>
                  <span itemProp="streetAddress">176 Statesville Quarry Road</span><br />
                  <span itemProp="addressLocality">Lafayette</span>, 
                  <span itemProp="addressRegion">NJ</span> 
                  <span itemProp="postalCode">07848</span>
                </p>
              </div>
              <p>Phone: <a href="tel:2019248164" itemProp="telephone">(201) 924-8164</a></p>
              <p>Email: <a href="mailto:tom@madewellconstruction.org" itemProp="email">tom@madewellconstruction.org</a></p>
              /**
              <p>License #: 13VH05234700</p>
              */
            </address>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Madewell Construction. All rights reserved. | <a href="#" className="footer-policy-link">Privacy Policy</a> | <a href="#" className="footer-policy-link">Terms of Service</a></p>
          <p className="footer-service-areas">Proudly serving Sussex County and all of northern New Jersey, including Lafayette, Newton, Sparta, Andover, Hamburg, Vernon, and surrounding areas.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 