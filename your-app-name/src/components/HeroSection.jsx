import React from 'react';
import './Hero.css';

const HeroSection = () => {
    return (
        <div className="hero-container">
            <div className="hero-content">
                <h1>We revolutionize your technological ideas into reality</h1>
                <p>Expert IT consulting tailored just for empowering your technical needs</p>
                <button className="contact-button">Get in touch →</button>
            </div>

            <div className="hero-stats">
                <div className="stat">
                    <img src="cc.jpg" alt="Team Sacchsoft" />
                    <p>You dream it, We build it. <br/> <strong>- Team Sacchsoft</strong></p>
                </div>
                <div className="stat">
                    <h2>10+</h2>
                    <p>INDUSTRY YEARS</p>
                </div>
                <div className="stat">
                    <h2>$10M</h2>
                    <p>REVENUE GENERATED FOR CLIENTS</p>
                </div>
            </div>

            <div className="hero-services">
                <h3>Our Services</h3>
                <div className="services-list">
                    <span>E-Commerce</span>
                    <span>Marketing</span>
                    <span>Enterprise</span>
                    <span>Development</span>
                    <span>Digital</span>
                    <span>Automation</span>
                    <span>UI/UX Design</span>
                    <span>Modern Web Services</span>
                    <span>SEO</span>
                    <span>Mobility</span>
                    <span>Project Management</span>
                    <span>Cloud</span>
                    <span>+ many other IT Services</span>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
