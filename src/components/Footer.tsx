import '../styles/Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Madewell Construction</h3>
            <p>Building excellence with precision, passion, and professionalism since 2009.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>123 Construction Ave, City, State 12345</p>
            <p>(555) 123-4567</p>
            <p>info@madewellconstruction.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Madewell Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 