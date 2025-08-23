'use client';

import React from 'react';
import Image from 'next/image';
import PixelWindow from './PixelWindow';
import { Github, Linkedin, Mail, Star } from 'lucide-react';

interface HomeProps {
  onFunStuffClick: () => void;
}

const Home: React.FC<HomeProps> = ({ onFunStuffClick }) => {
  return (
    <div className="home-wrapper">

      <div className="home-container">
        <div className="home-window-container">
          {/* Star Icon */}
          <div className="star-icon-container">
            <Star 
              size={40} 
              className="star-icon"
              style={{ color: '#f6e05e'}}
              onClick={onFunStuffClick}
            />
            <span className="star-text">Fun Stuff & Blog</span>
          </div>
          
          {/* Pixel Window */}
          <PixelWindow title="Home" theme="yellow">
            <div className="home-content">
              {/* Left side - Avatar */}
              <div className="avatar-section">
                <div className="avatar-container">
                  <Image
                    src="/avatar.png"
                    alt="Tracy Chung"
                    width={280}
                    height={280}
                    className="avatar-image"
                    onError={(e) => {
                      // Fallback to emoji if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = '<span class="fallback-emoji">👤</span>';
                    }}
                  />
                </div>
              </div>
              
              {/* Right side - Name and Details */}
              <div className="info-section">
                <h1 className="name-title">
                  Tracy Chung
                </h1>
                
                <h2 className="subtitle">
                  Software Developer
                </h2>
                
                <p className="description">
                Passionate software developer dedicated to building accessible and inclusive digital experiences, 
                with a strong focus on front-end development and user experience.
                </p>
                
                <div className="social-links">
                  <a 
                    href="https://github.com/CCY-0124" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-link github"
                  >
                    <Github size={24} />
                    <span>GitHub</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/tracychung0124" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-link linkedin"
                  >
                    <Linkedin size={24} />
                    <span>LinkedIn</span>
                  </a>
                  <a 
                    href="mailto:chuiyingchungccy@gmail.com" 
                    className="social-link email"
                  >
                    <Mail size={24} />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>
          </PixelWindow>
        </div>
      </div>

      <style jsx>{`
        .home-wrapper {
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 0;
        }



        .home-window-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
        }

        .star-icon-container {
          margin-left: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .star-icon {
          color: #f6e05e;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .star-text {
          color: #F7F4C8;
          font-weight: 600;
          font-size: 12px;
          opacity: 0;
          transform: translateY(-10px);
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .star-icon:hover {
          color: #fbbf24;
          filter: drop-shadow(0 0 12px #fbbf24) drop-shadow(0 0 20px #fbbf24);
          transform: scale(1.1) rotate(5deg);
          animation: starShine 1s ease-in-out infinite;
        }

        @keyframes starShine {
          0%, 100% {
            filter: drop-shadow(0 0 12px #fbbf24) drop-shadow(0 0 20px #fbbf24);
          }
          50% {
            filter: drop-shadow(0 0 20px #fbbf24) drop-shadow(0 0 30px #fbbf24) drop-shadow(0 0 40px #fbbf24);
          }
        }

        .star-icon-container:hover .star-text {
          opacity: 1;
          transform: translateY(0);
        }

        .home-container {
          width: 95vw;
          max-width: 1400px;
          aspect-ratio: 4/3;
          margin: auto;
          padding: 20px;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .home-content {
          display: flex;
          align-items: center;
          gap: 40px;
          height: 100%;
          padding: 20px;
        }

        .avatar-section {
          flex-shrink: 0;
        }

        .avatar-container {
          width: 280px;
          height: 280px;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid #f7f4c8;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #141414;
        }

        .avatar-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .fallback-emoji {
          font-size: 4rem;
          color: #f7f4c8;
        }

        .info-section {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .name-title {
          font-size: 3.5rem;
          font-weight: bold;
          color: #f7f4c8;
          line-height: 1.2;
          margin: 0;
        }

        .subtitle {
          font-size: 1.75rem;
          color: #f7f4c8;
          font-weight: 500;
          margin: 0;
        }

        .description {
          font-size: 1.25rem;
          color: #f7f4c8;
          line-height: 1.6;
          margin: 0;
        }

        .social-links {
          display: flex;
          gap: 16px;
          margin-top: 8px;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          background: #333333;
          color: #FFFFFF;
          border-color: #333333;
        }

        .social-link:hover {
          background: #000000;
          border-color: #f6e05e;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .home-container {
            width: 95vw;
            aspect-ratio: 3/4;
          }

          .home-content {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }

          .avatar-container {
            width: 150px;
            height: 150px;
          }

          .name-title {
            font-size: 2rem;
          }

          .subtitle {
            font-size: 1.1rem;
          }

          .description {
            font-size: 0.9rem;
          }

          .social-links {
            justify-content: center;
            gap: 12px;
          }

          .social-link {
            padding: 10px 12px;
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
