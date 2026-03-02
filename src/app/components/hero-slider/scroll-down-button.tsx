'use client';

import React from 'react';
import { ChevronsDown } from 'lucide-react';

export default function ScrollDownButton() {
    const handleScroll = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    return (
        <button
            onClick={handleScroll}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 cursor-pointer hover:opacity-100 transition-opacity"
            aria-label="Scroll down"
        >
            <ChevronsDown size={30} strokeWidth={2} />
        </button>
    );
}
