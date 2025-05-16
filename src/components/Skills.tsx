import '../styles/Skills.css'

const Skills = () => {
  const skills = [
    {
      title: "Residential Construction in Sussex County",
      icon: "🏠",
      description: "Custom homes, renovations, additions, and remodeling services throughout Sussex County, NJ including Lafayette, Newton, Sparta, and surrounding areas."
    },
    {
      title: "Commercial Construction",
      icon: "🏢",
      description: "Office buildings, retail spaces, restaurants, and other commercial properties in northern New Jersey built to the highest standards with quality materials and expert craftsmanship."
    },
    {
      title: "Kitchen & Bathroom Remodeling",
      icon: "🛁",
      description: "Transform your kitchen or bathroom with our expert remodeling services. From concept to completion, we handle every aspect of your renovation in Sussex County, NJ."
    },
    {
      title: "Sustainable Building",
      icon: "🌱",
      description: "Eco-friendly construction practices and energy-efficient materials for New Jersey homes that reduce environmental impact and lower utility costs."
    },
    {
      title: "Additions & Expansions",
      icon: "🔨",
      description: "Need more space? Our team specializes in home additions, garage conversions, and second-story additions throughout Sussex County that blend seamlessly with your existing structure."
    },
    {
      title: "Design & Build Services",
      icon: "✏️",
      description: "Complete design-build services for Sussex County homeowners. We handle everything from initial concepts and permits to construction and finishing touches."
    }
  ]

  return (
    <section id="services" className="section skills">
      <div className="container">
        <h2 className="section-title">Construction Services in Sussex County, NJ</h2>
        <p className="section-description">Madewell Construction provides comprehensive construction services throughout Sussex County and northern New Jersey. Our licensed team delivers quality craftsmanship for both residential and commercial projects.</p>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index} itemScope itemType="http://schema.org/Service">
              <div className="skill-icon">{skill.icon}</div>
              <h3 itemProp="name">{skill.title}</h3>
              <p itemProp="description">{skill.description}</p>
              <meta itemProp="areaServed" content="Sussex County, New Jersey" />
              <meta itemProp="provider" content="Madewell Construction" />
            </div>
          ))}
        </div>
        <div className="service-cta">
          <p>Looking for a specific construction service in Sussex County? Contact us today for a free consultation and estimate.</p>
          <a href="#contact" className="btn">Request a Free Estimate</a>
        </div>
      </div>
    </section>
  )
}

export default Skills 