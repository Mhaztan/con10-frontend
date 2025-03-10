import React from "react";
import { FaPenNib, FaVideo, FaRedo, FaCompress, FaSyncAlt, FaHashtag } from "react-icons/fa";
import "./styles/featureSection.css";

const features = [
    { icon: <FaPenNib />, title: "✍️ AI Caption Generator", description: "Create catchy social media captions instantly.", link: "/captions" },
    { icon: <FaVideo />, title: "🎬 AI Video Script Writer", description: "Generate engaging scripts for your videos.", link: "/video-script" },
    { icon: <FaRedo />, title: "🔄 AI Content Repurposer", description: "Transform existing content into fresh formats.", link: "/repurpose" },
    { icon: <FaCompress />, title: "📖 AI Summarizer", description: "Summarize lengthy texts into concise, readable content.", link: "/summarize" },
    { icon: <FaSyncAlt />, title: "♻️ AI Paraphraser", description: "Rewrite and enhance text while maintaining meaning.", link: "/paraphrase" },
    { icon: <FaHashtag />, title: "🔍 AI Hashtag Generator", description: "Discover trending hashtags for better reach.", link: "/captions" }
];

const FeatureSection = () => {
    return (
        <section id="features" className="features">
            <h2>🚀 Why Choose Con10 AI?</h2>
            <div className="feature-list">
                {features.map((feature, index) => (
                    <div className="feature" key={index}>
                        <span className="feature-icon">{feature.icon}</span>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                        <a href={feature.link} className="feature-btn">Try Now</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeatureSection;
