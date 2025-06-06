import { useState, useEffect } from 'react'
import '../styles/Hero.css'

// Postimg image URLs
const wantage1 = 'https://i.postimg.cc/dt5Rk1jK/IMG-0018.jpg'
const wantage2 = 'https://i.postimg.cc/d3B29tMr/IMG-0040.jpg'
const wantage3 = 'https://i.postimg.cc/2SJ4GKtc/IMG-9725.jpg'
const wantage4 = 'https://i.postimg.cc/wTqcjJJV/IMG-9727.jpg'
const wantage5 = 'https://i.postimg.cc/6pTrdXM4/IMG-9771.jpg'
const wantage6 = 'https://i.postimg.cc/NG7ktbyF/IMG-9782.jpg'
const franklin1 = 'https://i.postimg.cc/d0k9KYdc/IMG-2720.jpg'
const franklin2 = 'https://i.postimg.cc/8C2mp0BJ/IMG-2760.jpg'
const franklin3 = 'https://i.postimg.cc/Fzmbck6h/IMG-7691.jpg'
const franklin4 = 'https://i.postimg.cc/Hxb4V9BS/IMG-7705.jpg'

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
          <h1>Premier General Contractor in Lafayette & Sussex County, NJ</h1>
          <h2>Trusted Construction Services in Northern New Jersey Since 1981</h2>
          <p>Your local construction expert serving Lafayette, Newton, Sparta, and all of Sussex County. Specializing in residential and commercial construction, renovations, and custom projects.</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn">Get a Free Estimate</a>
            <a href="#projects" className="btn btn-secondary">View Our Projects</a>
          </div>
          <div className="hero-locations">
            <p>Proudly serving: Lafayette • Newton • Sparta • Andover • Hamburg • Vernon • Sussex • Wantage & all of Sussex County, NJ</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 