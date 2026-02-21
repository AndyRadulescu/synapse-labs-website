'use client';
import React, {useRef} from 'react';
import {useGSAP} from '@gsap/react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import Expertise from './expertise/expertise';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

function About() {
    const container = useRef(null);
    const circleRef = useRef(null);
    const borderRef = useRef(null);

    useGSAP(() => {
        // Entrance animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: 'top 70%',
            }
        });

        tl.from('.about-title', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        })
            .from('.about-text p', {
                y: 20,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out'
            }, '-=0.4')
            .from(circleRef.current, {
                scale: 0.5,
                opacity: 0,
                duration: 1,
                ease: 'back.out(1.7)'
            }, '-=0.8');

        // Continuous Floating Animation
        gsap.to(circleRef.current, {
            y: -20,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });

        // Continuous Rotating Border
        gsap.to(borderRef.current, {
            rotation: 360,
            duration: 20,
            repeat: -1,
            ease: 'none'
        });

    }, {scope: container});

    return (
        <section id="meet" className="py-24 px-8 md:px-24 bg-white text-black overflow-hidden rounded-t-xl w-full lg:w-7/8"
                 ref={container}>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24">

                <div className="w-full md:w-5/12 flex justify-center items-center relative py-16 md:py-20">
                    <div
                        ref={borderRef}
                        className="absolute w-72 h-72 md:w-96 md:h-96 border-2 border-dashed border-orange-500/30 rounded-full z-0"
                    ></div>

                    <div
                        ref={circleRef}
                        className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gray-50 shadow-2xl overflow-hidden border-4 border-white flex items-center justify-center group z-10"
                    >
                        <div
                            className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent z-10"></div>

                        <div
                            className="absolute inset-0 z-20 transition-transform duration-500 group-hover:scale-110 flex items-center justify-center pointer-events-none">
                            <div
                                className="text-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="block text-4xl mb-2">👨‍💻</span>
                                <p className="text-white font-bold text-sm bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">Andy
                                    Rădulescu</p>
                            </div>
                        </div>

                        <div className="relative w-full h-full">
                            <Image
                                src="/andy-radulescu.webp"
                                alt="Andy Rădulescu"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    <div className="absolute w-48 h-48 bg-orange-400/10 rounded-full blur-3xl -z-10"></div>
                </div>

                <div className="w-full md:w-7/12 min-w-0">
                    <span className="inline-block text-orange-600 font-bold tracking-widest text-xs uppercase mb-4">The Developer</span>
                    <h2 className="about-title text-4xl md:text-6xl font-black mb-8 tracking-tight leading-tight">
                        I build software that <span className="text-orange-600">scales.</span>
                    </h2>

                    <div className="about-text space-y-6 text-lg text-gray-600 leading-relaxed max-w-xl">
                        <p>
                            Hi, I&apos;m Andy. At Synapse Labs, I specialize in bridging the gap between complex
                            business
                            logic and high-performance software.
                        </p>
                        <p>
                            My approach is simple: write clean, efficient code that solves problems today while being
                            ready for the demands of tomorrow.
                        </p>
                    </div>

                    <Expertise/>
                </div>
            </div>
        </section>
    );
}

export default About;
