'use client';

import React, { useState, useEffect } from 'react';
import RotatingTrailingEffect from '../../components/RotatingTrailingEffect';

export default function LoaderTest() {
    const [isReady, setIsReady] = useState(false);

    // Simulate loading (e.g., 3 seconds)
    useEffect(() => {
        const timer = setTimeout(() => setIsReady(true), 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative min-h-screen bg-gray-900 text-white">
            {/* Loading Overlay */}
            {!isReady && (
                <div
                    className="fixed inset-0 z-50 grid place-items-center bg-black"
                    aria-busy="true"
                    aria-live="polite"
                    role="status"
                >
                    <div className="flex flex-col items-center gap-4">
                        <div style={{ width: 240, height: 240 }}>
                            <RotatingTrailingEffect
                                size={240}
                                color="#FFD400"
                                durationSec={3}
                                background="transparent"
                                tilt={75}
                                tiltY={0}
                                iconSize={30}
                            />
                        </div>
                        <span style={{ color: '#F7F4C8', fontWeight: 700 }}>
                            Loading test…
                        </span>
                    </div>
                </div>
            )}

            {/* Page content */}
            <main className="p-10" aria-hidden={!isReady}>
                <h1 className="text-4xl font-bold mb-4">Loader Test Page</h1>
                <p>This content will appear after the simulated loading delay.</p>
            </main>
        </div>
    );
}
