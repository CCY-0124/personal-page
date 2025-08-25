'use client';
import React from 'react';
import { Mail, Copy, Send} from 'lucide-react';
import DraggablePixelWindow from './DraggablePixelWindow';

type Props = {
    open: boolean;
    onClose: () => void;
    email: string;
};

export default function EmailPopup({ open, onClose, email }: Props) {
    if (!open) return null;

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            const el = document.getElementById('email-copy-btn');
            if (el) {
                const old = el.textContent;
                el.textContent = 'Copied!';
            }
        } catch { }
    };

    return (
        <>
            {/* backdrop click closes */}
            <button
                onClick={onClose}
                aria-label="Close email popup"
                className="fixed inset-0 z-[999] bg-black/60"
            />
            <DraggablePixelWindow
                id="email-popup"
                title="Contact Email"
                theme="yellow"
                icon={<Mail size={18} />}
                onClose={() => onClose()}
                initialPosition={{ x: 800, y: 400 }}
                className="z-[1000]"
            >
                <div style={{ color: '#f7f4c8' }}>
                    <p className="mb-2 text-s uppercase tracking-wide opacity-80">Email me at:</p>
                    <div
                        className="flex items-center gap-4"
                        style={{ background: '#202020', border: '2px solid #000', padding: '10px 12px' }}
                    >
                        <span className="truncate text-xl font-bold">{email}</span>
                        <div className="ml-auto flex gap-2">
                            <button
                                id="email-copy-btn"
                                onClick={copy}
                                className="px-4 py-1 font-extrabold rounded-xl p-1"
                                style={{ color: '#f7f4c8', padding: '2px' }}
                            >
                                <Copy />
                            </button>
                            <a
                                href={`mailto:${email}`}
                                className="px-3 py-1 font-extrabold rounded-xl p-1"
                                style={{ color: '#f7f4c8', padding: '2px' }}
                            >
                                <Send />
                            </a>
                        </div>
                    </div>
                    <p className="mt-3 text-s opacity-70">I’m looking forward to your email :3 </p>
                </div>
            </DraggablePixelWindow>
        </>
    );
}
