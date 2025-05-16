import '../styles/Skills.css'

const Skills = () => {
  const skills = [
    {
      title: "Residential Construction",
      icon: "🏠",
      description: "Custom homes, renovations, additions, and remodeling services tailored to your specific needs and preferences."
    },
    {
      title: "Commercial Construction",
      icon: "🏢",
      description: "Office buildings, retail spaces, restaurants, and other commercial properties built to the highest standards."
    },
    {
      title: "Project Management",
      icon: "📋",
      description: "Comprehensive project management services ensuring your construction project stays on schedule and within budget."
    },
    {
      title: "Sustainable Building",
      icon: "🌱",
      description: "Eco-friendly construction practices and materials that reduce environmental impact and energy costs."
    },
    {
      title: "Interior Finishing",
      icon: "🎨",
      description: "Expert interior work including drywall, painting, flooring, cabinetry, and custom woodworking."
    },
    {
      title: "Design & Planning",
      icon: "✏️",
      description: "Collaborative design services to help you visualize and plan your perfect space before construction begins."
    }
  ]

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills 