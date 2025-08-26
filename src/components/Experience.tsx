'use client';

import React from 'react';
import { Briefcase, Code, Shield, Heart } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Robotics & Coding Coach & Marketing Designer',
      company: 'Zebra Robotics',
      duration: '2025 – Present',
      keyPoints: [
        'Teach students programming in Python, Scratch, and MakeCode',
        'Guide hands-on projects with LEGO robotics and problem-solving challenges',
        'Contributed to a startup franchise: designed posters, created promotional materials, and supported brand development'
      ],
      icon: <Code size={20} className="text-yellow-400" />
    },
    {
      title: 'Fraud Analyst',
      company: 'RBC',
      duration: '2023 – 2024',
      keyPoints: [
        'Analyzed large data sets to detect fraud patterns and suspicious activity',
        'Used case management systems to investigate and resolve incidents',
        'Collaborated with teams to improve fraud detection workflows and security measures'
      ],
      icon: <Shield size={20} className="text-yellow-400" />
    },
    {
      title: 'Counselor',
      company: 'CHECSS',
      duration: '2019-2022',
      keyPoints: [
        'Background in psychology and counselling with focus on interpersonal skills',
        'Provided guidance and support in learning, motivation, and communication',
        'Experience applying counseling techniques to help individuals build confidence and self-discipline'
      ],
      icon: <Heart size={20} className="text-yellow-400" />
    }
  ];

  return (
    <div className="experience-container">
      <div className="experience-header">
        <h2 className="experience-title">Experience</h2>
      </div>
      
      <div className="experience-timeline">
        {experiences.map((experience, index) => (
          <div key={index} className="timeline-item">
            {/* Timeline line */}
            {index < experiences.length - 1 && (
              <div className="timeline-line"></div>
            )}
            
            <div className="timeline-content">
              {/* Timeline dot */}
              <div className="timeline-dot">
                {experience.icon}
              </div>
              
              {/* Content */}
                             <div className="experience-card">
                 <div className="job-header">
                   <h3 className="job-title">
                     {experience.title}
                   </h3>
                   <span className="duration">
                     {experience.duration}
                   </span>
                 </div>
                
                <h4 className="company-name">
                  {experience.company}
                </h4>
                
                <ul className="key-points">
                  {experience.keyPoints.map((point, pointIndex) => (
                    <li key={pointIndex} className="point-item">
                      <span className="bullet">•</span>
                      <span className="point-text">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .experience-container {
          max-width: 800px;
          margin: 0 auto;
          background: #0b0b0b;
        }

        .experience-header {
          text-align: center;
          padding-bottom: 8px;
          border-bottom: 2px solid #F7F4C8;
        }

        .experience-title {
          color: #F7F4C8;
          font-size: 24px;
          font-weight: 700;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .experience-timeline {
          position: relative;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 5px;
          margin-top: 5px;
        }

        .timeline-line {
          position: absolute;
          left: 30px;
          top: 20px;
          width: 2px;
          height: 150px;
          background: #F7F4C8;
          z-index: 1;
        }

        .timeline-content {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .timeline-dot {
          width: 60px;
          height: 60px;
          background: #F7F4C8;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 3px solid #000000;
          z-index: 2;
        }

        .experience-card {
          flex: 1;
          background: rgba(247, 244, 200, 0.05);
          padding: 6px;
        }

        .job-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;

          flex-wrap: wrap;
          gap: 6px;
        }

        .job-title {
          color: #F7F4C8;
          font-size: 20px;
          font-weight: 600;
          margin: 0;
          line-height: 1.3;
        }

        .duration {
          color: #F7F4C8;
          font-size: 14px;
          font-weight: 500;
          background: rgba(247, 244, 200, 0.1);
          padding: 4px 12px;
        }

        .company-name {
          color: #F7F4C8;
          font-size: 16px;
          font-weight: 500;
          opacity: 0.9;
        }

        .key-points {
          list-style: none;
          padding: 0;
          margin: 0;
          space-y: 8px;
        }

        .point-item {
          display: flex;
          align-items: flex-start;
          gap: 6px;

        }

        .bullet {
          color: #F7F4C8;
          font-weight: bold;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .point-text {
          color: #F7F4C8;
          font-size: 14px;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .experience-container {
            padding: 6px;
            margin: 8px;
          }

          .experience-title {
            font-size: 20px;
          }

          .timeline-content {
            flex-direction: column;
            gap: 6px;
          }

          .timeline-dot {
            width: 50px;
            height: 50px;
          }

          .job-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .job-title {
            font-size: 18px;
          }

          .timeline-line {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Experience;
