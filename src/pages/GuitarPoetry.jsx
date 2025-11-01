import { useState } from 'react'
import './GuitarPoetry.css'
import profilePhoto from './tech_skills_photo.jpg'
import poetryPic from './Guitar&Poetry/pics_poetry.jpg'

const videos = [
  {
    id: 1,
    title: 'Who is like you - Dunsin Oyekan',
    description: 'Who is like you, oh Lord, The weight of who you are, no words can carry!',
    videoUrl: '/videos/Dunsin_oyekan_who_is_like_you.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop'
  },
  {
    id: 2,
    title: 'Getting Back in Rhythm',
    description: 'Getting back in the flow after a year of not playing.',
    videoUrl: 'https://www.instagram.com/reel/DOXFTZHDKOf/?igsh=cTFneHF3NDVzbjR4',
    thumbnail: 'https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?w=800&h=600&fit=crop'
  },
  {
    id: 3,
    title: 'Chronicles of Love',
    description: 'The heart of a lowly servant.',
    videoUrl: 'https://www.instagram.com/p/CL9lAevHrHq/?igsh=MXU3OG9ua3dqN2Vvaw==', // Add your video URL here
    thumbnail: poetryPic
  }
]

function GuitarPoetry() {
  const [hoveredVideo, setHoveredVideo] = useState(null)

  return (
    <div className="guitar-poetry">
      <div className="content-wrapper">
        {/* Bio Section */}
        <section className="bio-section">
          <div className="bio-info">
            <h2>Get to Know My Other Passions</h2>
            <p>
              Welcome to my musical journey! I am passionate about music, poetry, and creative expression. 
              Here you'll find my guitar performances and poetic works that reflect my artistic side.
            </p>
          </div>
          <div className="photo-placeholder">
            <div className="photo-circle">
              <img src={profilePhoto} alt="Ernest Frimpong" className="profile-photo" />
            </div>
          </div>
        </section>

        {/* Videos Section */}
        <section className="videos-section">
          <h2 className="section-title">Guitar & Poetry Performances</h2>
          <div className="videos-grid">
            {videos.map((video) => (
              <div
                key={video.id}
                className={`video-card ${hoveredVideo === video.id ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredVideo(video.id)}
                onMouseLeave={() => setHoveredVideo(null)}
              >
                <div className="video-container">
                  {video.videoUrl ? (
                    video.videoUrl.includes('instagram.com') ? (
                      <div className="instagram-embed">
                        <a 
                          href={video.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="instagram-link"
                        >
                          <img 
                            src={video.thumbnail} 
                            alt={video.title}
                            className="video-thumbnail"
                          />
                          <div className="play-overlay instagram-overlay">
                            <svg width="64" height="64" fill="white" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                            <span className="instagram-text">View on Instagram</span>
                          </div>
                        </a>
                      </div>
                    ) : (
                      <video 
                        src={video.videoUrl}
                        className="video-player"
                        controls
                        poster={video.thumbnail}
                        preload="metadata"
                      >
                        Your browser does not support the video tag.
                      </video>
                    )
                  ) : (
                    <div className="video-placeholder">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="video-thumbnail"
                      />
                      <div className="play-overlay">
                        <svg width="64" height="64" fill="white" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                <div className="video-content">
                  <h3>{video.title}</h3>
                  <p>{video.description}</p>
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
              <a 
                href="https://www.instagram.com/donerne98?utm_source=qr&igsh=cnJpam4wbmt1cWhv" 
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link instagram-link"
              >
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                View More on Instagram
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

export default GuitarPoetry