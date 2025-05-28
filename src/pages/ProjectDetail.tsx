import { useParams } from 'react-router-dom'
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
  const { id } = useParams()

  const projectDetails = {
    'wantage-addition': {
      title: "Two-Story Addition in Wantage",
      category: "Residential Addition",
      location: "Wantage, NJ",
      description: "A beautiful two-story addition project in Wantage, NJ, featuring modern design elements and seamless integration with the existing structure.",
      gallery: [wantage1, wantage2, wantage3, wantage4, wantage5, wantage6],
      details: [
        "Complete two-story addition",
        "Modern architectural design",
        "Seamless integration with existing structure",
        "High-quality materials and finishes",
        "Energy-efficient construction",
        "Custom interior details"
      ]
    },
    'franklin-renovation': {
      title: "Franklin Home Renovation",
      category: "Residential Renovation",
      location: "Franklin, NJ",
      description: "A comprehensive exterior renovation project in Franklin, NJ, featuring a new retaining wall, siding replacement, and a complete front porch and stairs redesign.",
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

  const project = projectDetails[id as keyof typeof projectDetails]

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="project-detail">
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
          <h2>Interested in a Similar Project?</h2>
          <p>Contact Madewell Construction today for a free consultation and estimate.</p>
          <a href="#contact" className="btn">Get a Free Estimate</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail 