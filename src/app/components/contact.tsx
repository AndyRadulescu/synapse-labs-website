'use client';
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

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
        <section id="contact" className="py-24 px-8 md:px-24 bg-white text-black min-h-screen" ref={container}>
            <div className="max-w-7xl mx-auto">
                <div className="contact-header mb-20 text-center">
                    <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">Let's build something.</h2>
                    <p className="text-xl opacity-60">Reach out for a collaboration or just to say hi.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="contact-form-container">
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold uppercase tracking-wider mb-2">Name</label>
                                <input type="text" className="w-full border-b-2 border-gray-200 py-4 focus:border-black outline-none transition-colors" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold uppercase tracking-wider mb-2">Email</label>
                                <input type="email" className="w-full border-b-2 border-gray-200 py-4 focus:border-black outline-none transition-colors" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold uppercase tracking-wider mb-2">Message</label>
                                <textarea className="w-full border-b-2 border-gray-200 py-4 focus:border-black outline-none transition-colors min-h-[150px]" placeholder="Tell us about your project"></textarea>
                            </div>
                            <button type="submit" className="bg-black text-white px-10 py-4 rounded-full font-bold hover:bg-orange-600 transition-colors uppercase tracking-widest text-sm">Send Message</button>
                        </form>
                    </div>
                    <div className="contact-info-container flex flex-col justify-between">
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-wider mb-4 opacity-40">Email Us</h3>
                                <p className="text-2xl font-medium">andyradulescu@synapeselabs.org</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-wider mb-4 opacity-40">Call Us</h3>
                                <p className="text-2xl font-medium">+40 735747637</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-wider mb-4 opacity-40">Location</h3>
                                <p className="text-2xl font-medium text-balance">Brașov, Romania — Available Worldwide</p>
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
