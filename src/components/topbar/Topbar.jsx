import React from 'react'
import './topbar.scss'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';


export default function topBar({ menuOpen, setMenuOpen }) {
    return (
        <div className={'topbar ' + (menuOpen && 'active')}>
            <div className='wrapper'>
                <div className="left">
                    <a href="#intro" className='logo'>SRT23</a>
                    <div className="itemContainer">
                        <LinkedInIcon className='icon' />
                        <a href='https://www.linkedin.com/in/srt-23/'>srt-23</a>
                    </div> <div className="itemContainer">
                        <GitHubIcon className='icon' />
                        <a href='https://github.com/SRT-23'>SRT-23</a>
                    </div>
                    <div className="itemContainer">
                        <EmailIcon className='icon' />
                        <span>spandantimilsina@yahoo.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
