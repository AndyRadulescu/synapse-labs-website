'use client';

import React, { useState, useEffect } from 'react';
import './cookie-banner.scss';

const CookieBanner: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const accepted = localStorage.getItem('cookieAccepted');
        if (accepted) {
            return;
        }

        // Mount the component but keep it hidden
        const mountTimer = setTimeout(() => {
            setIsMounted(true);
            // Small delay to trigger the CSS transition after mounting
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
        // Wait for transition to finish before unmounting
        setTimeout(() => setIsMounted(false), 500);
    };

    if (!isMounted) return null;

    return (
        <div className="fixed bottom-4 right-4 left-4 sm:left-auto sm:bottom-8 sm:right-8 z-[1000] w-auto sm:w-full sm:max-w-[400px] pointer-events-none flex justify-end font-mono">
            <div 
                className={`
                    bg-[#0c0c0c] border border-[#33ff33] rounded shadow-[0_0_20px_rgba(51,255,51,0.2),0_10px_30px_rgba(0,0,0,0.5)] 
                    overflow-hidden pointer-events-auto w-full transition-all duration-500 ease-out
                    ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}
            >
                <div className="bg-[#1a1a1a] border-b border-[#33ff33] px-4 py-2 flex justify-between items-center">
                    <div className="flex gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
                    </div>
                    <div className="text-[#33ff33] text-[10px] uppercase tracking-widest">SYNAPSE_COOKIES.SYS</div>
                    <div className="w-10"></div>
                </div>
                <div className="p-5 text-[#33ff33] text-sm leading-relaxed">
                    <div className="flex gap-2 mb-1">
                        <span className="font-bold">user@synapse:~$</span>
                        <span className="text-[#ffbd2e]">run</span>
                        <span>cookie-policy.sh</span>
                    </div>
                    <div className="mb-3 text-[#e0e0e0] text-[13px]">
                        We use cookies to enhance your experience and analyze our traffic.
                        Would you like to proceed with the execution?
                    </div>
                    <div>
                        <span className="terminal-cursor inline-block w-2 h-4 bg-[#33ff33] align-middle"></span>
                    </div>
                    <div className="mt-6 flex gap-4">
                        <button 
                            onClick={handleAccept} 
                            className="bg-[#33ff33] text-[#0c0c0c] font-bold px-4 py-1.5 text-xs cursor-pointer transition-all hover:bg-[#22cc22] hover:shadow-[0_0_15px_rgba(51,255,51,0.5)]"
                        >
                            [ACCEPT_ALL]
                        </button>
                        <button 
                            onClick={handleDeny}
                            className="bg-transparent border border-[#33ff33] text-[#33ff33] px-4 py-1.5 text-xs cursor-pointer transition-all hover:bg-[#33ff33]/10 hover:shadow-[0_0_10px_rgba(51,255,51,0.3)]"
                        >
                            [DENY_ALL]
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;
