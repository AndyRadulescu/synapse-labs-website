'use client';
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function About() {
    const container = useRef(null);

    useGSAP(() => {
        gsap.from('.about-content', {
            scrollTrigger: {
                trigger: '.about-content',
                start: 'top 80%',
            },
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'power4.out',
        });
        
        gsap.from('.about-image', {
          scrollTrigger: {
            trigger: '.about-image',
            start: 'top 80%',
          },
          scale: 0.8,
          opacity: 0,
          duration: 1.2,
          ease: 'power4.out',
        });
    }, { scope: container });

    return (
        <section id="meet" className="py-24 px-8 md:px-24 bg-white text-black min-h-screen flex items-center" ref={container}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="about-image aspect-square bg-gray-200 rounded-2xl overflow-hidden relative shadow-2xl">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium italic">
                        [Photo of Andy Rădulescu]
                    </div>
                    {/* <img src="/path-to-your-photo.jpg" alt="Andy Rădulescu" className="object-cover w-full h-full" /> */}
                </div>
                <div className="about-content">
                    <h2 className="text-5xl font-bold mb-8 tracking-tight">Meet the dev.</h2>
                    <p className="text-xl leading-relaxed mb-6">
                        Hi, I'm Andy. At Synapse Labs, I specialize in building high-performance, robust software solutions that solve real-world problems.
                    </p>
                    <p className="text-xl leading-relaxed opacity-80">
                        With a focus on performance and quality, I help companies turn complex ideas into seamless digital experiences. Whether it's a high-performance backend or a smooth interactive frontend, I'm here to build it.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
