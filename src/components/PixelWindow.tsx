"use client";
import React from "react";
import { Home } from "lucide-react";

type Props = {
  title?: string;
  theme?: "yellow" | "blue";
  children: React.ReactNode;
  className?: string;
};

export default function PixelWindow({
  title = "Window",
  theme = "yellow",
  children,
  className,
}: Props) {
  return (
    <div className={`pixel-wrap ${className || ""}`} data-theme={theme}>
      <div className="pixel-window">
        <div className="titlebar">
          <div className="title-section">
            <Home className="home-icon" size={24} style={{ color: '#f6e05e' }} />
            <span className="title">{title}</span>
          </div>
          <div className="buttons">
            <span className="btn close" />
          </div>
        </div>
        <div className="content">{children}</div>
      </div>

      <style jsx>{`
        /* ----- theme tokens ----- */
        .pixel-wrap[data-theme="yellow"] {
          --bg: #0b0b0b;
          --panel: #141414;
          --titlebar-bg: #0a0a0a;
          --accent1: #f6e05e; /* yellow */
          --accent2: #000000;
          --text: #f7f4c8;
          --titlebar1: #1e1e1e;
          --titlebar2: #2a2a2a;
          --btn2: #ff4d4d;
        }
        .pixel-wrap[data-theme="blue"] {
          --bg: #232533;
          --panel: #2d2f41;
          --titlebar-bg: #1a1c2a;
          --accent1: #79c0ff; /* light blue */
          --accent2: #0b0e19;
          --text: #e6f2ff;
          --titlebar1: #92b4ff;
          --titlebar2: #6fa0ff;
          --btn2: #ff6b6b;
        }

        .pixel-window {
          color: var(--text);
          background: var(--panel);
          margin: 0 24px;
          border-radius: 8px;
          border: 4px solid var(--accent1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          position: relative;
          overflow: hidden;
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
        }
        
        .title-section {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .home-icon {
          color: #f6e05e !important;
          stroke-width: 2.5;
          image-rendering: pixelated;
        }

        .home-icon svg {
          color: #f6e05e !important;
          fill: #f6e05e !important;
          stroke: #f6e05e !important;
        }

        .home-icon path {
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
          max-height: 70vh;
          overflow: auto;
          padding: 16px;
          line-height: 1.4;
          background: var(--panel);
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
          border: 4px solid var(--accent1);
          margin: 8px;
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
      `}</style>
    </div>
  );
}
