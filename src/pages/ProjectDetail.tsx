import { useParams } from 'react-router-dom'
import '../styles/ProjectDetail.css'

// Image URLs - hosted on Postimg
const wantage1 = 'https://i.postimg.cc/2SJ4GKtc/IMG-9725.jpg'
const wantage2 = 'https://i.postimg.cc/wTqcjJJV/IMG-9727.jpg'
const wantage3 = 'https://i.postimg.cc/6pTrdXM4/IMG-9771.jpg'
const wantage4 = 'https://i.postimg.cc/NG7ktbyF/IMG-9782.jpg'
const wantage5 = 'https://i.postimg.cc/dt5Rk1jK/IMG-0018.jpg'
const wantage6 = 'https://i.postimg.cc/d3B29tMr/IMG-0040.jpg'
const franklin1 = 'https://i.postimg.cc/Fzmbck6h/IMG-7691.jpg'
const franklin2 = 'https://i.postimg.cc/Hxb4V9BS/IMG-7705.jpg'
const franklin3 = 'https://i.postimg.cc/8C2mp0BJ/IMG-2760.jpg'
const franklin4 = 'https://i.postimg.cc/d0k9KYdc/IMG-2720.jpg'

// Black Dog Bookstore images
const blackDogBefore1 = 'https://i.postimg.cc/bGhFMvZS/IMG-7740.jpg'
const blackDogBefore2 = 'https://i.postimg.cc/p9H17dmX/IMG-7741.jpg'
const blackDogBefore3 = 'https://i.postimg.cc/d7YSX0h7/IMG-7742.jpg'
const blackDogAfter1 = 'https://i.postimg.cc/...' // Add after images when ready
const blackDogAfter2 = 'https://i.postimg.cc/...'
const blackDogAfter3 = 'https://i.postimg.cc/...'

const ProjectDetail = () => {
  const { id } = useParams()

  const projectDetails = {
    'black-dog-bookstore': {
      title: "Black Dog Bookstore Renovation",
      category: "Commercial Renovation",
      location: "Sussex County, NJ",
      description: "A complete renovation of the Black Dog Bookstore, transforming the space into a modern, welcoming environment while preserving its charming character. This project showcases our expertise in commercial renovations with attention to detail and quality craftsmanship.",
      beforeImages: [blackDogBefore1, blackDogBefore2, blackDogBefore3],
      afterImages: [blackDogAfter1, blackDogAfter2, blackDogAfter3],
      gallery: [blackDogBefore1, blackDogBefore2, blackDogBefore3, blackDogAfter1, blackDogAfter2, blackDogAfter3],
      details: [
        "Complete interior renovation",
        "Modern design with preserved character",
        "Quality craftsmanship throughout",
        "Commercial space transformation",
        "Attention to detail",
        "Welcoming environment"
      ],
      hasBeforeAfter: true
    },
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
      ],
      hasBeforeAfter: false
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
      ],
      hasBeforeAfter: false
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
      
      {project.hasBeforeAfter && project.beforeImages ? (
        <div className="project-before-after">
          <h2>Before & After</h2>
          <div className="before-after-grid">
            {project.beforeImages.map((beforeImg, index) => {
              const afterImg = project.afterImages?.[index]
              const hasAfter = afterImg && !afterImg.includes('...')
              return (
                <div key={index} className="before-after-pair">
                  <div className="before-after-item">
                    <h3>Before</h3>
                    <img src={beforeImg} alt={`${project.title} - Before ${index + 1}`} />
                  </div>
                  {hasAfter ? (
                    <div className="before-after-item">
                      <h3>After</h3>
                      <img src={afterImg} alt={`${project.title} - After ${index + 1}`} />
                    </div>
                  ) : (
                    <div className="before-after-item">
                      <h3>After</h3>
                      <div className="coming-soon-placeholder">
                        <p>Coming Soon</p>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
          <div className="project-gallery">
            <h2>Project Gallery</h2>
            <div className="gallery-grid">
              {project.gallery.filter(img => img && !img.includes('...')).map((image, index) => (
                <div key={index} className="gallery-item">
                  <img src={image} alt={`${project.title} - Image ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="project-gallery">
          {project.gallery.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image} alt={`${project.title} - Image ${index + 1}`} />
            </div>
          ))}
        </div>
      )}

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