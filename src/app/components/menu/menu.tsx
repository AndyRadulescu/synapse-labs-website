'use client';
import React, {useEffect, useRef, useState} from 'react';

import './menu.css';
import {gsap} from 'gsap';
import {useGSAP} from '@gsap/react';

const menuLinks = [
    {path: '#meet', name: 'Meet the dev'},
    {path: '#projects', name: 'Projects'},
    {path: '#contact', name: 'Contact'}
];

function Menu() {
    const container = useRef(null);
    const timeline = useRef<gsap.core.Timeline>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useGSAP(() => {
        gsap.set('.menu-link-item-holder', {y: 75});

        timeline.current = gsap.timeline({paused: true}).to('.menu-overlay', {
            duration: 0.5,
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            ease: 'power4.inOut'
        }).to('.menu-link-item-holder', {
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power4.inOut',
            delay: -0.75
        });
    }, {scope: container});

    useEffect(() => {
        if (isMenuOpen) {
            timeline?.current?.play();
        } else {
            timeline?.current?.reverse();
        }
    }, [isMenuOpen]);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="menu-container" ref={container}>
            <div className="flex menu-bar justify-between z-10 p-8">
                <div className="menu-logo">
                    Synapse LABS S.R.L.
                </div>
                <div className="menu-open" onClick={toggleMenu}>
                    <p>Menu</p>
                </div>
            </div>
            <div className="menu-overlay flex flex-col w-full h-svh fixed top-0 left-0 p-8 z-20 text-black">
                <div className="menu-overlay-bar flex justify-between w-full">
                    <div className="menu-logo">
                        Synapse LABS S.R.L.
                    </div>
                    <div className="cursor-pointer" onClick={toggleMenu}>
                        <p>CLOSE</p>
                    </div>
                </div>
                <div className="flex h-full">
                    <div className="flex menu-close-icon flex-2 cursor-pointer items-end" onClick={toggleMenu}>
                        <p>&#x2715;</p>
                    </div>
                    <div className="menu-copy">
                        <div className="menu-links" onClick={toggleMenu}>
                            {menuLinks.map((link) => (
                                <a href={link.path} className="menu-link-item my-8 sm:m-0 block" key={link.name}>
                                    <div className="menu-link-item-holder">
                                        <p>{link.name}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                        <div className="menu-info flex-col sm:flex-row">
                            {/*<div className="menu-info-col">*/}
                            {/*    <a href="#">Instagram &#8599;</a>*/}
                            {/*    <a href="#">Linkedin &#8599;</a>*/}
                            {/*    <a href="#">GitHub &#8599;</a>*/}
                            {/*</div>*/}
                            <div className="menu-info-col">
                                <p className="text-center">andyradulescu@synapeselabs.org</p>
                                <p className="text-center">+40 735747637</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Menu;
