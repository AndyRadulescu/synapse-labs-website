'use client';
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { EmailForm } from './email-form';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function Contact() {
    const container = useRef(null);

    useGSAP(() => {
        gsap.from('.contact-header', {
            scrollTrigger: {
                trigger: '.contact-header',
                start: 'top 80%',
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power4.out',
        });
        
        gsap.from('.contact-form-container', {
          scrollTrigger: {
            trigger: '.contact-form-container',
            start: 'top 80%',
          },
          x: -50,
          opacity: 0,
          duration: 1,
          ease: 'power4.out',
        });
        
        gsap.from('.contact-info-container', {
          scrollTrigger: {
            trigger: '.contact-info-container',
            start: 'top 80%',
          },
          x: 50,
          opacity: 0,
          duration: 1,
          ease: 'power4.out',
        });
    }, { scope: container });

    return (
        <section id="contact" className="py-24 px-8 md:px-24 bg-white text-black min-h-screen rounded-b-xl overflow-x-hidden" ref={container}>
            <div className="max-w-7xl mx-auto">
                <div className="contact-header mb-20 text-center">
                    <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">Let&apos;s build something.</h2>
                    <p className="text-xl opacity-60">Reach out for a collaboration or just to say hi.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="contact-form-container">
                        <EmailForm />
                    </div>
                    <div className="w-full contact-info-container flex flex-col justify-between">
                        <div className="space-y-4 md:space-y-12 text-2xl font-medium text-lg lg:text-2xl font-medium text-2xl font-medium">
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-wider mb-2 md:mb-4 opacity-40">Email Us</h3>
                                <p className="">andyradulescu@synapselabs.org</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-wider mb-2 md:mb-4 opacity-40">Call Us</h3>
                                <p className="">+40 735747637</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-wider mb-2 md:mb-4 opacity-40">Location</h3>
                                <p className=" text-balance">Brașov, Romania — Available Worldwide</p>
                            </div>
                        </div>
                        <div className="pt-12 text-gray-400 text-sm">
                            <p>© {new Date().getFullYear()} Synapse Labs S.R.L.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
