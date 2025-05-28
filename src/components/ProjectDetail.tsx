import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import '../styles/ProjectDetail.css'
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

const ProjectDetail = () => {
  const navigate = useNavigate()
  const { projectId } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleContactClick = () => {
    navigate('/#contact')
  }

  const projects = {
    'wantage-addition': {
      id: 'wantage-addition',
      title: "Two-Story Addition in Wantage",
      category: "Residential Addition",
      description: "A beautiful two-story addition project in Wantage, NJ, featuring modern design elements and seamless integration with the existing structure. This project showcases our expertise in creating harmonious additions that blend perfectly with existing architecture while providing modern living spaces.",
      location: "Wantage, NJ",
      images: [wantage1, wantage2, wantage3, wantage4, wantage5, wantage6],
      details: [
        "Two-story addition with modern design",
        "Seamless integration with existing structure",
        "Custom architectural details",
        "High-quality materials and finishes"
      ]
    },
    'franklin-renovation': {
      id: 'franklin-renovation',
      title: "Franklin Home Renovation",
      category: "Residential Renovation",
      description: "A comprehensive exterior renovation project in Franklin, NJ, featuring a new retaining wall, siding replacement, and a complete front porch and stairs redesign. This project transformed the home's exterior while maintaining its character and improving its functionality.",
      location: "Franklin, NJ",
      images: [franklin1, franklin2, franklin3, franklin4],
      details: [
        "New retaining wall construction",
        "Complete siding replacement",
        "Front porch renovation",
        "New staircase design and installation",
        "Exterior finishing touches",
        "Improved curb appeal"
      ]
    }
  }

  const project = projects[projectId as keyof typeof projects]

  if (!project) {
    return (
      <section className="project-detail">
        <div className="container">
          <button className="back-button" onClick={() => navigate(-1)}>
            ← Back to Projects
          </button>
          <h1>Project Not Found</h1>
          <p>The project you're looking for doesn't exist.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="project-detail">
      <div className="container">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back to Projects
        </button>
        
        <div className="project-header">
          <h1>{project.title}</h1>
          <div className="project-meta">
            <span className="project-category">{project.category}</span>
            <span className="project-location">{project.location}</span>
          </div>
        </div>

        <div className="project-gallery">
          {project.images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image} alt={`${project.title} - Image ${index + 1}`} />
            </div>
          ))}
        </div>

        <div className="project-content">
          <div className="project-description">
            <h2>Project Overview</h2>
            <p>{project.description}</p>
          </div>

          <div className="project-details">
            <h2>Project Details</h2>
            <ul>
              {project.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>

          <div className="project-cta">
            <p>Interested in a similar project?</p>
            <button onClick={handleContactClick} className="btn">Get a Free Estimate</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectDetail 