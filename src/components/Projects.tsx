import '../styles/Projects.css'

const Projects = () => {
  const projects = [
    {
      title: "Custom Lake Home in Sparta, NJ",
      category: "Residential Construction",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      description: "A stunning 4,500 sq ft custom-built modern home with floor-to-ceiling windows overlooking Lake Mohawk in Sparta, Sussex County.",
      location: "Sparta, NJ"
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
  ]

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Featured Projects in Sussex County, NJ</h2>
        <p className="section-description">Browse through our portfolio of completed construction projects throughout Sussex County. From custom homes to commercial buildings, we've helped bring our clients' visions to life across northern New Jersey.</p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index} itemScope itemType="http://schema.org/CreativeWork">
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
                <a href="#contact" className="project-link">Request Similar Project</a>
              </div>
            </div>
          ))}
        </div>
        <div className="projects-cta">
          <p>Ready to start your construction project in Sussex County? Contact Madewell Construction today for a free consultation.</p>
          <a href="#contact" className="btn">Get a Free Estimate</a>
        </div>
      </div>
    </section>
  )
}

export default Projects 