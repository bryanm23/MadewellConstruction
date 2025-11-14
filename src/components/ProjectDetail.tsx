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

// Black Dog Bookstore images
const blackDogBefore1 = 'https://i.postimg.cc/8CJQ7JD4/IMG-7740.jpg'
const blackDogBefore2 = 'https://i.postimg.cc/N09qK9YT/IMG-7741.jpg'
const blackDogBefore3 = 'https://i.postimg.cc/25bR1bmx/IMG-7742.jpg'
const blackDogAfter1 = 'https://i.postimg.cc/sxBZ8JRZ/IMG-7743.jpg'
const blackDogAfter2 = 'https://i.postimg.cc/SRXz5GpM/IMG-7744.jpg'
const blackDogAfter3 = 'https://i.postimg.cc/GtBsNj1T/IMG-7745.jpg'
const blackDogAfter4 = 'https://i.postimg.cc/C5Zft4VR/IMG-7746.jpg'

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
    'black-dog-bookstore': {
      id: 'black-dog-bookstore',
      title: "Black Dog Bookstore Renovation",
      category: "Commercial Renovation",
      description: "A complete renovation of the Black Dog Bookstore, transforming the space into a modern, welcoming environment while preserving its charming character. This project showcases our expertise in commercial renovations with attention to detail and quality craftsmanship.",
      location: "Sussex County, NJ",
      beforeImages: [blackDogBefore1, blackDogBefore2, blackDogBefore3],
      afterImages: [blackDogAfter1, blackDogAfter2, blackDogAfter3],
      gallery: [blackDogBefore1, blackDogBefore2, blackDogBefore3, blackDogAfter1, blackDogAfter2, blackDogAfter3, blackDogAfter4],
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
      ],
      hasBeforeAfter: false
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
      ],
      hasBeforeAfter: false
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

        {project.hasBeforeAfter && project.beforeImages ? (
          <div className="project-before-after">
            <div className="before-section">
              <h2>Before</h2>
              <div className="before-after-grid">
                {project.beforeImages.map((beforeImg, index) => (
                  <div key={index} className="before-after-item">
                    <div 
                      className="before-after-image"
                      style={{ backgroundImage: `url(${beforeImg})` }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="after-section">
              <h2>After</h2>
              <div className="before-after-grid">
                {project.afterImages && project.afterImages.filter(img => img && !img.includes('...')).map((afterImg, index) => (
                  <div key={index} className="before-after-item">
                    <div 
                      className="before-after-image"
                      style={{ backgroundImage: `url(${afterImg})` }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="project-gallery">
              <h2>Project Gallery</h2>
              <div className="gallery-grid">
                {project.gallery.filter(img => img && !img.includes('...')).map((image, index) => (
                  <div key={index} className="gallery-item">
                    <img 
                      src={image} 
                      alt={`${project.title} - Image ${index + 1}`}
                      loading="eager"
                      fetchpriority="high"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="project-gallery">
            {project.gallery.map((image, index) => (
              <div key={index} className="gallery-item">
                <img 
                  src={image} 
                  alt={`${project.title} - Image ${index + 1}`}
                  loading="eager"
                  fetchpriority="high"
                  decoding="async"
                />
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
            <p>Interested in a similar project?</p>
            <button onClick={handleContactClick} className="btn">Get a Free Estimate</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectDetail 