import '../styles/Projects.css'
import { useNavigate } from 'react-router-dom'

// Image URLs - hosted on Postimg (i.postimg.cc)
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

// Black Dog Bookstore images - Before/After
// Note: If images appear low quality, the originals may need to be re-uploaded to Postimg at higher resolution
const blackDogBefore1 = 'https://i.postimg.cc/8CJQ7JD4/IMG-7740.jpg'
const blackDogBefore2 = 'https://i.postimg.cc/N09qK9YT/IMG-7741.jpg'
const blackDogBefore3 = 'https://i.postimg.cc/25bR1bmx/IMG-7742.jpg'
const blackDogAfter1 = 'https://i.postimg.cc/sxBZ8JRZ/IMG-7743.jpg'
const blackDogAfter2 = 'https://i.postimg.cc/SRXz5GpM/IMG-7744.jpg'
const blackDogAfter3 = 'https://i.postimg.cc/GtBsNj1T/IMG-7745.jpg'
const blackDogAfter4 = 'https://i.postimg.cc/C5Zft4VR/IMG-7746.jpg'

const Projects = () => {
  const navigate = useNavigate()

  const projects = [
    {
      id: 'black-dog-bookstore',
      title: "Black Dog Bookstore Renovation",
      category: "Commercial Renovation",
      image: blackDogAfter1,
      description: "A complete renovation of the Black Dog Bookstore, transforming the space into a modern, welcoming environment while preserving its charming character. This project showcases our expertise in commercial renovations with attention to detail and quality craftsmanship.",
      location: "Sussex County, NJ",
      beforeImages: [blackDogBefore1, blackDogBefore2, blackDogBefore3],
      afterImages: [blackDogAfter1, blackDogAfter2, blackDogAfter3],
      gallery: [blackDogBefore1, blackDogBefore2, blackDogBefore3, blackDogAfter1, blackDogAfter2, blackDogAfter3, blackDogAfter4],
      featured: true
    },
    {
      id: 'wantage-addition',
      title: "Two-Story Addition in Wantage",
      category: "Residential Addition",
      image: wantage1,
      description: "A beautiful two-story addition project in Wantage, NJ, featuring modern design elements and seamless integration with the existing structure.",
      location: "Wantage, NJ",
      gallery: [wantage1, wantage2, wantage3, wantage4, wantage5, wantage6]
    },
    {
      id: 'franklin-renovation',
      title: "Franklin Home Renovation",
      category: "Residential Renovation",
      image: franklin1,
      description: "A comprehensive exterior renovation project in Franklin, NJ, featuring a new retaining wall, siding replacement, and a complete front porch and stairs redesign.",
      location: "Franklin, NJ",
      gallery: [franklin1, franklin2, franklin3, franklin4]
    },
    /*
    {
      title: "Entourage Salon, Mount Olive NJ",
      category: "Commercial Construction",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      description: "A complete renovation done of Entourage Salon in Mount Olive, NJ",
      location: "Mount Olive, NJ"
    },
    {
      title: "Commercial Office Renovation in Newton",
      category: "Commercial Construction",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      description: "Complete renovation of a 12,000 sq ft office building in downtown Newton, featuring modern facilities and energy-efficient design.",
      location: "Newton, NJ"
    },
    {
      title: "Historic Home Restoration in Lafayette",
      category: "Historic Renovation",
      image: "https://images.unsplash.com/photo-1517581177684-8fc44d704224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
      description: "Meticulous restoration of a 19th-century farmhouse in Lafayette Township, preserving historical elements while adding modern amenities.",
      location: "Lafayette, NJ"
    },
    {
      title: "Luxury Kitchen Remodel in Andover",
      category: "Kitchen Renovation",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      description: "Complete transformation of an outdated kitchen into a chef's dream with custom cabinetry, high-end appliances, and luxury finishes in Andover Township.",
      location: "Andover, NJ"
    }
      */
  ]

  const featuredProject = projects.find(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Recent Notable Projects</h2>
        <p className="section-description">Browse through our portfolio of a select few of our completed construction projects throughout Sussex County. From custom homes to commercial buildings, we've helped bring our clients' visions to life across northern New Jersey.</p>
        
        {featuredProject && (
          <div className="featured-project-wrapper">
            <div 
              className="featured-project-card" 
              itemScope 
              itemType="http://schema.org/CreativeWork"
              onClick={() => featuredProject.id && navigate(`/project/${featuredProject.id}`)}
              style={{ cursor: featuredProject.id ? 'pointer' : 'default' }}
            >
              <div className="featured-project-image" style={{ backgroundImage: `url(${featuredProject.image})` }}>
                <div className="featured-project-overlay">
                  <div className="featured-badge">Featured Project</div>
                  <span className="project-category" itemProp="keywords">{featuredProject.category}</span>
                  <span className="project-location" itemProp="contentLocation">{featuredProject.location}</span>
                </div>
              </div>
              <div className="featured-project-info">
                <h3 itemProp="name">{featuredProject.title}</h3>
                <p itemProp="description">{featuredProject.description}</p>
                <meta itemProp="creator" content="Madewell Construction" />
                {featuredProject.id ? (
                  <span className="project-link">View Project Details →</span>
                ) : (
                  <a href="#contact" className="project-link">Request Similar Project</a>
                )}
              </div>
            </div>
          </div>
        )}

        {otherProjects.length > 0 && (
          <>
            <h3 className="other-projects-title">More Projects</h3>
            <div className="projects-grid">
              {otherProjects.map((project, index) => (
                <div 
                  className="project-card" 
                  key={index} 
                  itemScope 
                  itemType="http://schema.org/CreativeWork"
                  onClick={() => project.id && navigate(`/project/${project.id}`)}
                  style={{ cursor: project.id ? 'pointer' : 'default' }}
                >
                  <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}>
                    <div className="project-overlay">
                      <span className="project-category" itemProp="keywords">{project.category}</span>
                      <span className="project-location" itemProp="contentLocation">{project.location}</span>
                    </div>
                  </div>
                  <div className="project-info">
                    <h3 itemProp="name">{project.title}</h3>
                    <p itemProp="description">{project.description}</p>
                    <meta itemProp="creator" content="Madewell Construction" />
                    {project.id ? (
                      <span className="project-link">View Project Details</span>
                    ) : (
                      <a href="#contact" className="project-link">Request Similar Project</a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Projects 