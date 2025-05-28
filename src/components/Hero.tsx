import { useState, useEffect } from 'react'
import '../styles/Hero.css'
import wantage1 from '../assets/images/wantage_addition/IMG_9725.jpeg'
import wantage2 from '../assets/images/wantage_addition/IMG_9727.jpeg'
import wantage3 from '../assets/images/wantage_addition/IMG_9771.jpeg'
import wantage4 from '../assets/images/wantage_addition/IMG_9782.jpeg'
import wantage5 from '../assets/images/wantage_addition/IMG_0018.jpeg'
import wantage6 from '../assets/images/wantage_addition/IMG_0040.jpeg'
import franklin1 from '../assets/images/franklin/IMG_7691.jpeg'
import franklin2 from '../assets/images/franklin/IMG_7705.jpeg'
import franklin3 from '../assets/images/franklin/IMG_2760.jpeg'
import franklin4 from '../assets/images/franklin/IMG_2720.jpeg'

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const images = [
    wantage1,
    wantage2,
    wantage3,
    wantage4,
    wantage5,
    wantage6,
    franklin1,
    franklin2,
    franklin3,
    franklin4
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        {images.map((image, index) => (
          <div
            key={index}
            className={`hero-background-image ${index === currentImageIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      <div className="hero-overlay"></div>
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