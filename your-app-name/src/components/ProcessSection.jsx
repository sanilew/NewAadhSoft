import React from 'react';
import './Process.css';

const ProcessSection = () => {
    return (
        <div>
            {/* Process Section */}
            <div className="process-container">
                <div className="process-image">
                    <img src="img1.png" alt="Process" />
                </div>
                <div className="process-content">
                    <p className="process-label">OUR PROCESS</p>
                    <h2>We bring your ideas to life through discovery</h2>
                    <div className="process-step">
                        <div className="step-number">
                            <h1>01</h1>
                            <span>/4</span>
                        </div>
                        <p className="step-description">
                            We shape and elevate brands with rigorous research,
                            constantly challenging IT consulting assumptions.
                        </p>
                    </div>
                </div>
            </div>

            {/* Blog Section */}
            <div className="blog-section">
                <h3>BLOG</h3>
                <h2>Explore insights through our knowledge-share blogs</h2>
                <div className="blog-cards">
                    <div className="blog-card">
                        <img src="m2.png" alt="Blog 1" />

                    </div>
                    <div className="blog-card">
                        <img src="m2.png" alt="Blog 2" />

                    </div>
                    <div className="blog-card">
                        <img src="m2.png" alt="Blog 3" />

                    </div>
                </div>
                <div className="blog-view-all">
                    <button>VIEW ALL</button>
                </div>
            </div>



        </div>
    );
}

export default ProcessSection;
