import '../styles/Projects.css'
import { useNavigate } from 'react-router-dom'

// Google Drive image URLs
const wantage1 = 'https://drive.google.com/uc?export=view&id=1rF1CwED_QaskD7F8RcUNQALztP97-jEy/wantage_addition/IMG_9725.jpeg'
const wantage2 = 'https://drive.google.com/uc?export=view&id=1rF1CwED_QaskD7F8RcUNQALztP97-jEy/wantage_addition/IMG_9727.jpeg'
const wantage3 = 'https://drive.google.com/uc?export=view&id=1rF1CwED_QaskD7F8RcUNQALztP97-jEy/wantage_addition/IMG_9771.jpeg'
const wantage4 = 'https://drive.google.com/uc?export=view&id=1rF1CwED_QaskD7F8RcUNQALztP97-jEy/wantage_addition/IMG_9782.jpeg'
const wantage5 = 'https://drive.google.com/uc?export=view&id=1rF1CwED_QaskD7F8RcUNQALztP97-jEy/wantage_addition/IMG_0018.jpeg'
const wantage6 = 'https://drive.google.com/uc?export=view&id=1rF1CwED_QaskD7F8RcUNQALztP97-jEy/wantage_addition/IMG_0040.jpeg'
const franklin1 = 'https://drive.google.com/uc?export=view&id=1rF1CwED_QaskD7F8RcUNQALztP97-jEy/franklin/IMG_7691.jpeg'
const franklin2 = 'https://drive.google.com/uc?export=view&id=1rF1CwED_QaskD7F8RcUNQALztP97-jEy/franklin/IMG_7705.jpeg'
const franklin3 = 'https://drive.google.com/uc?export=view&id=1rF1CwED_QaskD7F8RcUNQALztP97-jEy/franklin/IMG_2760.jpeg'
const franklin4 = 'https://drive.google.com/uc?export=view&id=1rF1CwED_QaskD7F8RcUNQALztP97-jEy/franklin/IMG_2720.jpeg'

const Projects = () => {
  const navigate = useNavigate()

  const projects = [
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

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-description">Browse through our portfolio of a select few of our completed construction projects throughout Sussex County. From custom homes to commercial buildings, we've helped bring our clients' visions to life across northern New Jersey.</p>
        <div className="projects-grid">
          {projects.map((project, index) => (
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
        <div className="projects-cta">
          <p>Ready to start your construction project? Contact Madewell Construction today for a free consultation.</p>
          <a href="#contact" className="btn">Get a Free Estimate</a>
        </div>
      </div>
    </section>
  )
}

export default Projects 