'use client';
import React, {useRef, useEffect} from 'react';
import './expertise.scss';

const expertise = [
    'Architecture', 
    'Performance', 
    'Security', 
    'Scale', 
    'Modern UI', 
    'AI Integration', 
    'Typescript', 
    'React/Next.js', 
    'Java/Kotlin',
    'Flutter/Dart',
    'Nestjs / Spring-boot', 
    'microservices'
];

function Expertise() {
    const innerRef = useRef<HTMLDivElement>(null);
    const offsetRef = useRef(0);
    const isDraggingRef = useRef(false);
    const startXRef = useRef(0);
    const lastTimeRef = useRef<number>(0);
    const requestRef = useRef<number>(0);

    const animate = (time: number) => {
        if (!lastTimeRef.current) lastTimeRef.current = time;
        const deltaTime = (time - lastTimeRef.current) / 1000;
        lastTimeRef.current = time;

        if (!isDraggingRef.current && innerRef.current) {
            const listWidth = innerRef.current.scrollWidth / 2;
            offsetRef.current -= 50 * deltaTime;

            if (offsetRef.current <= -listWidth) {
                offsetRef.current += listWidth;
            }
            innerRef.current.style.transform = `translateX(${offsetRef.current}px)`;
        }

        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, []);

    const handleStart = (clientX: number) => {
        isDraggingRef.current = true;
        startXRef.current = clientX;
    };

    const handleMove = (clientX: number) => {
        if (!isDraggingRef.current || !innerRef.current) return;
        const dx = clientX - startXRef.current;
        startXRef.current = clientX;
        
        const listWidth = innerRef.current.scrollWidth / 2;
        offsetRef.current += dx;

        if (offsetRef.current <= -listWidth) offsetRef.current += listWidth;
        if (offsetRef.current > 0) offsetRef.current -= listWidth;

        innerRef.current.style.transform = `translateX(${offsetRef.current}px)`;
    };

    const handleEnd = () => {
        isDraggingRef.current = false;
    };

    return (
        <div 
            className="expertise-scroller mt-10"
            onMouseDown={(e) => handleStart(e.clientX)}
            onMouseMove={(e) => handleMove(e.clientX)}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onTouchStart={(e) => handleStart(e.touches[0].clientX)}
            onTouchMove={(e) => handleMove(e.touches[0].clientX)}
            onTouchEnd={handleEnd}
        >
            <div className="expertise-inner" ref={innerRef}>
                <div className="expertise-list">
                    {expertise.map((skill, index) => (
                        <span key={index}
                              className="expertise-item px-5 py-2 bg-gray-50 border border-gray-100 rounded-full text-xs font-bold text-gray-500 uppercase tracking-tighter hover:border-orange-500 hover:text-orange-600 transition-all cursor-default">
                            {skill}
                        </span>
                    ))}
                </div>
                <div className="expertise-list" aria-hidden="true">
                    {expertise.map((skill, index) => (
                        <span key={`duplicate-${index}`}
                              className="expertise-item px-5 py-2 bg-gray-50 border border-gray-100 rounded-full text-xs font-bold text-gray-500 uppercase tracking-tighter hover:border-orange-500 hover:text-orange-600 transition-all cursor-default">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Expertise;
