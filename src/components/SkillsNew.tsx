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

const SkillsNew: React.FC = () => {
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
    <div style={{ 
      maxHeight: '100vh', 
      overflowY: 'auto',
      fontFamily: "'IBM Plex Mono', monospace"
    }}>
      {/* Upper Part - Tech Skills */}
      <div style={{ marginBottom: '10px' }}>
        <h2 style={{
          color: '#F7F4C8',
          fontSize: '26px',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '0',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
          borderBottom: '2px solid #F7F4C8',
          padding: '4px 0',
          background: '#141414',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '40px',
          lineHeight: '40px'
        }}>
          Technical Skills
        </h2>
        
        <div style={{
          background: '#141414',
          padding: '5px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>
          {techSkills.map((category, categoryIndex) => (
            <div key={categoryIndex} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '20px'
            }}>
              <h3 style={{
                color: '#F7F4C8',
                fontSize: '20px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                textAlign: 'left',
                width: '200px',
                flexShrink: '0',
                display: 'flex',
                alignItems: 'center',
                height: '60px'
              }}>
                {category.title}
              </h3>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                flex: '1'
              }}>
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px',
                    border: '2px solid #F7F4C8',
                    padding: '6px 10px',
                    minWidth: '70px',
                    height: '50px',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#F7F4C8';
                    e.currentTarget.style.color = '#000000';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#F7F4C8';
                  }}>
                    <div style={{
                      color: '#F7F4C8',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '2px'
                    }}>
                      {item.icon}
                    </div>
                    <span style={{
                      color: '#F7F4C8',
                      fontSize: '12px',
                      fontWeight: '700',
                      textAlign: 'center',
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px'
                    }}>
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lower Part - Additional Skills */}
      <div style={{ marginTop: '20px' }}>
        <h2 style={{
          color: '#F7F4C8',
          fontSize: '26px',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '0',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
          borderBottom: '2px solid #F7F4C8',
          padding: '4px 0',
          background: '#141414',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '40px',
          lineHeight: '40px'
        }}>
          Additional Skills
        </h2>
        
        <div style={{
          background: '#141414',
          padding: '10px',
          display: 'flex',
          flexDirection: 'column',
          gap: '0'
        }}>
          {additionalSkills.map((skill, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'flex-start'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '15px',
                padding: '2px',
                width: '100%'
              }}>
                <div style={{
                  color: '#F7F4C8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2px'
                }}>
                  {skill.icon}
                </div>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2px',
                  flex: '1'
                }}>
                  <span style={{
                    color: '#F7F4C8',
                    fontSize: '16px',
                    fontWeight: '600',
                    textAlign: 'left',
                    textTransform: 'none',
                    letterSpacing: '0.5px'
                  }}>
                    {skill.name}
                  </span>
                  <p style={{
                    color: '#F7F4C8',
                    fontSize: '14px',
                    margin: '0',
                    opacity: '0.8'
                  }}>
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsNew;
