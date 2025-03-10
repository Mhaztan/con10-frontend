import React from "react";
import "./styles/heroSection.css";

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>AI-Powered Content Creation</h1>
                <p>Generate high-quality captions, scripts, and summaries effortlessly with Con10 AI.</p>
                <a href="#features" className="btn">Explore Features</a>
            </div>
        </section>
    );
};

export default HeroSection;
