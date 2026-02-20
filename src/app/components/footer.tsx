import React from 'react';

function Footer() {
    return (
        <footer className="py-12 px-8 md:px-24 bg-black text-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold mb-2">Synapse LABS</h2>
                    <p className="text-gray-400 text-sm italic">Forging digital excellence since 2024.</p>
                </div>
                
                <div className="flex gap-8">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                </div>

                <div className="text-center md:text-right">
                    <p className="text-gray-400 text-sm">Built with Next.js, GSAP & Tailwind.</p>
                    <p className="text-gray-500 text-xs mt-2 uppercase tracking-widest">Proudly Crafted in Bucharest</p>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center">
                 <p className="text-gray-600 text-[10px] uppercase tracking-[0.3em]">
                    Synapse Labs S.R.L. &bull; RO 42138541 &bull; J40/1234/2024
                 </p>
            </div>
        </footer>
    );
}

export default Footer;
