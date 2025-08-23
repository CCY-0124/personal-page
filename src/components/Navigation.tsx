'use client';

import React from 'react';
import { 
  Code, 
  FolderOpen, 
  User, 
  Briefcase, 
  Award,
  Star
} from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionChange }) => {
  const sections = [
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'about', label: 'About Me', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'certificate', label: 'Certificate', icon: Award }
  ];

  return (
    <nav className="fixed bottom-10 left-0 right-0 bg-black/95 px-5 py-5 flex justify-center gap-8 z-50">
      {sections.map((section) => {
        const IconComponent = section.icon;
        const isActive = activeSection === section.id;
        
        return (
          <button
            key={section.id}
            onClick={() => onSectionChange(section.id)}
            className={`flex flex-col items-center gap-1.5 transition-all duration-300 ease-in-out ${
              isActive 
                ? 'text-yellow-100 -translate-y-1' 
                : 'text-yellow-400 hover:text-yellow-100 hover:-translate-y-2'
            }`}
          >
            <IconComponent 
              size={28} 
              className={`transition-all duration-300 ${
                isActive ? 'scale-110' : 'hover:scale-120'
              }`}
            />
            <span className="font-medium tracking-wider text-sm">
              {section.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

export default Navigation;
