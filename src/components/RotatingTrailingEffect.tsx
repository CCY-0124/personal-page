import React from "react";
import { 
  SiPython, 
  SiJavascript, 
  SiReact, 
  SiTypescript, 
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiGit,
  SiMongodb,
  SiPostgresql,
  SiNextdotjs,
  SiTailwindcss
} from 'react-icons/si';

type OrbitItem = {
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  bg: string;
  fg: string;
  angle?: number; // initial angle in degrees
};

type RotatingTrailProps = {
  size?: number;          // px
  color?: string;         // ring color
  durationSec?: number;   // seconds per rotation
  background?: string;    // page bg
  tilt?: number;          // 3D tilt angle in degrees (X-axis)
  tiltY?: number;         // optional Y-axis tilt
  iconSize?: number;      // px for each badge
  items?: OrbitItem[];    // custom orbiting items
};

export default function RotatingTrailingEffect({
  size = 220,
  color = "#FFD400",
  durationSec = 3,
  background = "#000",
  tilt = 75,
  tiltY = 0,
  iconSize = 28,
  items = [
    { label: "Python", icon: SiPython, bg: "#3776AB", fg: "#FFD43B", angle: 0 },
    { label: "JS", icon: SiJavascript, bg: "#F7DF1E", fg: "#000000", angle: 30 },
    { label: "React", icon: SiReact, bg: "#61DAFB", fg: "#000000", angle: 60 },
    { label: "TS", icon: SiTypescript, bg: "#3178C6", fg: "#FFFFFF", angle: 90 },
    { label: "Node", icon: SiNodedotjs, bg: "#339933", fg: "#FFFFFF", angle: 120 },
    { label: "HTML", icon: SiHtml5, bg: "#E34F26", fg: "#FFFFFF", angle: 150 },
    { label: "CSS", icon: SiCss3, bg: "#1572B6", fg: "#FFFFFF", angle: 180 },
    { label: "Git", icon: SiGit, bg: "#F05032", fg: "#FFFFFF", angle: 210 },
    { label: "Next", icon: SiNextdotjs, bg: "#000000", fg: "#FFFFFF", angle: 240 },
    { label: "Tailwind", icon: SiTailwindcss, bg: "#06B6D4", fg: "#FFFFFF", angle: 270 },
    { label: "Mongo", icon: SiMongodb, bg: "#47A248", fg: "#FFFFFF", angle: 300 },
    { label: "PostgreSQL", icon: SiPostgresql, bg: "#336791", fg: "#FFFFFF", angle: 330 },
  ],
}: RotatingTrailProps) {
  const borderW = 3; // ring stroke

  const circleStyle: React.CSSProperties = {
    width: size,
    height: size,
    borderStyle: "solid",
    borderWidth: `${borderW}px ${borderW}px 0 0`,
    borderColor: `${color} ${color} transparent transparent`,
    borderRadius: "50%",
    animation: `rt-spin ${durationSec}s linear infinite`,
    position: "relative",
    boxSizing: "border-box",
    transformStyle: "preserve-3d",
  };

  const radius = size / 2 - iconSize / 2 - borderW / 2; // place badge center on ring

  const wrapperTilt: React.CSSProperties = {
    transform: `rotateX(${tilt}deg) rotateY(${tiltY}deg)`,
    transformStyle: "preserve-3d",
  };

  const orbitCenter: React.CSSProperties = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: `translate(-50%, -50%)`,
    transformOrigin: "center",
    width: 0,
    height: 0,
  };

  const itemBox: React.CSSProperties = {
    width: iconSize,
    height: iconSize,
    display: "grid",
    placeItems: "center",
    fontSize: Math.max(11, Math.round(iconSize * 0.48)),
    fontWeight: 800,
    border: "1px solid #000",
    borderRadius: 6, // subtle pixel-ish corner
    userSelect: "none",
    // Counter-rotate so the labels stay upright while orbiting
    animation: `rt-spin-rev ${durationSec}s linear infinite`,
    boxShadow: `0 0 6px rgba(0,0,0,0.35)`,
    // Keep icons level by counter-rotating the tilt
    transform: `rotateX(${-tilt}deg)`,
  };

  return (
    <div
      className="flex items-center justify-center w-full h-full"
      style={{ background, perspective: 1000 }}
    >
      <div style={wrapperTilt}>
        <div style={circleStyle}>
          {/* Orbiting items */}
          {items.map((it, idx) => {
            const IconComponent = it.icon;
            return (
              <div key={idx} style={orbitCenter} aria-label={it.label}>
                <div
                  style={{
                    transform: `rotate(${it.angle ?? 0}deg) translate(${radius}px)`,
                    transformOrigin: "0 0",
                  }}
                >
                  <div
                    style={{
                      ...itemBox,
                      color: it.fg,
                      background: it.bg,
                    }}
                  >
                    <IconComponent size={iconSize * 0.6} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes rt-spin { to { transform: rotate(1turn); } }
        @keyframes rt-spin-rev { to { transform: rotate(-1turn); } }
      `}</style>
    </div>
  );
}
