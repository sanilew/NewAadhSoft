import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="contact-container">
            <div className="contact-left">
                <h1>SACHSOFT</h1>
                <p className="get-in-touch">GET IN TOUCH</p>
                <h2>Have a project?</h2>
                <h3>We would love to help</h3>
                <div className="contact-info">
                    <p>Chicago, USA</p>
                    <p>+1 (805) 427-3883</p>
                    <p>ceo@sachhsoft.com</p>
                </div>
            </div>
            <div className="contact-right">
                <form className="contact-form">
                    <div className="form-group">
                        <label>I'm interested in...</label>
                        <div className="interests">
                            <button type="button" className="interest-btn">Development</button>
                            <button type="button" className="interest-btn">Web/Product Design</button>
                            <button type="button" className="interest-btn">E-Commerce</button>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Name" required />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Work E-mail" required />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Contact" required />
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Tell us about your project" required></textarea>
                    </div>
                    <div className="form-group attachment-group">
                        <label>
                            <input type="file" className="attachment-input" />
                            <span>Add attachment</span>
                        </label>
                    </div>
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Footer;
