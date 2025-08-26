'use client';

import React from 'react';
import { 
  Code, 
  Database, 
  Wrench, 
  GitBranch, 
  BarChart3, 
  Cpu, 
  Palette, 
  Heart,
  Library,
  Monitor,
  FileText,
  Globe,
  Server,
  Cloud,
  Terminal,
  Settings,
  Zap,
  Layers,
  Package,
  Box,
  Activity,
  TrendingUp,
  Brain,
  Users,
  Circle,
  Square,
  Triangle
} from 'lucide-react';

interface SkillItem {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  title: string;
  items: SkillItem[];
}

const Skills: React.FC = () => {
  const techSkills: SkillCategory[] = [
    {
      title: 'Languages',
      items: [
        { name: 'Python', icon: <Terminal size={20} /> },
        { name: 'JavaScript', icon: <Code size={20} /> },
        { name: 'TypeScript', icon: <Code size={20} /> },
        { name: 'SQL', icon: <Database size={20} /> },

      ]
    },
    {
      title: 'Frameworks / Libraries',
      items: [
        { name: 'React', icon: <Circle size={20} /> },
        { name: 'Next.js', icon: <Square size={20} /> },
        { name: 'Node.js', icon: <Server size={20} /> },
        { name: 'Express', icon: <Package size={20} /> },
        { name: 'Tailwind', icon: <Triangle size={20} /> }
      ]
    },
    {
      title: 'Backend & Data',
      items: [
        { name: 'MongoDB', icon: <Database size={20} /> },
        { name: 'Supabase', icon: <Cloud size={20} /> },
        { name: 'AWS Lightsail', icon: <Server size={20} /> },
        { name: 'PostgreSQL', icon: <Database size={20} /> }
      ]
    },
    {
      title: 'Tools',
      items: [
        { name: 'GitHub', icon: <GitBranch size={20} /> },
        { name: 'Jupyter', icon: <FileText size={20} /> },
        { name: 'Figma', icon: <Palette size={20} /> }
      ]
    }
  ];

  const additionalSkills = [
    { 
      name: 'Data Analysis', 
      icon: <BarChart3 size={20} />,
      description: 'Statistical analysis, data visualization, and extracting actionable insights using Pandas, NumPy, SciPy, Matplotlib, Plotly, SQL, and Jupyter Notebook.'
    },
    { 
      name: 'Hardware & Robotics', 
      icon: <Cpu size={20} />,
      description: 'PC building, hardware troubleshooting, system maintenance, and hands-on robotics projects with sensors and automation.'
    },
    { 
      name: 'Design & Marketing', 
      icon: <Palette size={20} />,
      description: 'Digital art, illustration, icon design, UI/UX, marketing, branding, and promotional graphics.'
    },
    { 
      name: 'Psychology & Counseling', 
      icon: <Brain size={20} />,
      description: 'Background in psychology and counseling, focusing on user experience, teamwork, and human-centered technology design.'
    }
  ];

  return (
    <div className="skills-container">
      {/* Upper Part - Tech Skills */}
      <div className="tech-skills-section">
        <h2 className="section-title">Technical Skills</h2>
                 <div className="skills-table">
           {techSkills.map((category, categoryIndex) => (
             <div key={categoryIndex} className="skill-row">
               <h3 className="category-title">{category.title}</h3>
               <div className="skill-items">
                 {category.items.map((item, itemIndex) => (
                   <div key={itemIndex} className="skill-item">
                     <div className="skill-icon">
                       {item.icon}
                     </div>
                     <span className="skill-name">{item.name}</span>
                   </div>
                 ))}
               </div>
             </div>
           ))}
         </div>
      </div>

             {/* Lower Part - Additional Skills */}
       <div className="additional-skills-section">
         <h2 className="section-title">Additional Skills</h2>
         <div className="additional-skills-table">
           {additionalSkills.map((skill, index) => (
             <div key={index} className="additional-skill-row">
               <div className="additional-skill-item">
                 <div className="skill-icon">
                   {skill.icon}
                 </div>
                 <div className="skill-content">
                   <span className="skill-name">{skill.name}</span>
                   <p className="skill-description">{skill.description}</p>
                 </div>
               </div>
             </div>
           ))}
         </div>
       </div>

      <style jsx>{`
        .skills-container {
          max-height: 100vh;
          overflow-y: auto;
        }

                 :global(.content) {
           width: 100%;
           max-width: 1200px;
           max-height: 100vh;
           overflow-y: auto;
           margin: 0 auto;
           padding: 5px 8px 5px 5px;
           background: #000000 !important;
           font-family: 'IBM Plex Mono', monospace;
         }

                 .section-title {
           color: #F7F4C8;
           font-size: 26px;
           font-weight: 700;
           text-align: center;
           margin-bottom: 0;
           text-transform: uppercase;
           letter-spacing: 2px;
           text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
           border-bottom: 2px solid #F7F4C8;
           padding: 4px 0;
           background: #141414;
           position: relative;
           font-family: 'IBM Plex Mono', monospace;
           display: flex;
           align-items: center;
           justify-content: center;
           height: 40px;
           line-height: 40px;
         }

        

        /* Tech Skills Section */
        .tech-skills-section {
          margin-bottom: 10px;
        }

                          .skills-table {
           background: #141414;
           padding: 5px;
           display: flex;
           flex-direction: column;
           gap: 10px;
         }

         .skill-row {
           display: flex;
           align-items: flex-start;
           gap: 20px;
         }

         .category-title {
           color: #F7F4C8;
           font-size: 20px;
           font-weight: 700;
           text-transform: uppercase;
           letter-spacing: 2px;
           text-align: left;
           width: 200px;
           flex-shrink: 0;
           display: flex;
           align-items: center;
           height: 60px;
         }

                  .skill-items {
           display: flex;
           flex-wrap: wrap;
           gap: 12px;
           flex: 1;
         }

                 .skill-item {
           display: flex;
           flex-direction: column;
           align-items: center;
           gap: 4px;
           border: 2px solid #F7F4C8;
           padding: 6px 10px;
           min-width: 70px;
           height: 50px;
           justify-content: center;
           transition: all 0.2s ease;
         }

        .skill-item:hover {
          background: #F7F4C8;
          color: #000000;
        }

        .skill-item:hover .skill-icon {
          color: #000000;
        }

        .skill-icon {
          color: #F7F4C8;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2px;
        }

                 .skill-name {
           color: #F7F4C8;
           font-size: 18px;
           font-weight: 600;
           text-align: left;
           text-transform: uppercase;
           letter-spacing: 1px;
         }

        .skill-item:hover .skill-name {
          color: #000000;
        }

        /* Tech Skills specific styling */
        .tech-skills-section .skill-name {
          color: #F7F4C8;
          font-size: 14px;
          font-weight: 700;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }

        .tech-skills-section .skill-item:hover .skill-name {
          color: #000000;
        }

        /* Additional Skills specific styling */
        .additional-skills-section .skill-name {
          color: #F7F4C8;
          font-size: 20px;
          font-weight: 600;
          text-align: left;
          text-transform: none;
          letter-spacing: 0.5px;
        }

                 /* Additional Skills Section */
         .additional-skills-section {
           margin-top: 20px;
         }

         .additional-skills-table {
           background: #141414;
           padding: 10px;
           display: flex;
           flex-direction: column;
           gap: 0;
         }

         .additional-skill-row {
           display: flex;
           align-items: flex-start;
         }

         .additional-skill-item {
           display: flex;
           align-items: flex-start;
           gap: 15px;
           padding: 2px;
           width: 100%;
         }

         .skill-content {
           display: flex;
           flex-direction: column;
           gap: 2px;
           flex: 1;
         }

         .skill-description {
           color: #F7F4C8;
           font-size: 16px;
           margin: 0;
           opacity: 0.8;
         }

                 /* Responsive Design */

                 @media (max-width: 768px) {
           .skills-container {
             padding: 10px 8px;
           }

           .section-title {
             font-size: 28px;
             padding: 10px;
           }

           .skill-row {
             flex-direction: column;
             gap: 15px;
           }

           .category-title {
             min-width: auto;
           }

           .category-title {
             font-size: 16px;
           }

          .skill-items {
            gap: 8px;
          }

          .skill-item {
            padding: 8px 12px;
            min-width: 70px;
          }

          .tech-skills-section .skill-name {
            font-size: 12px;
          }

          .additional-skills-section .skill-name {
            font-size: 16px;
          }

          .skill-bar-content {
            padding: 10px 15px;
            gap: 15px;
          }

          .skill-bar-text {
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .skill-items {
            justify-content: flex-start;
          }

          .skill-item {
            min-width: 60px;
            padding: 6px 8px;
          }

          .tech-skills-section .skill-name {
            font-size: 10px;
          }

          .additional-skills-section .skill-name {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default Skills;
