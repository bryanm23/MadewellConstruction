import '../styles/Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Quality Construction For Your Dream Projects</h1>
          <p>Building excellence with precision, passion, and professionalism</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn">Get In Touch</a>
            <a href="#projects" className="btn btn-secondary">View Projects</a>
          </div>
        </div>
        <div className="hero-image">
          {/* This would typically be an actual image, but using a div with background for simplicity */}
          <div className="image-placeholder"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero 