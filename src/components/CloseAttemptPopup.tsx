'use client';
import React from 'react';
import { AlertTriangle, Send } from 'lucide-react';
import DraggablePixelWindow from './DraggablePixelWindow';
import Image from 'next/image';

type Props = {
    open: boolean;
    onClose: () => void;
    count: number; // the attempt number to display
};

function toOrdinal(n: number) {
    const s = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export default function CloseAttemptPopup({ open, onClose, count }: Props) {
    if (!open) return null;

    return (
        <>
            {/* backdrop click closes */}
            <button
                onClick={onClose}
                aria-label="Close attempt popup"
                className="fixed inset-0 z-[999] bg-black/60"
            />
            <DraggablePixelWindow
                id="close-attempt-popup"
                title="Hey..."
                theme="yellow"
                icon={<AlertTriangle size={18} />}
                onClose={onClose}
                initialPosition={{ x: 720, y: 320 }}
                className="z-[1000]"
            >
                <div style={{ color: '#f7f4c8' }}>
                    <div className="avatar-container justify-center flex">
                        <Image
                        src="/cry.png"
                        alt="Tracy Chung"
                        width={200}
                        height={200}
                        className="cry-image"
                        />
                    </div>
                    <p className="text-lg font-bold mb-2">
                        You are the {toOrdinal(count)} person that tried to close this window.
                    </p>
                    <p className="opacity-80 flex gap-2">
                        What&apos;s wrong with it? Send me an email to tell me why 
                        <a
                            href={`mailto:chuiyingchungccy@gmail.com`}
                            className="px-3 py-1 font-extrabold rounded-xl p-3"
                            style={{ color: '#f7f4c8', padding: '2px'}}
                        >
                            <Send size={16} />
                        </a>
                    </p>


                </div>
            </DraggablePixelWindow>
        </>
    );
}
