'use client';

import React from 'react';
import { Award, Database, BarChart3, Shield } from 'lucide-react';

const Certificate: React.FC = () => {
  const certificates = [
    {
      name: 'CompTIA A+ ce Certification',
      icon: <Shield size={20} />,
      description: 'Professional IT certification covering hardware and software fundamentals. Issued by CompTIA.'
    },
    {
      name: 'IBM Data Analyst Professional Certificate',
      icon: <Database size={20} />,
      description: 'Comprehensive data analysis professional certification program. Issued by IBM (Coursera).'
    },
    {
      name: 'Data Analyst with Python',
      icon: <Database size={20} />,
      description: 'Python-based data analysis techniques and methodologies. Issued by DataCamp.'
    },
    {
      name: 'Data Analyst in SQL',
      icon: <Database size={20} />,
      description: 'SQL-based data analysis and database management skills. Issued by DataCamp.'
    },
    {
      name: 'Introduction to Data Science',
      icon: <Database size={20} />,
      description: 'Fundamental concepts and tools in data science. Issued by IBM (Coursera).'
    },
    {
      name: 'Data Visualization with Python',
      icon: <BarChart3 size={20} />,
      description: 'Creating effective data visualizations using Python libraries. Issued by DataCamp.'
    },
    {
      name: 'Data Visualization with Tableau',
      icon: <BarChart3 size={20} />,
      description: 'Advanced data visualization techniques using Tableau. Issued by UC Davis (Coursera).'
    },
    {
      name: 'Tableau Fundamentals',
      icon: <BarChart3 size={20} />,
      description: 'Core Tableau skills for data visualization and analysis. Issued by DataCamp.'
    }
  ];

  return (
    <>
      <div className="certificate-section">
        <h2 className="section-title">Certificates</h2>
        <div className="certificate-table">
          {certificates.map((certificate, index) => (
            <div key={index} className="certificate-row">
              <div className="certificate-item">
                <div className="certificate-icon">
                  {certificate.icon}
                </div>
                <div className="certificate-content">
                  <span className="certificate-name">{certificate.name}</span>
                  <p className="certificate-description">{certificate.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .section-title {
          color: #F7F4C8;
          font-size: 24px;
          font-weight: 700;
          text-align: center;
          margin-bottom: 0;
          text-transform: uppercase;
          letter-spacing: 2px;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
          border-bottom: 2px solid #F7F4C8;
          padding: 8px 0;
          background: #141414;
          position: relative;
          font-family: 'IBM Plex Mono', monospace;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 60px;
          line-height: 60px;
        }

        .certificate-section {
          margin-bottom: 30px;
        }

        .certificate-table {
          background: #141414;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .certificate-row {
          display: flex;
          align-items: flex-start;
        }

        .certificate-item {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          padding: 2px;
          width: 100%;
        }

        .certificate-icon {
          color: #F7F4C8;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2px;
          flex-shrink: 0;
        }

        .certificate-content {
          display: flex;
          flex-direction: column;
          gap: 2px;
          flex: 1;
        }

        .certificate-name {
          color: #F7F4C8;
          font-size: 18px;
          font-weight: 600;
          text-align: left;
          text-transform: none;
          letter-spacing: 0.5px;
        }

        .certificate-description {
          color: #F7F4C8;
          font-size: 14px;
          line-height: 1.5;
          margin: 0;
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 28px;
            padding: 15px;
          }

          .certificate-name {
            font-size: 16px;
          }

          .certificate-description {
            font-size: 12px;
          }
        }

        @media (max-width: 480px) {
          .certificate-name {
            font-size: 14px;
          }

          .certificate-description {
            font-size: 11px;
          }
        }
      `}</style>
    </>
  );
};

export default Certificate;
