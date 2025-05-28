import { useState, useEffect } from 'react'
import '../styles/Hero.css'
const wantage1 = '/images/IMG_0018.jpeg'
const wantage2 = '/images/IMG_0040.jpeg'
const wantage3 = '/images/IMG_9725.jpeg'
const wantage4 = '/images/IMG_9727.jpeg'
const wantage5 = '/images/IMG_9771.jpeg'
const wantage6 = '/images/IMG_9782.jpeg'
const franklin1 = '/images/IMG_2720.jpeg'
const franklin2 = '/images/IMG_2760.jpeg'
const franklin3 = '/images/IMG_7691.jpeg'
const franklin4 = '/images/IMG_7705.jpeg'

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