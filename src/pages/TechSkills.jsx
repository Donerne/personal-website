import { useState } from 'react'
import './TechSkills.css'
import profilePhoto from './tech_skills_photo.jpg'

const projects = [
  {
    id: 1,
    title: 'Gear Guide Project',
    summary: 'A comprehensive web application built with modern technologies. This project features a car website built alongside colleagues to allow users view prices of vehicles with a focus on CO2 emissions. Using R Shiny, webscraped vehicle prices alongside CO2 emission data provide relevant information to users to help them make informed decisions with a seamless user experience.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    link: 'https://gear-guide-project-10.shinyapps.io/6200-Final-Project/'
  },
  {
    id: 2,
    title: 'Big Tech Stock Price Forecasting',
    summary: 'This project predicts the stock prices of the six biggest technology companies, Amazon, Microsoft, NVIDIA, Facebook, Google, and Apple, using stock price data retrieved via the Tiingo API and financial news data from the Financial Modeling Prep (FMP) API. By analyzing real-time and historical stock price data alongside relevant financial news, the study applies machine learning algorithms to identify trends and forecasts over the next 15 trading days after March 4th, 2025. Overall, we find the LSTM model performs the most consistently for forecasting across all companies given different data cleaning and model tuning. These findings could offer valuable insights for investors and contribute to advancements in financial data science',
    image: 'https://www.bing.com/th/id/OIP.HbY30cot76fLsVy6Wf2KNQHaD5?w=226&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2',
    link: 'https://github.com/Donerne/6300-Data-Project'
  },
  {
    id: 3,
    title: 'Spatiotemporal Analysis of Asthma Incidence and Air Pollution in Ontario',
    summary: 'Asthma is a significant public health concern in Ontario, with air pollutants such as fine particulate matter (PM2.5), nitrogen dioxide (NO2), and ground-level ozone (O3) recognized as major triggers for asthma symptoms and exacerbation. [Tiotiu et al., 2020] These pollutants originate from sources such as traffic emissions, industrial activity, and wildfires. While numerous studies have explored the link between air quality and respiratory health, limited research has examined this relationship within Ontario using spatiotemporal approaches. This study investigates how asthma incidence correlates with air pollution patterns across Ontario’s public health units over time, leveraging spatial modeling to uncover trends and regional disparities.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
    link: 'https://github.com/YangG24/Spatiotemporal-asthma-airpollution-ontario'
  }
]

const educationDetails = {
  'Master of Data Science': {
    university: 'Guelph University',
    location: 'Guelph, Ontario',
    modules: [
      'Data Manipulation and Spatial & Temporal Data Analysis Using ArcGIS, R, R Shiny and Tableau.',
      'Intro to Data Science: Machine learning techniques, resampling methods and model selection methods using Python.',
      'Machine Learning for sequences: Time series forecasting, LLMs, embeddings and modelling using Python.',
      'Big Data Management: Big data distribution systems such as Hadoop and MapReduce and SQL-based tools.',
      'Java Mobile App Development: Android application fundamentals, and sensing infrastructures using Java.'
    ]
  },
  'MSc Economics': {
    university: 'Warwick University',
    location: 'Coventry, England',
    modules: [
      'Had a distinction in the MSc Economics dissertation (paper available upon request).',
      'Relevant modules: Applications of Data Science, Global Finance, Econometrics, Microeconomics, and Macroeconomics.'
    ]
  },
  'BA Economics': {
    university: 'Kwame Nkrumah University of Science & Technology (KNUST)',
    location: 'Kumasi, Ghana',
    modules: [
      'First Class Honors',
      'Key modules in Microeconomics, Macroeconomics, Econometrics, Advanced Microeconomics, Advanced Macroeconomics, Advanced Econometrics (distinctions in all modules).'
    ]
  }
}

function TechSkills() {
  const [hoveredProject, setHoveredProject] = useState(null)
  const [hoveredEducation, setHoveredEducation] = useState(null)

  return (
    <div className="tech-skills">
      <div className="content-wrapper">
        {/* Bio Section */}
        <section className="bio-section">
          <div className="bio-info">
            <h2>Get to Know Me</h2>
            <p>
              Hi! Welcome to my website! I am a passionate Data Science and Economics expert with a passion for creating innovative solutions that make a difference.
            </p>
            <div className="education-profile">
              <h3>Education</h3>
              <ul>
                {Object.keys(educationDetails).map((degree, index) => {
                  const details = educationDetails[degree]
                  return (
                    <li
                      key={index}
                      className="education-item"
                      onMouseEnter={() => setHoveredEducation(degree)}
                      onMouseLeave={() => setHoveredEducation(null)}
                    >
                      {degree}
                      {hoveredEducation === degree && (
                        <div className="education-tooltip">
                          <div className="tooltip-header">
                            <strong>{degree}</strong>
                            <div className="tooltip-university">
                              {details.location 
                                ? `${details.university}, ${details.location}`
                                : details.university
                              }
                            </div>
                          </div>
                          <div className="tooltip-modules">
                            {degree === 'Master of Data Science' ? (
                              <>
                                <strong>Modules Completed:</strong>
                                <ul>
                                  {details.modules.map((module, idx) => (
                                    <li key={idx}>{module}</li>
                                  ))}
                                </ul>
                              </>
                            ) : (
                              <ul>
                                {details.modules.map((module, idx) => (
                                  <li key={idx}>{module}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className="photo-placeholder">
            <div className="photo-circle">
              <img src={profilePhoto} alt="Ernest Frimpong" className="profile-photo" />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="projects-section">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`project-card ${hoveredProject === project.id ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="project-image-container">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                  />
                  <div className="project-overlay">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Section */}
        <footer className="footer-section">
          <div className="footer-content">
            <div className="footer-links">
              <h3>Explore More Projects</h3>
              <a 
                href="https://github.com/Donerne" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-link github-link"
              >
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View All Projects on GitHub
              </a>
            </div>
            <div className="contact-info">
              <h3>Get In Touch</h3>
              <div className="contact-links">
                <a 
                  href="mailto:ekf98@hotmail.com" 
                  className="footer-link contact-link"
                >
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  ekf98@hotmail.com
                </a>
                <a 
                  href="https://www.linkedin.com/in/ernest-frimpong-0b8a95164/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-link contact-link"
                >
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default TechSkills
