'use client';
import React from 'react';
import RotatingTrailingEffect from './RotatingTrailingEffect';

type Props = {
    show: boolean;
    tip?: string;
    color?: string;
    background?: string;   // overlay bg
    durationSec?: number;
};

export default function LoadingOverlay({
    show,
    tip = 'Loading…',
    color = '#FFD400',
    background = 'rgba(10,10,10,0.92)',
    durationSec = 5
}: Props) {
    return (
        <div
            aria-busy={show}
            role="status"
            aria-live="polite"
            className="fixed inset-0 z-[9999] grid place-items-center pointer-events-none"
            style={{
                background: background,
                opacity: show ? 1 : 0,
                transition: 'opacity 220ms ease-in-out'
            }}
        >
            {/* Keep pointer events off for container but on for inner box if you ever add buttons */}
            <div className="pointer-events-auto flex flex-col items-center gap-3">
                <div style={{ width: 240, height: 240 }}>
                    {/* Use your ring as the loader */}
                    <RotatingTrailingEffect
                        size={240}
                        color={color}
                        durationSec={durationSec}
                        background="transparent"  // background handled by overlay
                        tilt={80}
                        tiltY={0}
                        iconSize={30}
                    />
                </div>
                <div style={{ color: '#F7F4C8', fontWeight: 700, letterSpacing: 0.5 }}>
                    {tip}
                </div>
            </div>
        </div>
    );
}
