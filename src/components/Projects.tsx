'use client';

import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  Play,
  Image as ImageIcon,
  User,
  Users,
  Diamond,
  MousePointerClick
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  tagline: string;
  techStack: string[];
  description: string;
  githubLink?: string;
  demoLink?: string;
  highlights: string[];
  coverImage?: string;       // card cover (4:3)
  screenshots: string[];     // gallery images (16:9)
  video?: string;            // optional mp4 for non-YouTube projects
  youtubeId?: string;        // only scholist
  longDescription: string;
  features: string[];
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
      techStack: ['Next.js', 'React', 'Supabase', 'Tailwind', 'Typescript', 'Discord Webhooks'],
      description:
        'A lifestyle management app that helps users organize daily activities, track fitness goals, and stay productive with integrated reminders and analytics.',
      githubLink: 'https://github.com/the-scholiast/NoPlanNoFuture',
      demoLink: 'https://no-plan-no-future.vercel.app',
      highlights: ['Bottom navigation', 'Statistics dashboard', 'Event reminders via Discord'],
      coverImage: '/project-screenshots/no-plan-no-future/cover.png',
      screenshots: [
        '/project-screenshots/no-plan-no-future/shot1.png',
        '/project-screenshots/no-plan-no-future/shot2.png',
        '/project-screenshots/no-plan-no-future/shot3.png',
        '/project-screenshots/no-plan-no-future/shot4.png'
      ],
      longDescription:
        'No Plan No Future is a comprehensive lifestyle management application designed to help users take control of their daily routines, fitness goals, and productivity. The app combines intuitive scheduling with powerful analytics to provide users with insights into their habits and progress. Built with modern web technologies, it offers a seamless experience across all devices with real-time synchronization and offline capabilities.',
      features: [
        'Intuitive drag-and-drop calendar interface',
        'Fitness tracking with customizable workout plans',
        'Real-time statistics and progress visualization',
        'Discord integration for automated reminders',
        'Responsive design for mobile and desktop',
        'Offline functionality with data synchronization'
      ],
      date: '2025-08-02',
      category: 'Full-Stack & Web Development',
      type: 'main',
      author: 'group'
    },
    {
      id: 'algorithmic-trading',
      title: 'Algorithmic Trading System',
      tagline: 'Automated crypto trading with real-time data and backtesting',
      techStack: [
        'Python',
        'Pandas',
        'NumPy',
        'SciPy',
        'ccxt',
        'Glassnode API',
        'Bybit API',
        'AWS Lightsail',
        'PostgreSQL'
      ],
      description:
        'An advanced cryptocurrency trading system with backtesting, risk management, and live execution. Handles real-time data ingestion and performance analytics.',
      githubLink: 'https://github.com/CCY-0124/Algo_Trading',
      highlights: ['Automated strategy testing', 'Data validation pipeline', 'Parameter optimization'],
      coverImage: '/project-screenshots/algorithmic-trading/cover.png',
      screenshots: [
        '/project-screenshots/algorithmic-trading/shot1.png',
        '/project-screenshots/algorithmic-trading/shot2.png',
      ],
      video: '/project-videos/trading-demo.mp4',
      longDescription:
        'This algorithmic trading system represents a sophisticated approach to cryptocurrency trading, combining advanced mathematical models with real-time market data processing. The system is designed to identify profitable trading opportunities through pattern recognition and statistical analysis, while maintaining strict risk management protocols. It includes comprehensive backtesting capabilities and live trading execution with minimal latency.',
      features: [
        'Real-time market data ingestion from multiple exchanges',
        'Advanced statistical analysis and pattern recognition',
        'Automated backtesting with historical data',
        'Risk management and position sizing algorithms',
        'Multi-exchange trading execution',
        'Comprehensive performance analytics dashboard'
      ],
      date: '2025-08-02',
      category: 'Data & Analytics',
      type: 'main',
      author: 'personal'
    },
    {
      id: 'scholist',
      title: 'Scholist',
      tagline: 'Student platform for managing resources, schedules, and collaboration',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Multer', 'Gemini API', 'Full-stack'],
      description:
        'A platform for students to organize study materials, manage academic schedules, and collaborate with peers using AI-powered features.',
      githubLink: 'https://github.com/tushitgrg/2800-202510-DTC07',
      demoLink: 'https://scholist.vercel.app',
      highlights: ['Resource sharing', 'Timetable integration', 'Clean student-friendly UI'],
      coverImage: '/project-screenshots/scholist/cover.png',
      screenshots: [
        '/project-screenshots/scholist/shot1.png',
        '/project-screenshots/scholist/shot2.png',
        '/project-screenshots/scholist/shot3.png',
        '/project-screenshots/scholist/shot4.png',
        '/project-screenshots/scholist/shot5.png',
        '/project-screenshots/scholist/shot6.png'
      ],
      youtubeId: 'aUjmIdcZkuk',
      longDescription:
        'Scholist is a comprehensive academic management platform that addresses the common challenges students face in organizing their educational resources and collaborating with peers. The platform provides an intuitive interface for managing study materials, creating study groups, and tracking academic progress. It emphasizes simplicity and accessibility while offering powerful features for serious students.',
      features: [
        'Document upload and organization system',
        'Study group creation and management',
        'Interactive timetable with drag-and-drop functionality',
        'Progress tracking and goal setting',
        'Real-time collaboration tools',
        'Mobile-responsive design for on-the-go access'
      ],
      date: '2025-05-02',
      category: 'Full-Stack & Web Development',
      type: 'main',
      author: 'group'
    },
    {
      id: 'personal-page',
      title: 'Personal Page',
      tagline: 'Retro-styled interactive portfolio with pixel art design',
      techStack: ['Next.js', 'React', 'TypeScript', 'CSS Modules', 'Lucide Icons'],
      description:
        'A unique personal portfolio designed as a retro pixel interface. Features draggable windows, custom CSS animations, and modular design.',
      githubLink: 'https://github.com/CCY-0124/personal-page',
      highlights: ['Draggable windows', 'Pixel art theme', 'Interactive navigation', 'Project showcase'],
      coverImage: '/project-screenshots/personal-page/cover.png',
      screenshots: [
        '/project-screenshots/personal-page/shot1.png',
        '/project-screenshots/personal-page/shot2.png',
      ],
      video: '/project-videos/personal-page-demo.mp4',
      longDescription:
        'This personal portfolio website represents a unique approach to showcasing professional work through an interactive, pixel art-themed interface. The site features draggable windows that contain different sections of the portfolio, creating an engaging user experience that stands out from traditional portfolio designs. The implementation demonstrates advanced React patterns, state management, and creative CSS styling.',
      features: [
        'Draggable pixel art windows with custom styling',
        'Interactive navigation system with smooth transitions',
        'Comprehensive project showcase with detailed modals',
        'Responsive design that works across all devices',
        'Custom CSS animations and hover effects',
        'Modular component architecture for maintainability'
      ],
      date: '2025-07-02',
      category: 'Creative & Design',
      type: 'additional',
      author: 'personal'
    },
    {
      id: 'e-jobs-scraper',
      title: 'E-Jobs Web Scraper',
      tagline: 'Smart scraper for BCIT job postings with alerts & filtering',
      techStack: ['Python', 'BeautifulSoup', 'Requests', 'Asyncio', 'SQLite', 'Selenium'],
      description:
        'A scraper that pulls job postings from BCITs career site, formats them for quick review, and supports automated alerts.',
      githubLink: 'https://github.com/yourusername/e-jobs-scraper',
      highlights: ['Automated job extraction', 'Intelligent filtering', 'Email notifications'],
      coverImage: '/project-screenshots/e-jobs-scraper/cover.png',
      screenshots: [
        '/project-screenshots/e-jobs-scraper/shot1.png',
      ],
      video: '/project-videos/scraper-demo.mp4',
      longDescription:
        'The E-Jobs Web Scraper is an intelligent automation tool designed to streamline the job search process for students and alumni. By automatically monitoring career websites and extracting relevant job postings, it saves users hours of manual searching. The system includes intelligent filtering, notification systems, and data analysis to help users identify the best opportunities.',
      features: [
        'Automated job posting extraction',
        'Intelligent filtering and categorization',
        'Email notification system for new postings',
        'Data analysis and trend reporting',
        'Customizable search criteria',
        'Export functionality for job applications'
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

  const mainProjects = projects.filter((project) => project.type === 'main');
  const additionalProjects = projects.filter((project) => project.type === 'additional');

  return (
    <>
      <div className="blog-layout">
        {/* Header */}
        <header className="blog-header">
          <h1 className="blog-title">PROJECTS</h1>
          <p className="blog-subtitle">
            click on each project for more detail{' '}
            <MousePointerClick size={20} style={{ display: 'inline', marginRight: '4px' }} />
          </p>
        </header>

        {/* Main Content */}
        <div className="blog-container">
          {/* Main Content Area */}
          <main className="blog-main">
            {projects.map((project) => (
              <article
                key={project.id}
                className="blog-post"
                onClick={() => setSelectedProject(project)}
              >
                <div className="post-header">
                  <div className="post-title-section">
                    <h2 className="post-title">{project.title}</h2>
                    <div className="post-buttons">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="post-btn github"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={16} />
                        </a>
                      )}
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="post-btn demo"
                          onClick={(e) => e.stopPropagation()}
                        >
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
                      )}{' '}
                      · {formatDate(project.date)}
                    </span>
                    <span className="post-category">{project.category}</span>
                  </div>
                </div>

                <div className="post-content">
                  <div className="post-image">
                    {project.coverImage ? (
                      <img
                        src={project.coverImage}
                        alt={`${project.title} cover`}
                        className="screenshot-img"  /* 4:3 cover */
                        loading="lazy"
                      />
                    ) : (
                      <div className="image-placeholder">
                        <ImageIcon size={48} />
                        <span>Project Cover</span>
                      </div>
                    )}
                  </div>
                  <div className="post-description">
                    <p>{project.description}</p>
                    <div className="post-tech">
                      {project.techStack.map((tech, index) => (
                        <span key={index} className="tech-badge">
                          {tech}
                        </span>
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
                        <a
                          href={selectedProject.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="subtitle-link github"
                        >
                          <Github size={16} />
                          <span>GitHub</span>
                        </a>
                      )}
                      {selectedProject.demoLink && (
                        <a
                          href={selectedProject.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="subtitle-link demo"
                        >
                          <ExternalLink size={16} />
                          <span>Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="project-description">{selectedProject.longDescription}</p>
                </div>

                {/* Media column: YouTube (scholist) > video > placeholder/cover */}
                <div className="project-video">
                  {selectedProject.id === 'scholist' && selectedProject.youtubeId ? (
                    <div className="video-embed">
                      <iframe
                        width="100%"
                        height="200"
                        src={`https://www.youtube.com/embed/${selectedProject.youtubeId}`}
                        title={`${selectedProject.title} demo video`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                  ) : selectedProject.coverImage ? (
                    <img
                      src={selectedProject.coverImage}
                      alt={`${selectedProject.title} cover`}
                      className="screenshot-img"  /* keep 4:3 for hero/cover */
                      loading="lazy"
                    />
                  ) : selectedProject.screenshots?.[0] ? (
                    <img
                      src={selectedProject.screenshots[0]}
                      alt={`${selectedProject.title} screenshot`}
                      className="screenshot-img"  /* still 4:3 in hero area */
                      loading="lazy"
                    />
                  ) : (
                    <div className="video-placeholder">
                      <ImageIcon size={40} />
                      <span>No media</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="project-section">
                <h3>Tech Stack</h3>
                <div className="tech-stack">
                  {selectedProject.techStack.map((tech, index) => (
                    <span key={index} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
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

              {/* Screenshots Gallery (16:9 only here) */}
              <div className="project-section">
                <h3>Project Screenshots</h3>
                <div className="screenshots-grid">
                  {(selectedProject.screenshots?.length
                    ? selectedProject.screenshots
                    : [null, null, null, null]
                  ).map((src, idx) => (
                    <div key={idx} className="screenshot-item">
                      {src ? (
                        <img
                          src={src}
                          alt={`${selectedProject.title} screenshot ${idx + 1}`}
                          className="gallery-img"   /* 16:9 for gallery only */
                          loading="lazy"
                        />
                      ) : (
                        <div className="gallery-placeholder">  {/* 16:9 placeholder */}
                          <ImageIcon size={40} />
                          <span>Screenshot {idx + 1}</span>
                        </div>
                      )}
                    </div>
                  ))}
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
          font-size: 46px;
          font-weight: 900;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 4px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .blog-subtitle {
          color: #F7F4C8;
          font-size: 20px;
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
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }

        .blog-post:hover {
          box-shadow: 0 8px 24px rgba(246, 224, 94, 0.4);
          transform: translateY(-4px);
        }

        .post-header { margin-bottom: 20px; }

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

        .post-title:hover { color: #f6e05e; }

        .post-meta {
          display: flex;
          gap: 20px;
          font-size: 16px;
          color: #F7F4C8;
        }

        .post-author { font-weight: 500; }

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
          width: 200px;
          aspect-ratio: 4 / 3; /* cover preview in list */
          object-fit: cover;
          border: 2px solid #000000;
          background: #000000;
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

        /* Covers (list cards + modal hero) stay 4:3 */
        .screenshot-img {
          width: 100%;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          border: 2px solid #000;
          display: block;
          background: #000;
        }

        .post-description { flex: 1; }

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

        .sidebar-section { margin-bottom: 30px; }

        .sidebar-title {
          color: #F7F4C8;
          font-size: 22px;
          font-weight: 700;
          margin: 0 0 20px 0;
          text-transform: uppercase;
          letter-spacing: 1px;
          border-bottom: 3px solid #F7F4C8;
          padding-bottom: 10px;
        }

        .project-list { list-style: none; padding: 0; margin: 0; }

        .sidebar-project-item { padding: 12px 0; border-bottom: 1px solid #F7F4C8; }
        .sidebar-project-item:last-child { border-bottom: none; }

        .sidebar-project-title {
          color: #F7F4C8;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.3;
        }

        .detail-modal-overlay {
          position: fixed;
          inset: 0;
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
        .detail-titlebar:active { cursor: grabbing; }

        .detail-title-section { display: flex; align-items: center; gap: 8px; }

        .subtitle-with-links {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
          min-height: 40px;
        }
        .subtitle-buttons { display: flex; align-items: center; gap: 8px; }

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
          background: #333333; color: #FFFFFF; border: 1px solid #333333;
        }
        .subtitle-link.github:hover {
          background: #000000; border-color: #f6e05e;
        }
        .subtitle-link.demo {
          background: #f6e05e; color: #000000; border: 1px solid #f6e05e;
        }
        .subtitle-link.demo:hover {
          background: #000000; color: #f6e05e; border-color: #f6e05e;
        }

        .detail-title {
          font-family: ui-monospace, Menlo, Monaco, Consolas, "Courier New", monospace;
          font-weight: 700;
          font-size: 24px;
          letter-spacing: 0.2px;
          color: #f6e05e;
        }

        .detail-buttons { display: flex; gap: 6px; align-items: center; }

        .detail-btn {
          width: 20px; height: 20px; display: inline-block;
          box-shadow: 0 0 0 2px #f6e05e inset, 0 0 0 2px #f6e05e;
          image-rendering: pixelated; cursor: pointer;
        }
        .detail-close { background: #ff4d4d; }

        .detail-content {
          max-height: 85vh; overflow: auto; padding: 16px; line-height: 1.4;
          background: #141414; border: 4px solid #f6e05e; margin: 8px;
          font-family: ui-monospace, Menlo, Monaco, Consolas, "Courier New", monospace;
          color: #F7F4C8;
        }

        .detail-content::-webkit-scrollbar { width: 12px; }
        .detail-content::-webkit-scrollbar-track { background: #0a0a0a; margin: 4px; }
        .detail-content::-webkit-scrollbar-thumb { background: #f6e05e; border: 2px solid #000000; }
        .detail-content::-webkit-scrollbar-thumb:hover { background: #f7f4c8; }
        .detail-content::-webkit-scrollbar-corner { background: #0a0a0a; }

        .project-hero {
          display: flex; gap: 24px; margin-bottom: 32px; padding-bottom: 24px;
          border-bottom: 1px solid #f6e05e;
        }
        .project-info { flex: 1; }
        .project-video { flex-shrink: 0; width: 300px; }

        .video-embed iframe, .video-player {
          border: 2px solid #f6e05e; background: #000;
        }

        .video-placeholder {
          width: 100%; height: 200px;
          background: rgba(246, 224, 94, 0.1); border: 2px solid #f6e05e;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          color: #FF6B6B; font-size: 14px;
        }

        .project-subtitle {
          flex: 1; text-align: left; display: flex; align-items: center; justify-content: left;
          height: 100%; line-height: 1; color: #f6e05e; font-size: 24px; font-weight: 700; margin: 0;
        }
        .project-description { line-height: 1.7; font-size: 18px; margin: 0; }

        .project-section { margin-bottom: 32px; }
        .project-section h3 {
          color: #f6e05e; font-size: 22px; font-weight: 700; margin: 0 0 16px 0;
          text-transform: uppercase; letter-spacing: 1px;
        }

        .tech-stack { display: flex; flex-wrap: wrap; gap: 8px; }

        .feature-list, .challenge-list, .learning-list { list-style: none; padding: 0; margin: 0; }
        .feature-list li, .challenge-list li, .learning-list li {
          padding: 8px 0; position: relative; padding-left: 20px; font-size: 16px; line-height: 1.6;
          display: flex; align-items: center; gap: 8px;
        }
        .feature-star { color: #4CAF50; flex-shrink: 0; }

        .screenshots-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;
        }
        .screenshot-item { display: flex; flex-direction: column; gap: 12px; }

        /* 16:9 ONLY for gallery */
        .gallery-img {
          width: 100%;
          aspect-ratio: 16 / 9;
          object-fit: cover;
          border: 2px solid #000;
          display: block;
          background: #000;
        }

        .gallery-placeholder {
          width: 100%;
          aspect-ratio: 16 / 9;
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
          font-size: 16px; line-height: 1.4; color: #f7f4c8; margin: 0;
        }

        @media (max-width: 1024px) {
          .blog-container { flex-direction: column; gap: 30px; }
          .blog-sidebar { position: static; }
          .post-content { flex-direction: column; }
          .post-image { width: 100%; height: 200px; }
        }

        @media (max-width: 768px) {
          .blog-title { font-size: 36px; }
          .blog-container { padding: 20px 15px; }
          .blog-post { padding: 20px; }
          .post-title { font-size: 24px; }
          .post-meta { flex-direction: column; gap: 8px; }
          .detail-modal-window { margin: 10px; max-width: 95vw; max-height: 95vh; }
          .project-hero { grid-template-columns: 1fr; gap: 16px; }
          .detail-title { font-size: 20px; }
          .screenshots-grid { grid-template-columns: 1fr; gap: 16px; }
        }
      `}</style>
    </>
  );
};

export default Projects;
