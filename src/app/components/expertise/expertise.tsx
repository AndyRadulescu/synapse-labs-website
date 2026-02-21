'use client';
import React from 'react';
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
    return (
        <div className="expertise-scroller mt-10">
            <div className="expertise-inner">
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
