import React from 'react'
import './testimonials.scss'

export default function Testimonials() {
    const data = [
        {
            id: 1,
            name: "Application Support Analyst",
            title: "JP Morgan Chase & Co",
            img: "assets/download.jpg",
            icon: "assets/globe.png",
            desc:
                "Worked on deployment as well as pre-deployment software in order to create responsive applications and solve any issues that arose.",
        },
        {
            id: 2,
            name: "Software Engineer Intern",
            title: "Citi",
            img: "assets/download-1.jpg",
            icon: "assets/mobile.png",
            desc:
                "Used React.js, React Native, JavaScript/Jquery, HTML, and CSS/SCSS to create responsive web pages.",
            featured: true,
        },
        {
            id: 3,
            name: "Software Dev/Test Intern",
            title: "University of Utah",
            img: "assets/download-2.jpg",
            icon: "assets/globe.png",
            desc:
                "Standardized the quality assurance procedures for software and oversaw testing and helped find solutions to problems pre and post deployment.",
        },
    ];
    return (
        <div className="testimonials" id="testimonials">
            <h1>Experience</h1>
            <div className="container">
                {data.map((d) => (
                    <div className={d.featured ? "card featured" : "card"}>
                        <div className="top">
                            <img
                                className="user"
                                src={d.img}
                                alt=""
                            />
                            <img className="right" src={d.icon} alt="" />
                        </div>
                        <div className="center">
                            {d.desc}
                        </div>
                        <div className="bottom">
                            <h3>{d.name}</h3>
                            <h4>{d.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
