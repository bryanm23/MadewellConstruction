import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import '../styles/ProjectDetail.css'

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
      gallery: [wantage1, wantage2, wantage3, wantage4, wantage5, wantage6],
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
      gallery: [franklin1, franklin2, franklin3, franklin4],
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
          {project.gallery.map((image, index) => (
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