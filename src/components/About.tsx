'use client';

import React from 'react';
import { User, GraduationCap, Languages, BookOpen, TrendingUp, Palette } from 'lucide-react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <>
      <div className="about-header">
        <div className="avatar-circle">
        <Image
          src="/avatar1.png"
          alt="Tracy Chung"
          width={80}
          height={80}
          className="avatar-image"
          />
        </div>
        <h2 className="about-title">About Me</h2>
        <p className="about-tagline">Curious learner, disciplined builder, always mixing skills to create something new.</p>
      </div>
      
      <div className="about-content">
        <div className="story-section">
          <p className="story-text">
            I started out teaching myself data analysis and digital drawing, mostly out of curiosity and a love for figuring things out on my own. Later, I decided to go back to school at BCIT to build a stronger computer science foundation and keep pushing myself with new technologies. I&apos;m the kind of person who learns fast, stays disciplined, and isn&apos;t afraid of challenges. I like keeping an open mind, trying new ideas, and turning them into something useful. I like combining different skills (coding, data, design, psychology) to create things that are both useful and interesting.
          </p>
        </div>
        
        <div className="info-grid">
          <div className="info-card">
            <div className="card-header">
              <GraduationCap size={20} className="card-icon" />
              <h3 className="card-title">Education</h3>
            </div>
            <div className="card-content">
              <div className="info-item">
                <div className="info-label">BCIT - Computer Systems Technology</div>
              </div>
              <div className="info-item">
                <div className="info-label">HKSYU - Counseling and Psychology</div>
              </div>
            </div>
          </div>
          
          <div className="info-card">
            <div className="card-header">
              <Languages size={20} className="card-icon" />
              <h3 className="card-title">Languages</h3>
            </div>
            <div className="card-content">
              <div className="info-item">
                <div className="info-label">English</div>
              </div>
              <div className="info-item">
                <div className="info-label">Chinese (Cantonese & Mandarin)</div>
              </div>
            </div>
          </div>
          
          <div className="info-card interests-card">
            <div className="card-header">
              <BookOpen size={20} className="card-icon" />
              <h3 className="card-title">Other Interests</h3>
            </div>
            <div className="card-content">
              <div className="interest-item">
                <BookOpen size={16} className="interest-icon" />
                <span>Reading — technology, psychology, self-development</span>
              </div>
              <div className="interest-item">
                <TrendingUp size={16} className="interest-icon" />
                <span>Investing — markets, on-chain data, trading systems</span>
              </div>
              <div className="interest-item">
                <Palette size={16} className="interest-icon" />
                <span>Drawing & Design — pixel art, UI/UX, icons</span>
              </div>
            </div>
          </div>
        </div>
      </div>
 
      <style jsx>{`
        .about-header {
          text-align: center;
          margin-bottom: 10px;
          padding-bottom: 10px;
          border-bottom: 2px solid #F7F4C8;
        }

        .avatar-circle {
          width: 80px;
          height: 80px;
          background:rgb(0, 0, 0);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 10px;
          border: 3px solid #000000;
          overflow: hidden;
        }

        .avatar-image {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          object-fit: cover;
        }

        .avatar-icon {
          color: #000000;
        }

        .about-title {
          color: #F7F4C8;
          font-size: 32px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .about-tagline {
          color: #F7F4C8;
          font-size: 16px;
          font-style: italic;
          margin: 0;
          opacity: 0.9;
        }

        .about-content {
          space-y: 24px;
        }

        .story-section {
          padding: 10px;
        }

        .story-text {
          color: #F7F4C8;
          font-size: 16px;
          line-height: 1.2;
          margin: 0;
          text-align: justify;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .interests-card {
          grid-column: 1 / -1;
        }

        .info-card {
          padding: 10px;
          transition: all 0.3s ease;
        }

        .info-card:hover {
          background: rgba(247, 244, 200, 0.05);
          transform: translateY(-2px);
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 10px;
          padding-bottom: 6px;
          border-bottom: 1px solid #F7F4C8;
        }

        .card-icon {
          color: #F7F4C8;
        }

        .card-title {
          color: #F7F4C8;
          font-size: 20px;
          font-weight: 600;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .card-content {
          space-y: 10px;
        }

        .info-item {
          margin-bottom: 6px;
        }

        .info-label {
          color: #F7F4C8;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .info-value {
          color: #F7F4C8;
          font-size: 14px;
          opacity: 0.9;
        }

        .interest-item {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 6px;
          color: #F7F4C8;
          font-size: 16px;
        }

        .interest-icon {
          color: #F7F4C8;
          flex-shrink: 0;
        }
 
        @media (max-width: 768px) {
          .about-title {
            font-size: 28px;
          }

          .about-tagline {
            font-size: 14px;
          }

          .story-text {
            font-size: 14px;
          }

          .info-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .interests-card {
            grid-column: 1;
          }

          .card-title {
            font-size: 18px;
          }

          .interest-item {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
};

export default About;