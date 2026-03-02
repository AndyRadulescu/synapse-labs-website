import React from 'react';
import Image from 'next/image';

import './hero-slider.scss';

function HeroSlider() {
    return (
        <section className="hero-slider flex flex-col items-center justify-center h-screen relative overflow-hidden">
            <div className="hero-gradient">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
                <div className="blob blob-3"></div>
            </div>

            <div className="z-10">
                <h1
                    className="hero-title md:text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-4 flex justify-center items-center flex-wrap animate-hero-title">
                    <div className="flex items-center justify-center">
                        <Image src="/logo-1.png" alt="Synapse LABS Logo" width={100} height={100}
                               className="w-[1.5em] h-[1.5em] object-contain"/><span className="mr-2">ynapse</span>
                    </div>
                    <span> LABS</span>
                </h1>
                <p className="hero-tagline text-xl md:text-2xl font-light opacity-80 max-w-2xl mx-auto px-4 animate-hero-tagline">
                    Crafting robust software solutions and providing expert IT consulting for the modern era.
                </p>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                     strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
                </svg>
            </div>
        </section>
    );
}

export default HeroSlider;
