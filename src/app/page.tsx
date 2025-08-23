'use client';

import React, { useState } from 'react';
import { Code, FolderOpen, User, Briefcase, Award, Star } from 'lucide-react';
import Home from '@/components/Home';
import Navigation from '@/components/Navigation';
import DraggablePixelWindow from '@/components/DraggablePixelWindow';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Certificate from '@/components/Certificate';
import FunStuff from '@/components/FunStuff';

type WindowState = {
  id: string;
  section: string;
  position: { x: number; y: number };
};

export default function PersonalPage() {
  const [openWindows, setOpenWindows] = useState<WindowState[]>([]);

  const handleSectionChange = (section: string) => {
    // Check if window is already open
    const existingWindow = openWindows.find(window => window.section === section);
    if (existingWindow) {
      return; // Window already open
    }

    // Calculate position for new window (staggered)
    const newPosition = {
      x: 100 + (openWindows.length * 50),
      y: 100 + (openWindows.length * 50),
    };

    const newWindow: WindowState = {
      id: `${section}-${Date.now()}`,
      section,
      position: newPosition,
    };

    setOpenWindows(prev => [...prev, newWindow]);
  };

  const closeWindow = (windowId: string) => {
    setOpenWindows(prev => prev.filter(window => window.id !== windowId));
  };

  const renderSectionContent = (section: string) => {
    switch (section) {
      case 'skills':
        return <Skills />;
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
          theme="yellow"
          initialPosition={window.position}
          onClose={closeWindow}
          icon={getSectionIcon(window.section)}
        >
          {renderSectionContent(window.section)}
        </DraggablePixelWindow>
      ))}
    </main>
  );
}
