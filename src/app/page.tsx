'use client';

import React, { useState } from 'react';
import { Code, FolderOpen, User, Briefcase, Award, Star } from 'lucide-react';
import Home from '@/components/Home';
import Navigation from '@/components/Navigation';
import DraggablePixelWindow from '@/components/DraggablePixelWindow';
import SkillsNew from '@/components/SkillsNew';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Certificate from '@/components/Certificate';
import FunStuff from '@/components/FunStuff';

type WindowState = {
  id: string;
  section: string;
  position: { x: number; y: number };
  zIndex: number;
  size: { width: string; height: string };
};

export default function PersonalPage() {
  const [openWindows, setOpenWindows] = useState<WindowState[]>([]);
  const [highestZIndex, setHighestZIndex] = useState(1000);

  // Window size configuration - memoized to prevent unnecessary recalculations
  const getWindowSize = React.useMemo(() => (section: string) => {
    const size = (() => {
      switch (section) {
        case 'skills':
          return { width: '1220px', height: '730px' }; 
        case 'projects':
          return { width: '1200px', height: '700px' }; 
        case 'about':
          return { width: '900px', height: '800px' }; 
        case 'experience':
          return { width: '880px', height: '650px' }; 
        case 'certificate':
          return { width: '900px', height: '620px' }; 
        case 'funstuff':
          return { width: '600px', height: '400px' }; 
        default:
          return { width: '500px', height: '400px' };
      }
    })();
    
    return size;
  }, []);

  const getWindowPosition = (section: string) => {
    // Get viewport dimensions
    const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
    const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
    
    switch (section) {
      case 'skills':
        return { 
          x: viewportWidth * 0.10, // 10% from left
          y: viewportHeight * 0.02  
        };
      case 'projects':
        return { 
          x: viewportWidth * 0.30, // 30% from left
          y: viewportHeight * 0.10  
        };
      case 'about':
        return { 
          x: (viewportWidth - 900) / 2, // center horizontally (900px is about window width)
          y: viewportHeight * 0.01  
        };
      case 'experience':
        return { 
          x: viewportWidth * 0.50, // 60% from left
          y: viewportHeight * 0.1  
        };
      case 'certificate':
        return { 
          x: viewportWidth * 0.05, // 70% from left
          y: viewportHeight * 0.1  
        };
      case 'funstuff':
        return { 
          x: viewportWidth * 0.20, // 20% from left
          y: viewportHeight * 0.20  
        };
      default:
        return { 
          x: 100, 
          y: 100 
        };
    }
  };

  const handleSectionChange = (section: string) => {
    // Check if window is already open
    const existingWindow = openWindows.find(window => window.section === section);
    if (existingWindow) {
      // Bring existing window to front
      bringWindowToFront(existingWindow.id);
      return;
    }

    // Get specific position for this section
    const newPosition = getWindowPosition(section);
    const newSize = getWindowSize(section);

    const newZIndex = highestZIndex + 1;
    setHighestZIndex(newZIndex);

    const newWindow: WindowState = {
      id: `${section}-${Date.now()}`,
      section,
      position: newPosition,
      zIndex: newZIndex,
      size: newSize, // Ensure size is properly set
    };

    // Preserve existing windows exactly as they are
    setOpenWindows(prev => [...prev, newWindow]);
  };

  const bringWindowToFront = (windowId: string) => {
    const newZIndex = highestZIndex + 1;
    setHighestZIndex(newZIndex);
    
    setOpenWindows(prev => 
      prev.map(window => 
        window.id === windowId 
          ? { ...window, zIndex: newZIndex }
          : window
      )
    );
  };

  const closeWindow = (windowId: string) => {
    setOpenWindows(prev => prev.filter(window => window.id !== windowId));
  };

  const renderSectionContent = (section: string) => {
    switch (section) {
      case 'skills':
        return <SkillsNew />;
      case 'projects':
        return <Projects />;
      case 'about':
        return <About />;
      case 'experience':
        return <Experience />;
      case 'certificate':
        return <Certificate />;
      case 'funstuff':
        return <FunStuff />;
      default:
        return null;
    }
  };

  const getSectionTitle = (section: string) => {
    switch (section) {
      case 'skills':
        return 'Skills & Expertise';
      case 'projects':
        return 'Projects';
      case 'about':
        return 'About Me';
      case 'experience':
        return 'Experience';
      case 'certificate':
        return 'Certificates';
      case 'funstuff':
        return 'Fun Stuff & Blog';
      default:
        return '';
    }
  };

  const getSectionIcon = (section: string) => {
    switch (section) {
      case 'skills':
        return <Code size={24} style={{ color: '#f6e05e' }} />;
      case 'projects':
        return <FolderOpen size={24} style={{ color: '#f6e05e' }} />;
      case 'about':
        return <User size={24} style={{ color: '#f6e05e' }} />;
      case 'experience':
        return <Briefcase size={24} style={{ color: '#f6e05e' }} />;
      case 'certificate':
        return <Award size={24} style={{ color: '#f6e05e' }} />;
      case 'funstuff':
        return <Star size={24} style={{ color: '#f6e05e' }} />;
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen relative">
      {/* Home page (always visible and centered) */}
      <Home onFunStuffClick={() => handleSectionChange('funstuff')} />
      
      {/* Navigation bar */}
      <Navigation 
        activeSection="" 
        onSectionChange={handleSectionChange} 
      />
      
      {/* Draggable windows */}
      {openWindows.map((window) => (
        <DraggablePixelWindow
          key={window.id}
          id={window.id}
          title={getSectionTitle(window.section)}
          initialPosition={window.position}
          zIndex={window.zIndex}
          onClose={closeWindow}
          onWindowClick={() => bringWindowToFront(window.id)}
          icon={getSectionIcon(window.section)}
          width={window.size.width}
          height={window.size.height}
        >
          {renderSectionContent(window.section)}
        </DraggablePixelWindow>
      ))}
    </main>
  );
}
