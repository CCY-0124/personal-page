"use client";
import React, { useState, useRef, useEffect } from "react";

type Props = {
  id: string;
  title: string;
  theme?: "yellow" | "blue";
  children: React.ReactNode;
  className?: string;
  onClose: (id: string) => void;
  initialPosition?: { x: number; y: number };
  zIndex?: number;
  onWindowClick?: () => void;
  icon?: React.ReactNode;
  width?: string;
  height?: string;
};

export default function DraggablePixelWindow({
  id,
  title,
  theme = "yellow",
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

  return (
    <div
      ref={windowRef}
      className={`draggable-window ${className || ""}`}
      data-theme={theme}
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
          color: var(--text);
          background: var(--panel);
          border-radius: 8px;
          border: 4px solid var(--accent1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          position: relative;
          overflow: hidden;
          min-width: 300px;
          min-height: 200px;
          max-width: 90vw;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
        }

        .titlebar {
          background: var(--titlebar-bg);
          padding: 6px 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          image-rendering: pixelated;
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
          color: #f6e05e !important;
        }

        .title-icon svg {
          color: #f6e05e !important;
          fill: #f6e05e !important;
          stroke: #f6e05e !important;
        }

        .title-icon path {
          fill: #f6e05e !important;
          stroke: #f6e05e !important;
        }

        .title {
          font-family: ui-monospace, Menlo, Monaco, Consolas, "Courier New",
            monospace;
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
          box-shadow: 0 0 0 2px var(--accent1) inset,
            0 0 0 2px var(--accent1);
          image-rendering: pixelated;
          cursor: pointer;
        }
        .btn.close {
          background: var(--btn2);
        }

        .content {
          flex: 1;
          overflow: auto;
          padding: 16px;
          line-height: 1.4;
          background: var(--panel);
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
          border: 4px solid var(--accent1);
          margin: 8px;
          font-family: ui-monospace, Menlo, Monaco, Consolas, "Courier New", monospace;
          min-height: 0;
        }

        .content::-webkit-scrollbar {
          width: 12px;
        }

        .content::-webkit-scrollbar-track {
          background: var(--titlebar-bg);
          margin: 4px;
        }

        .content::-webkit-scrollbar-thumb {
          background: var(--accent1);
          border-radius: 0px;
          border: 2px solid var(--accent2);
        }

        .content::-webkit-scrollbar-thumb:hover {
          background: var(--text);
        }

        .content::-webkit-scrollbar-corner {
          background: var(--titlebar-bg);
        }

        /* Theme variables */
        .draggable-window[data-theme="yellow"] {
          --bg: #000000;
          --panel: #000000;
          --titlebar-bg: #000000;
          --accent1: #f6e05e;
          --accent2: #000000;
          --text: #f7f4c8;
          --btn2: #ff4d4d;
        }

        .draggable-window[data-theme="blue"] {
          --bg: #232533;
          --panel: #2d2f41;
          --titlebar-bg: #1a1c2a;
          --accent1: #79c0ff;
          --accent2: #0b0e19;
          --text: #e6f2ff;
          --btn2: #ff6b6b;
        }
      `}</style>
    </div>
  );
}
