import '../styles/Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Premier General Contractor in Sussex County, NJ</h1>
          <h2>Quality Construction For Any Project Since 1981</h2>
          <p>Building excellence throughout Northern New Jersey with precision, passion, and professionalism</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn">Get a Free Estimate</a>
            <a href="#projects" className="btn btn-secondary">View Our Projects</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 