import React from "react";

type OrbitItem = {
  label: string;
  bg: string;
  fg: string;
  angle?: number; // initial angle in degrees
};

type RotatingTrailProps = {
  className?: string;
  size?: number;          // px
  color?: string;         // ring color
  durationSec?: number;   // seconds per rotation
  background?: string;    // spinner bg (keep transparent in overlays)
  tilt?: number;          // 3D tilt angle in degrees (X-axis)
  tiltY?: number;         // optional Y-axis tilt
  iconSize?: number;      // px for each badge
  items?: OrbitItem[];    // custom orbiting items
};

export default function RotatingTrailingEffect({
  className,
  size = 400,
  color = "#FFD400",
  durationSec = 3,
  background = "transparent",
  tilt = 100,
  tiltY = 0,
  iconSize = 40,
  items = [
    { label: "Py", bg: "#3776AB", fg: "#FFD43B", angle: 0 },        // Python-ish colors
    { label: "JS", bg: "#F7DF1E", fg: "#000000", angle: 120 },      // JS
    { label: "React", bg: "#61DAFB", fg: "#000000", angle: 240 },   // React
  ],
}: RotatingTrailProps) {
  const borderW = 3; // ring stroke

  // ——— Ring (arc) ———
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
    willChange: "transform",
  };

  const radius = size / 2 - iconSize / 2 - borderW / 2; // place badge center on ring

  const wrapperTilt: React.CSSProperties = {
    transform: `rotateX(${tilt}deg) rotateY(${tiltY}deg)`,
    transformStyle: "preserve-3d",
    willChange: "transform",
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
    borderRadius: 6, // subtle pixel-ish
    userSelect: "none",
    // Keep labels upright while the ring spins
    animation: `rt-spin-rev ${durationSec}s linear infinite`,
    boxShadow: `0 0 6px rgba(0,0,0,0.35)`,
    willChange: "transform",
    transform: "translateZ(0)",
  };

  return (
    <div
      className={`flex items-center justify-center w-full h-full ${className || ""}`}
      style={{ background, perspective: 1000 }}
    >
      <div style={wrapperTilt}>
        <div style={circleStyle}>
          {/* Orbiting items */}
          {items.map((it, idx) => (
            <div key={`${it.label}-${idx}`} style={orbitCenter} aria-label={it.label}>
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
                  {it.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes rt-spin { to { transform: rotate(1turn); } }
        @keyframes rt-spin-rev { to { transform: rotate(-1turn); } }
      `}</style>
    </div>
  );
}
