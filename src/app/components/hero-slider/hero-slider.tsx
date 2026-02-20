'use client';
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

import './hero-slider.scss';

function HeroSlider() {
    const container = useRef(null);

    useGSAP(() => {
        gsap.from('.hero-title', {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'power4.out',
            delay: 0.5
        });
        gsap.from('.hero-tagline', {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power4.out',
            delay: 0.8
        });
    }, { scope: container });

    return (
        <section className="hero-slider flex flex-col items-center justify-center h-screen relative overflow-hidden" ref={container}>
            <div className="text-center">
                <h1 className="hero-title text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-4">
                    Synapse LABS
                </h1>
                <p className="hero-tagline text-xl md:text-2xl font-light opacity-80 max-w-2xl mx-auto px-4">
                    Crafting robust software solutions and providing expert IT consulting for the modern era.
                </p>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
                </svg>
            </div>
        </section>
    );
}

export default HeroSlider;
