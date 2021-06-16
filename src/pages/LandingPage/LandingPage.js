import React from 'react';
import './LandingPage.css';
import ScottyCameron from '../../assets/scotty.jpeg';

export default function LandingPage() {
    return (
        <div className="landing-page">
            <div className="high-region">
                <img className="scotty" alt="" src={ScottyCameron}></img>
            </div>
            <div className="finish-section">
                <div className="finish-nav">
                        Finish Section
                </div>
            </div>
        </div>
    )
}
