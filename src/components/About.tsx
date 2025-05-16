import '../styles/About.css'

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="about-image-placeholder"></div>
          </div>
          <div className="about-text">
            <h3>In the Construciton Industry Since 1981</h3>
            <p>
              Madewell Construction is a premier construction company with a reputation for excellence and reliability. 
              Since our founding in 2009, we've been committed to delivering high-quality construction services to our clients.
            </p>
            <p>
              Our team of experienced professionals brings expertise, creativity, and attention to detail to every project. 
              Whether it's a small renovation or a large commercial build, we approach each job with the same level of dedication and craftsmanship.
            </p>
            <div className="about-values">
              <h4 className="about-values-heading">Our Core Values</h4>
              <div className="value">
                <h4>Quality</h4>
                <p>We never compromise on materials or workmanship</p>
              </div>
              <div className="value">
                <h4>Integrity</h4>
                <p>Honest communication and transparent pricing</p>
              </div>
              <div className="value">
                <h4>Innovation</h4>
                <p>Embracing new techniques and technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 