import '../styles/Projects.css'

const Projects = () => {
  const projects = [
    {
      title: "Lakeside Modern Home",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      description: "A stunning 4,500 sq ft modern home with floor-to-ceiling windows overlooking the lake."
    },
    {
      title: "Downtown Office Complex",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      description: "A 12-story office building with state-of-the-art facilities and sustainable design features."
    },
    {
      title: "Historic Renovation",
      category: "Renovation",
      image: "https://images.unsplash.com/photo-1517581177684-8fc44d704224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
      description: "Careful restoration of a 19th-century building, preserving historical elements while adding modern amenities."
    },
    {
      title: "Riverside Apartment Complex",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      description: "A luxury apartment complex with 60 units, featuring communal gardens and river views."
    }
  ]

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}>
                <div className="project-overlay">
                  <span className="project-category">{project.category}</span>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href="#" className="project-link">View Details</a>
              </div>
            </div>
          ))}
        </div>
        <div className="projects-cta">
          <a href="#contact" className="btn">Discuss Your Project</a>
        </div>
      </div>
    </section>
  )
}

export default Projects 