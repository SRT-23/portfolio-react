import React, { useEffect, useRef } from 'react'
import './intro.scss'
import { init } from 'ityped'

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Analyst', 'Creator', 'Developer', 'Designer']
        });
    }, []);

    return (
        <div className='intro' id='intro'>
            <div className='left'>
                <div className="imgContainer">
                    <img src='assets/srt.png' alt='A wild SRT' />
                </div>
            </div>
            <div className='right'>
                <div className="wrapper">
                    <h2>Welcome, I'm</h2>
                    <h1>Spandan Timilsina</h1>
                    <h3>Your next <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="arrow" />
                </a>
            </div>
        </div>
    )
}
