'use client';

import React from 'react';
import { Briefcase, Code, Shield, Heart, Truck } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Junior Analyst',
      company: 'York House School',
      duration: 'Jan 2026 – Present',
      keyPoints: [
        'AI-Integrated Development: Developed and deployed corporate web tools and applications utilizing Docker containers; integrated Local LLMs and AI APIs to automate workflows and enhance system intelligence.',
        'Knowledge Base Deployment: Deployed and maintained a BookStack (Wiki) instance for over 1,000 daily users; implemented AI-powered search tools using embeddings, resulting in a 75% increase in search result accuracy.',
        'Infrastructure Management: Managed core IT infrastructure including server maintenance, internet setup, and virtual machine (VM) provisioning; utilized Cisco Meraki for network administration and Mosyle for device management across macOS/Windows/Linux environments.'
      ],
      icon: <Briefcase size={20} className="text-yellow-400" />
    },
    {
      title: 'Robotics and Coding Coach',
      company: 'Zebra Robotics',
      duration: 'July 2025 – Present',
      keyPoints: [
        'Taught 5–10 students in grades 1–6 programming using Python, Scratch, and MakeCode through LEGO robotics, fostering computational thinking and teamwork.',
        'Designed and adapted lesson plans by grade level to strengthen problem-solving skills and support diverse learning styles.',
        'Communicated with parents through weekly progress reports, ensuring alignment with student learning goals.',
        'Built and executed brand strategy for new market expansion using Canva and social media, achieving 75% conversion from open house/trials and 100% retention, contributing to 30% local enrollment growth.'
      ],
      icon: <Code size={20} className="text-yellow-400" />
    },
    {
      title: 'Fraud Analyst',
      company: 'RBC',
      duration: 'Oct 2023 – Nov 2024',
      keyPoints: [
        'Investigated and resolved 30–40 fraud cases daily using Excel and RBC\'s internal TS2 system, achieving 99.5% accuracy under 10-minute SLAs.',
        'Collaborated with compliance, risk, and external partners to optimize workflows, reducing average case resolution time by 20%.',
        'Delivered empathetic client service during fraud incidents, maintaining a top 5 KPI ranking in department performance.',
        'Ensured accuracy across 800+ monthly cases with an error rate of <0.5%, strengthening customer trust and operational reliability.'
      ],
      icon: <Shield size={20} className="text-yellow-400" />
    },
    {
      title: 'Traffic Coordinator',
      company: 'DB Schenker of Canada',
      duration: 'Dec 2022 – Sep 2023',
      keyPoints: [
        'Supported global clients by resolving logistics inquiries via phone/email, maintaining 95%+ first-contact resolution and 90% customer satisfaction.',
        'Coordinated freight schedules with international suppliers/customers, ensuring 98% on-time delivery for 40 weekly shipments.',
        'Monitored orders using DB Schenker\'s logistics tracking system, troubleshooting discrepancies and documenting resolutions to streamline team communication.'
      ],
      icon: <Truck size={20} className="text-yellow-400" />
    },
    {
      title: 'Counselor',
      company: 'Choi Hung Estate Catholic Secondary School',
      duration: 'Sep 2019 – Apr 2022',
      keyPoints: [
        'Supported 150+ students with empathetic, detail-oriented service, combining interpersonal communication with accurate case documentation across weekly sessions.',
        'Collected and analyzed student performance and attendance data to drive evidence-based decisions, identifying issues early and tailoring effective interventions.',
        'Applied problem-solving and customer service skills to design personalized plans, improving academic outcomes, emotional well-being, and reducing absenteeism.'
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
