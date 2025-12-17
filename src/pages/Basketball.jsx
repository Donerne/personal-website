import { useState } from 'react'
import './Basketball.css'
import profilePhoto from './tech_skills_photo.jpg'
import image1 from './IMG-20250831-WA0007.jpg'
import image2 from './IMG-20250831-WA0011.jpg'
import image3 from './IMG-20250831-WA0020.jpg'

const basketballImages = [
  {
    id: 1,
    title: 'Team Photo',
    description: 'Our basketball team standing together, united in our passion for the game.',
    image: image1
  },
  {
    id: 2,
    title: 'Sports 4 Life Ministries',
    description: 'Raising the next generation of God-fearing leaders through Christ-centered sports.',
    image: image2
  },
  {
    id: 3,
    title: 'Basketball Moments',
    description: 'Celebrating the joy and community that basketball brings to our lives.',
    image: image3
  }
]

function Basketball() {
  const [hoveredImage, setHoveredImage] = useState(null)

  return (
    <div className="basketball">
      <div className="content-wrapper">
        {/* Bio Section */}
        <section className="bio-section">
          <div className="bio-info">
            <h2>My Basketball Journey</h2>
            <p>
              Basketball has been a significant part of my life, teaching me discipline, teamwork, and perseverance. 
              Through the game, I've had the opportunity to connect with amazing people and be part of meaningful initiatives 
              that combine sports with faith and community building.
            </p>
            <p>
              Check back soon for more basketball highlights and experiences!
            </p>
          </div>
          <div className="photo-placeholder">
            <div className="photo-circle">
              <img src={profilePhoto} alt="Ernest Frimpong" className="profile-photo" />
            </div>
          </div>
        </section>

        {/* Images Gallery Section */}
        <section className="images-section">
          <h2 className="section-title">Basketball Moments</h2>
          <div className="images-grid">
            {basketballImages.map((item) => (
              <div
                key={item.id}
                className={`image-card ${hoveredImage === item.id ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredImage(item.id)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <div className="image-container">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="basketball-image"
                    loading="lazy"
                  />
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="image-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Section */}
        <footer className="footer-section">
          <div className="footer-content">
            <div className="footer-links">
              <h3>Explore More</h3>
              <p style={{ color: '#666', marginBottom: '1rem' }}>
                More basketball highlights and experiences coming soon!
              </p>
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

export default Basketball
