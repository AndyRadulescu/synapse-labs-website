'use client';

import React, {useEffect, useState} from 'react';
import './cookie-banner.scss';

const CookieBanner: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const accepted = localStorage.getItem('cookieAccepted');
        if (accepted) {
            return;
        }

        const mountTimer = setTimeout(() => {
            setIsMounted(true);
            setTimeout(() => setShow(true), 50);
        }, 1000);

        return () => clearTimeout(mountTimer);
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieAccepted', 'true');
        hideBanner();
    };

    const handleDeny = () => {
        hideBanner();
    };

    const hideBanner = () => {
        setShow(false);
        setTimeout(() => setIsMounted(false), 500);
    };

    if (!isMounted) return null;

    return (
        <div
            className="fixed bottom-4 right-4 left-4 sm:left-auto sm:bottom-8 sm:right-8 z-[1000] w-auto sm:w-full sm:max-w-[400px] pointer-events-none flex justify-end font-mono">
            <div
                className={`
                    bg-black/60 backdrop-blur-md border border-pink-700/50 rounded-lg shadow-[0_0_20px_rgba(51,255,51,0.15),0_10px_30px_rgba(0,0,0,0.5)] 
                    overflow-hidden pointer-events-auto w-full transition-all duration-500 ease-out
                    transform origin-bottom-right
                    ${show ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}
                    max-sm:scale-95
                `}
            >
                <div
                    className="bg-white/5 border-b border-pink-700/30 px-4 py-2 flex justify-between items-center backdrop-blur-sm">
                    <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80"></span>
                    </div>
                    <div
                        className="text-pink-700 text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">SYNAPSE_COOKIES.SYS
                    </div>
                    <div className="w-10"></div>
                </div>
                <div className="p-5 text-pink-700 text-sm leading-relaxed">
                    <div className="flex flex-wrap gap-2 mb-2 items-center">
                        <span className="font-bold whitespace-nowrap text-pink-700/90">user@synapse:~$</span>
                        <span className="text-[#ffbd2e] font-semibold">run</span>
                        <span className="text-white/90 italic">cookie-policy.sh</span>
                    </div>
                    <div className="mb-4 text-white/80 text-[13px] leading-snug">
                        We use cookies to enhance your experience and analyze our traffic.
                        Would you like to proceed with the execution?
                    </div>
                    <div className="mb-2">
                        <span
                            className="terminal-cursor inline-block w-2 h-4 bg-pink-700 align-middle shadow-[0_0_8px_rgba(51,255,51,0.5)]"></span>
                    </div>
                    <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <button
                            onClick={handleAccept}
                            className="bg-pink-700 text-black font-bold px-5 py-2 text-xs cursor-pointer transition-all duration-300 hover:bg-pink-700 hover:scale-[1.02] active:scale-95 shadow-[0_0_15px_rgba(255,105,180,0.5)]"
                        >
                            [ ACCEPT_ALL ]
                        </button>
                        <button
                            onClick={handleDeny}
                            className="bg-white/5 border border-pink-700/40 text-pink-700 px-5 py-2 text-xs cursor-pointer transition-all duration-300 hover:bg-pink-700/10 hover:border-pink-700 active:scale-95"
                        >
                            [ DENY_ALL ]
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;
