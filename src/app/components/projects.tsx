'use client';
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
    {
        title: "Robust Infrastructure",
        category: "Cloud Architecture",
        description: "Designing and implementing scalable, fault-tolerant infrastructure for high-traffic applications.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
        link: "#"
    },
    {
        title: "Real-time Dashboards",
        category: "Frontend Development",
        description: "Creating smooth, interactive dashboards with complex data visualization and real-time updates.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
        link: "#"
    },
    {
        title: "Performance Engines",
        category: "Backend Systems",
        description: "Building high-performance API services and processing engines that handle millions of requests.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
        link: "#"
    }
];

function Projects() {
    const container = useRef(null);

    useGSAP(() => {
        gsap.from('.project-card', {
            scrollTrigger: {
                trigger: '.projects-grid',
                start: 'top 80%',
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power4.out',
        });
    }, { scope: container });

    return (
        <section id="projects" className="py-24 px-8 md:px-24 bg-gray-50 text-black min-h-screen w-full" ref={container}>
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">Project Showcase.</h2>
                    <p className="text-xl opacity-60">A glimpse into the robust solutions built by Synapse Labs.</p>
                </div>
                <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <div key={idx} className="project-card group cursor-pointer">
                            <div className="aspect-[4/5] overflow-hidden rounded-2xl mb-6 relative">
                                <Image 
                                    src={project.image} 
                                    alt={project.title} 
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                                    <span className="text-white font-medium border border-white/40 px-6 py-2 rounded-full backdrop-blur-sm">View Project</span>
                                </div>
                            </div>
                            <p className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-2">{project.category}</p>
                            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
