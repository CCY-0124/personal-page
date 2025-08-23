'use client';

import React, { useState } from 'react';
import { ExternalLink, Github, X, Play, Image as ImageIcon, User, Users, Star, Diamond } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  tagline: string;
  techStack: string[];
  description: string;
  githubLink?: string;
  demoLink?: string;
  highlights: string[];
  image?: string;
  video?: string;
  longDescription: string;
  features: string[];
  challenges: string[];
  learnings: string[];
  date: string;
  category: string;
  type: 'main' | 'additional';
  author: 'personal' | 'group';
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'no-plan-no-future',
      title: 'No Plan No Future',
      tagline: 'Lifestyle & productivity app with smart scheduling and fitness tracking',
      techStack: ['Next.js', 'React', 'Supabase', 'Tailwind', 'Recharts', 'Discord Webhooks'],
      description: 'A lifestyle management app that helps users organize daily activities, track fitness goals, and stay productive with integrated reminders and analytics.',
      githubLink: 'https://github.com/yourusername/no-plan-no-future',
      demoLink: 'https://no-plan-no-future.vercel.app',
      highlights: ['Bottom navigation', 'Statistics dashboard', 'Event reminders via Discord'],
      image: '/project-screenshots/no-plan-no-future.png',
      video: '/project-videos/no-plan-no-future.mp4',
      longDescription: 'No Plan No Future is a comprehensive lifestyle management application designed to help users take control of their daily routines, fitness goals, and productivity. The app combines intuitive scheduling with powerful analytics to provide users with insights into their habits and progress. Built with modern web technologies, it offers a seamless experience across all devices with real-time synchronization and offline capabilities.',
      features: [
        'Intuitive drag-and-drop calendar interface',
        'Fitness tracking with customizable workout plans',
        'Real-time statistics and progress visualization',
        'Discord integration for automated reminders',
        'Responsive design for mobile and desktop',
        'Offline functionality with data synchronization'
      ],
      challenges: [
        'Implementing real-time data synchronization across devices',
        'Designing an intuitive UI for complex scheduling workflows',
        'Optimizing performance for large datasets',
        'Integrating third-party APIs while maintaining security'
      ],
      learnings: [
        'Advanced state management with React Context and Redux',
        'Real-time data handling with WebSockets',
        'Performance optimization techniques for React applications',
        'User experience design principles for productivity apps'
      ],
      date: '2025-08-01',
      category: 'Full-Stack & Web Development',
      type: 'main',
      author: 'group'
    },
    {
      id: 'algorithmic-trading',
      title: 'Algorithmic Trading System',
      tagline: 'Automated crypto trading with real-time data and backtesting',
      techStack: ['Python', 'Pandas', 'NumPy', 'SciPy', 'ccxt', 'Glassnode API', 'Bybit API', 'AWS Lightsail', 'PostgreSQL'],
      description: 'An advanced cryptocurrency trading system with backtesting, risk management, and live execution. Handles real-time data ingestion and performance analytics.',
      githubLink: 'https://github.com/yourusername/algorithmic-trading',
      highlights: ['Automated strategy testing', 'Data validation pipeline', 'Parameter optimization'],
      image: '/project-screenshots/trading-system.png',
      video: '/project-videos/trading-demo.mp4',
      longDescription: 'This algorithmic trading system represents a sophisticated approach to cryptocurrency trading, combining advanced mathematical models with real-time market data processing. The system is designed to identify profitable trading opportunities through pattern recognition and statistical analysis, while maintaining strict risk management protocols. It includes comprehensive backtesting capabilities and live trading execution with minimal latency.',
      features: [
        'Real-time market data ingestion from multiple exchanges',
        'Advanced statistical analysis and pattern recognition',
        'Automated backtesting with historical data',
        'Risk management and position sizing algorithms',
        'Multi-exchange trading execution',
        'Comprehensive performance analytics dashboard'
      ],
      challenges: [
        'Handling high-frequency data streams with minimal latency',
        'Implementing robust error handling for exchange APIs',
        'Designing scalable architecture for real-time processing',
        'Ensuring data accuracy and consistency across sources'
      ],
      learnings: [
        'High-performance Python programming techniques',
        'Financial data analysis and statistical modeling',
        'System architecture for real-time applications',
        'Risk management in algorithmic trading'
      ],
      date: '2025-08-01',
      category: 'Data & Analytics',
      type: 'main',
      author: 'personal'
    },
    {
      id: 'scholist',
      title: 'Scholist',
      tagline: 'Student platform for managing resources, schedules, and collaboration',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Multer', 'Gemini API', 'Full-stack'],
      description: 'A platform for students to organize study materials, manage academic schedules, and collaborate with peers using AI-powered features.',
      githubLink: 'https://github.com/yourusername/scholist',
      demoLink: 'https://scholist.vercel.app',
      highlights: ['Resource sharing', 'Timetable integration', 'Clean student-friendly UI'],
      image: '/project-screenshots/scholist.png',
      video: '/project-videos/scholist-demo.mp4',
      longDescription: 'Scholist is a comprehensive academic management platform that addresses the common challenges students face in organizing their educational resources and collaborating with peers. The platform provides an intuitive interface for managing study materials, creating study groups, and tracking academic progress. It emphasizes simplicity and accessibility while offering powerful features for serious students.',
      features: [
        'Document upload and organization system',
        'Study group creation and management',
        'Interactive timetable with drag-and-drop functionality',
        'Progress tracking and goal setting',
        'Real-time collaboration tools',
        'Mobile-responsive design for on-the-go access'
      ],
      challenges: [
        'Designing an intuitive file management system',
        'Implementing real-time collaboration features',
        'Ensuring data security for academic materials',
        'Creating a scalable architecture for multiple institutions'
      ],
      learnings: [
        'Full-stack development with MERN stack',
        'Real-time collaboration implementation',
        'File upload and management systems',
        'User experience design for educational applications'
      ],
      date: '2025-05-01',
      category: 'Full-Stack & Web Development',
      type: 'main',
      author: 'group'
    },
    {
      id: 'personal-page',
      title: 'Personal Page (Pixel Portfolio)',
      tagline: 'Retro-styled interactive portfolio with pixel art design',
      techStack: ['Next.js', 'React', 'TypeScript', 'CSS Modules', 'Lucide Icons'],
      description: 'A unique personal portfolio designed as a retro pixel interface. Features draggable windows, custom CSS animations, and modular design.',
      githubLink: 'https://github.com/yourusername/personal-page',
      demoLink: 'https://personal-page.vercel.app',
      highlights: ['Draggable windows', 'Pixel art theme', 'Interactive navigation', 'Project showcase'],
      image: '/project-screenshots/personal-page.png',
      video: '/project-videos/personal-page-demo.mp4',
      longDescription: 'This personal portfolio website represents a unique approach to showcasing professional work through an interactive, pixel art-themed interface. The site features draggable windows that contain different sections of the portfolio, creating an engaging user experience that stands out from traditional portfolio designs. The implementation demonstrates advanced React patterns, state management, and creative CSS styling.',
      features: [
        'Draggable pixel art windows with custom styling',
        'Interactive navigation system with smooth transitions',
        'Comprehensive project showcase with detailed modals',
        'Responsive design that works across all devices',
        'Custom CSS animations and hover effects',
        'Modular component architecture for maintainability'
      ],
      challenges: [
        'Implementing smooth drag-and-drop functionality for windows',
        'Creating consistent pixel art styling across all components',
        'Managing complex state for multiple draggable windows',
        'Ensuring responsive design while maintaining visual integrity'
      ],
      learnings: [
        'Advanced React patterns and component composition',
        'CSS Grid and Flexbox for complex layouts',
        'State management for interactive UI elements',
        'Creative design implementation with technical constraints'
      ],
      date: '2025-08-01',
      category: 'Creative & Design',
      type: 'additional',
      author: 'personal'
    },
    {
      id: 'timetable-sheets',
      title: 'Timetable (Google Sheets Add-on)',
      tagline: 'Automated timetable generator built into Google Sheets',
      techStack: ['Google Sheets', 'Google Apps Script (JavaScript)', 'SpreadsheetApp', 'Triggers'],
      description: 'A Sheets-based add-on that automates timetable creation and management with custom menus and scripts.',
      githubLink: 'https://github.com/yourusername/timetable-sheets',
      demoLink: 'https://timetable-sheets.vercel.app',
      highlights: ['One-click timetable creation', 'Editable in Sheets', 'Automated formatting'],
      image: '/project-screenshots/timetable.png',
      video: '/project-videos/timetable-demo.mp4',
      longDescription: 'This project uses Google Apps Script to extend Google Sheets with custom functions, menus, and triggers for generating and managing a student timetable. The add-on automates formatting and slot creation directly inside Sheets.',
      features: [
        'Custom menu and dialog built with HTML Service',
        'Automatic time-slot generation and formatting',
        'Optional time-driven trigger to refresh/roll schedules',
        'Export/print-friendly layout from Sheets'
      ],
      challenges: [
        'Working within Google Apps Script limitations',
        'Implementing custom UI with HTML Service',
        'Managing spreadsheet permissions and triggers',
        'Ensuring cross-platform compatibility'
      ],
      learnings: [
        'Google Apps Script development',
        'Spreadsheet automation techniques',
        'HTML Service for custom interfaces',
        'Google Workspace API integration'
      ],
      date: '2025-07-01',
      category: 'Automation & Scripting',
      type: 'additional',
      author: 'personal'
    },
    {
      id: 'e-jobs-scraper',
      title: 'E-Jobs Web Scraper (BCIT)',
      tagline: 'Smart scraper for BCIT job postings with alerts & filtering',
      techStack: ['Python', 'BeautifulSoup', 'Requests', 'Asyncio', 'SQLite', 'Selenium'],
      description: 'A scraper that pulls job postings from BCITs career site, formats them for quick review, and supports automated alerts.',
      githubLink: 'https://github.com/yourusername/e-jobs-scraper',
      highlights: ['Automated job extraction', 'Intelligent filtering', 'Email notifications'],
      image: '/project-screenshots/job-scraper.png',
      video: '/project-videos/scraper-demo.mp4',
      longDescription: 'The E-Jobs Web Scraper is an intelligent automation tool designed to streamline the job search process for students and alumni. By automatically monitoring career websites and extracting relevant job postings, it saves users hours of manual searching. The system includes intelligent filtering, notification systems, and data analysis to help users identify the best opportunities.',
      features: [
        'Automated job posting extraction',
        'Intelligent filtering and categorization',
        'Email notification system for new postings',
        'Data analysis and trend reporting',
        'Customizable search criteria',
        'Export functionality for job applications'
      ],
      challenges: [
        'Handling dynamic content and JavaScript-rendered pages',
        'Implementing respectful scraping practices',
        'Managing large datasets efficiently',
        'Ensuring data accuracy and completeness'
      ],
      learnings: [
        'Web scraping techniques and best practices',
        'Asynchronous programming with Python',
        'Data processing and analysis',
        'Automation and workflow optimization'
      ],
      date: '2025-08-01',
      category: 'Automation & Scripting',
      type: 'additional',
      author: 'personal'
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long'
    });
  };

  const mainProjects = projects.filter(project => project.type === 'main');
  const additionalProjects = projects.filter(project => project.type === 'additional');

  return (
    <>
      <div className="blog-layout">
        {/* Header */}
        <header className="blog-header">
          <h1 className="blog-title">PROJECTS</h1>
          <p className="blog-subtitle">click on each project for more detail</p>
        </header>

        {/* Main Content */}
        <div className="blog-container">
          {/* Main Content Area */}
          <main className="blog-main">
            {projects.map((project) => (
              <article key={project.id} className="blog-post" onClick={() => setSelectedProject(project)}>
                <div className="post-header">
                  <div className="post-title-section">
                    <h2 className="post-title">{project.title}</h2>
                    <div className="post-buttons">
                      {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="post-btn github" onClick={(e) => e.stopPropagation()}>
                          <Github size={16} />
                        </a>
                      )}
                      {project.demoLink && (
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="post-btn demo" onClick={(e) => e.stopPropagation()}>
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="post-meta">
                    <span className="post-author">
                      {project.author === 'group' ? (
                        <>
                          <Users size={16} style={{ display: 'inline', marginRight: '4px' }} />
                          Group Project
                        </>
                      ) : (
                        <>
                          <User size={16} style={{ display: 'inline', marginRight: '4px' }} />
                          Personal Project
                        </>
                      )} · {formatDate(project.date)}
                    </span>
                    <span className="post-category">{project.category}</span>
                  </div>
                </div>
                
                <div className="post-content">
                  <div className="post-image">
                    <div className="image-placeholder">
                      <ImageIcon size={48} />
                      <span>Project Screenshot</span>
                    </div>
                  </div>
                  <div className="post-description">
                    <p>{project.description}</p>
                    <div className="post-tech">
                      {project.techStack.map((tech, index) => (
                        <span key={index} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </main>

          {/* Sidebar */}
          <aside className="blog-sidebar">
            {/* Main Projects */}
            <div className="sidebar-section">
              <h3 className="sidebar-title">Main Projects</h3>
              <ul className="project-list">
                {mainProjects.map((project) => (
                  <li key={project.id} className="sidebar-project-item">
                    <span className="sidebar-project-title">{project.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Additional Projects */}
            <div className="sidebar-section">
              <h3 className="sidebar-title">Additional Projects</h3>
              <ul className="project-list">
                {additionalProjects.map((project) => (
                  <li key={project.id} className="sidebar-project-item">
                    <span className="sidebar-project-title">{project.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div className="detail-modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="detail-modal-window" onClick={(e) => e.stopPropagation()}>
            <div className="detail-titlebar">
              <div className="detail-title-section">
                <span className="detail-title">Projects / {selectedProject.title}</span>
              </div>
              <div className="detail-buttons">
                <span 
                  className="detail-btn detail-close" 
                  onClick={() => setSelectedProject(null)}
                  onMouseDown={(e) => e.stopPropagation()}
                />
              </div>
            </div>
            <div className="detail-content">
              <div className="project-hero">
                <div className="project-info">
                  <div className="subtitle-with-links">
                    <h3 className="project-subtitle">{selectedProject.tagline}</h3>
                    <div className="subtitle-buttons">
                      {selectedProject.githubLink && (
                        <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="subtitle-link github">
                          <Github size={16} />
                          <span>GitHub</span>
                        </a>
                      )}
                      {selectedProject.demoLink && (
                        <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer" className="subtitle-link demo">
                          <ExternalLink size={16} />
                          <span>Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="project-description">{selectedProject.longDescription}</p>
                </div>
                {selectedProject.video && (
                  <div className="project-video">
                    <div className="video-placeholder">
                      <Play size={40} />
                      <span>Demo Video</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="project-section">
                <h3>Tech Stack</h3>
                <div className="tech-stack">
                  {selectedProject.techStack.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-section">
                <h3>Key Features</h3>
                <ul className="feature-list">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>
                      <Diamond size={16} className="feature-star" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-section">
                <h3>Project Screenshots</h3>
                <div className="screenshots-grid">
                  <div className="screenshot-item">
                    <div className="screenshot-placeholder">
                      <ImageIcon size={40} />
                      <span>Main Interface</span>
                    </div>
                    <p className="screenshot-description">Main application interface showing the core functionality</p>
                  </div>
                  <div className="screenshot-item">
                    <div className="screenshot-placeholder">
                      <ImageIcon size={40} />
                      <span>Dashboard View</span>
                    </div>
                    <p className="screenshot-description">Analytics dashboard with key metrics and insights</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .blog-layout {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .blog-header {
          background: #0a0a0a;
          padding: px 0;
          text-align: center;
          border-bottom: 3px solid #F7F4C8;
        }

        .blog-title {
          color: #F7F4C8;
          font-size: 48px;
          font-weight: 900;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 4px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .blog-subtitle {
          color: #F7F4C8;
          font-size: 18px;
          margin-top: 10px;
          margin-bottom: 10px;
          font-weight: 500;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        }

        .blog-container {
          flex: 1;
          display: flex;
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
          gap: 40px;
        }

        .blog-main {
          flex: 3;
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .blog-post {
          background: #141414;
          padding: 30px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          cursor: pointer;
          border: 2px solid #F7F4C8;
        }

        .post-header {
          margin-bottom: 20px;
        }

        .post-title-section {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;
        }

        .post-title {
          color: #F7F4C8;
          font-size: 28px;
          font-weight: 700;
          margin: 0;
          line-height: 1.3;
          flex: 1;
        }

        .post-title:hover {
          color: #f6e05e;
        }

        .post-meta {
          display: flex;
          gap: 20px;
          font-size: 14px;
          color: #F7F4C8;
        }

        .post-author {
          font-weight: 500;
        }

        .post-category {
          background: #F7F4C8;
          color: #000000;
          padding: 4px 12px;
          font-weight: 600;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .post-content {
          display: flex;
          gap: 24px;
          align-items: flex-start;
        }

        .post-image {
          flex-shrink: 0;
          width: 200px;
          height: 150px;
        }

        .image-placeholder {
          width: 100%;
          height: 100%;
          background: #F7F4C8;
          border: 2px solid #000000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #000000;
          font-size: 14px;
        }

        .post-description {
          flex: 1;
        }

        .post-description p {
          color: #F7F4C8;
          line-height: 1.6;
          margin: 0 0 16px 0;
          font-size: 16px;
        }

        .post-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-badge {
          background: #F7F4C8;
          color: #000000;
          padding: 6px 12px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .tech-badge.more {
          background: #000000;
          color: #F7F4C8;
        }

        .post-buttons {
          display: flex;
          gap: 8px;
          margin-left: 16px;
        }

        .post-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          text-decoration: none;
          border-radius: 4px;
          transition: all 0.2s ease;
          border: 1px solid transparent;
        }

        .post-btn.github {
          background: #333333;
          color: #FFFFFF;
          border: 1px solid #333333;
        }

        .post-btn.github:hover {
          background: #000000;
          border-color: #F7F4C8;
        }

        .post-btn.demo {
          background: #F7F4C8;
          color: #000000;
          border: 1px solid #F7F4C8;
        }

        .post-btn.demo:hover {
          background: #000000;
          color: #F7F4C8;
          border-color: #F7F4C8;
        }

        .blog-sidebar {
          flex: 1;
          background: #141414;
          padding: 30px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          height: fit-content;
          position: sticky;
          top: 20px;
          border: 2px solid #F7F4C8;
        }

        .sidebar-section {
          margin-bottom: 30px;
        }

        .sidebar-title {
          color: #F7F4C8;
          font-size: 24px;
          font-weight: 700;
          margin: 0 0 20px 0;
          text-transform: uppercase;
          letter-spacing: 1px;
          border-bottom: 3px solid #F7F4C8;
          padding-bottom: 10px;
        }

        .project-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .sidebar-project-item {
          padding: 12px 0;
          border-bottom: 1px solid #F7F4C8;
        }

        .sidebar-project-item:last-child {
          border-bottom: none;
        }

        .sidebar-project-title {
          color: #F7F4C8;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.3;
        }

        .detail-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
        }

        .detail-modal-window {
          color: #f7f4c8;
          background: #141414;
          border: 4px solid #f6e05e;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          position: relative;
          overflow: hidden;
          min-width: 300px;
          min-height: 200px;
          max-width: 90vw;
          max-height: 90vh;
        }

        .detail-titlebar {
          background: #0a0a0a;
          padding: 6px 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          image-rendering: pixelated;
          cursor: grab;
        }

        .detail-titlebar:active {
          cursor: grabbing;
        }

        .detail-title-section {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .subtitle-with-links {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
          min-height: 40px;
        }



        .subtitle-buttons {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .subtitle-link {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 8px 12px;
          text-decoration: none;
          border-radius: 4px;
          transition: all 0.2s ease;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .subtitle-link.github {
          background: #333333;
          color: #FFFFFF;
          border: 1px solid #333333;
        }

        .subtitle-link.github:hover {
          background: #000000;
          border-color: #f6e05e;
        }

        .subtitle-link.demo {
          background: #f6e05e;
          color: #000000;
          border: 1px solid #f6e05e;
        }

        .subtitle-link.demo:hover {
          background: #000000;
          color: #f6e05e;
          border-color: #f6e05e;
        }

        .detail-title {
          font-family: ui-monospace, Menlo, Monaco, Consolas, "Courier New", monospace;
          font-weight: 700;
          font-size: 20px;
          align-items: center;
          letter-spacing: 0.2px;
          color: #f6e05e;
        }

        .detail-buttons {
          display: flex;
          gap: 6px;
          align-items: center;
        }



        .detail-btn {
          width: 20px;
          height: 20px;
          display: inline-block;
          box-shadow: 0 0 0 2px #f6e05e inset, 0 0 0 2px #f6e05e;
          image-rendering: pixelated;
          cursor: pointer;
        }

        .detail-close {
          background: #ff4d4d;
        }

        .detail-content {
          max-height: 70vh;
          overflow: auto;
          padding: 16px;
          line-height: 1.4;
          background: #141414;
          border: 4px solid #f6e05e;
          margin: 8px;
          font-family: ui-monospace, Menlo, Monaco, Consolas, "Courier New", monospace;
          color: #F7F4C8;
        }

        .detail-content::-webkit-scrollbar {
          width: 12px;
        }

        .detail-content::-webkit-scrollbar-track {
          background: #0a0a0a;
          margin: 4px;
        }

        .detail-content::-webkit-scrollbar-thumb {
          background: #f6e05e;
          border: 2px solid #000000;
        }

        .detail-content::-webkit-scrollbar-thumb:hover {
          background: #f7f4c8;
        }

        .detail-content::-webkit-scrollbar-corner {
          background: #0a0a0a;
        }

        .project-hero {
          display: flex;
          gap: 24px;
          margin-bottom: 32px;
          padding-bottom: 24px;
          border-bottom: 1px solid #f6e05e;
        }

        .project-info {
          flex: 1;
        }

        .project-video {
          flex-shrink: 0;
          width: 300px;
        }

        .video-placeholder {
          width: 100%;
          height: 200px;
          background: rgba(246, 224, 94, 0.1);
          border: 2px solid #f6e05e;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #FF6B6B;
          font-size: 14px;
        }

        .project-subtitle {
          flex: 1;
          text-align: left;
          display: flex;
          align-items: center;
          justify-content: left;
          height: 100%;
          line-height: 1;
          color: #f6e05e;
          font-size: 20px;
          font-weight: 700;
          margin: 0;
        }

        .project-description {
          line-height: 1.7;
          font-size: 16px;
          margin: 0;
        }

        .project-media {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .media-item {
          background: rgba(246, 224, 94, 0.1);
          border: 2px solid #f6e05e;
          padding: 20px;
          text-align: center;
        }

        .media-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: #f6e05e;
        }

        .media-placeholder.video {
          color: #FF6B6B;
        }

        .project-section {
          margin-bottom: 32px;
        }

        .project-section h3 {
          color: #f6e05e;
          font-size: 22px;
          font-weight: 700;
          margin: 0 0 16px 0;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .feature-list,
        .challenge-list,
        .learning-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .feature-list li,
        .challenge-list li,
        .learning-list li {
          padding: 8px 0;
          position: relative;
          padding-left: 20px;
          font-size: 15px;
          line-height: 1.6;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .feature-star {
          color: #4CAF50;
          flex-shrink: 0;
        }

        .challenge-list li:before {
          content: "•";
          color: #FF9800;
          position: absolute;
          left: 0;
        }

        .learning-list li:before {
          content: "•";
          color: #f6e05e;
          position: absolute;
          left: 0;
        }

        .screenshots-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .screenshot-item {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .screenshot-placeholder {
          width: 100%;
          height: 150px;
          background: rgba(246, 224, 94, 0.1);
          border: 2px solid #f6e05e;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #f6e05e;
          font-size: 14px;
        }

        .screenshot-description {
          font-size: 14px;
          line-height: 1.4;
          color: #f7f4c8;
          margin: 0;
        }



        @media (max-width: 1024px) {
          .blog-container {
            flex-direction: column;
            gap: 30px;
          }

          .blog-sidebar {
            position: static;
          }

          .post-content {
            flex-direction: column;
          }

          .post-image {
            width: 100%;
            height: 200px;
          }
        }

        @media (max-width: 768px) {
          .blog-title {
            font-size: 36px;
          }

          .blog-container {
            padding: 20px 15px;
          }

          .blog-post {
            padding: 20px;
          }

          .post-title {
            font-size: 24px;
          }

          .post-meta {
            flex-direction: column;
            gap: 8px;
          }

          .detail-modal-window {
            margin: 10px;
            max-width: 95vw;
            max-height: 95vh;
          }

          .project-hero {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .detail-title {
            font-size: 20px;
          }

          .screenshots-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }


        }
      `}</style>
    </>
  );
};

export default Projects;
