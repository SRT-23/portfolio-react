import React from 'react'
import './topbar.scss'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';


export default function topBar({menuOpen,setMenuOpen}) {
    return (
        <div className={'topbar ' + (menuOpen && 'active')}>
            <div className='wrapper'>
                <div className="left">
                    <a href="#intro" className='logo'>genius.</a>
                    <div className="itemContainer">
                    <LinkedInIcon className='icon'/>
                    <span>srt-23</span>
                    </div>
                    <div className="itemContainer">
                    <EmailIcon className='icon'/>
                    <span>srt@srt.com</span>
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
