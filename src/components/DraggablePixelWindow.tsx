"use client";
import React, { useState, useRef, useEffect } from "react";

type Props = {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  onClose: (id: string) => void;
  initialPosition?: { x: number; y: number };
  zIndex?: number;
  onWindowClick?: () => void;
  icon?: React.ReactNode;
  width: string;
  height: string;
};

export default function DraggablePixelWindow({
  id,
  title,
  children,
  className,
  onClose,
  initialPosition = { x: 100, y: 100 },
  zIndex = 1000,
  onWindowClick,
  icon,
  width,
  height,
}: Props) {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    // Bring window to front when clicked
    if (onWindowClick) {
      onWindowClick();
    }

    if (e.target === e.currentTarget || (e.target as HTMLElement).closest('.titlebar')) {
      setIsDragging(true);
      const rect = windowRef.current?.getBoundingClientRect();
      if (rect) {
        setDragOffset({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragOffset]);

  // Remove debug logging to prevent unnecessary re-renders

  return (
    <div
      ref={windowRef}
      className={`draggable-window ${className || ""}`}
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        zIndex: zIndex,
        cursor: isDragging ? 'grabbing' : 'default',
      }}
      onMouseDown={handleMouseDown}
    >
      <div 
        className="pixel-window"
        style={{
          width: width,
          height: height,
        }}
      >
        <div className="titlebar">
          <div className="title-section">
            {icon && <span className="title-icon">{icon}</span>}
            <span className="title">{title}</span>
          </div>
          <div className="buttons">
            <span 
              className="btn close" 
              onClick={() => onClose(id)}
              onMouseDown={(e) => e.stopPropagation()}
            />
          </div>
        </div>
        <div className="content">{children}</div>
      </div>

      <style jsx>{`
        .draggable-window {
          user-select: none;
        }

        .pixel-window {
          color: #f7f4c8;
          background: #000000;
          border-radius: 8px;
          border: 4px solid #f6e05e;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          position: relative;
          overflow: hidden;
          min-width: 300px;
          min-height: 200px;
          display: flex;
          flex-direction: column;
        }

        .titlebar {
          background: #000000;
          padding: 6px 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
          cursor: grab;
          flex-shrink: 0;
        }

        .titlebar:active {
          cursor: grabbing;
        }

        .title-section {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .title-icon {
          display: flex;
          align-items: center;
          color: #f6e05e;
        }

        .title {
          font-family: ui-monospace, Menlo, Monaco, Consolas, "Courier New", monospace;
          font-weight: 700;
          font-size: 24px;
          letter-spacing: 0.2px;
          color: #f6e05e;
        }

        .buttons {
          display: flex;
          gap: 6px;
        }

        .btn {
          width: 20px;
          height: 20px;
          display: inline-block;
          border-radius: 0px;
          box-shadow: 0 0 0 2px #f6e05e inset, 0 0 0 2px #f6e05e;
          cursor: pointer;
        }
        
        .btn.close {
          background: #ff4d4d;
        }

        .content {
          flex: 1;
          overflow: auto;
          padding: 16px;
          line-height: 1.4;
          background: #000000;
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
          border: 4px solid #f6e05e;
          margin: 8px;
          font-family: ui-monospace, Menlo, Monaco, Consolas, "Courier New", monospace;
          min-height: 0;
        }

        .content::-webkit-scrollbar {
          width: 12px;
        }

        .content::-webkit-scrollbar-track {
          background: #000000;
          margin: 4px;
        }

        .content::-webkit-scrollbar-thumb {
          background: #f6e05e;
          border-radius: 0px;
          border: 2px solid #000000;
        }

        .content::-webkit-scrollbar-thumb:hover {
          background: #f7f4c8;
        }

        .content::-webkit-scrollbar-corner {
          background: #000000;
        }
      `}</style>
    </div>
  );
}
