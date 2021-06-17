import React from "react";
import "./LandingPage.css";
import ScottyCameron from '../../assets/scotty.jpeg';
import TabMenu from '../../components/TabMenu/TabMenu';



export default function LandingPage() {

  return (
    <div className="landing-page">
      <div className="high-region">
        <img className="scotty" alt="" src={ScottyCameron}></img>
      </div>
      <div className="finish-section">
        <div className="finish-nav">
            <h3 className="fix-your-putter">Fix your putter face</h3>
            <TabMenu />
        </div>
      </div>
    </div>
  );
}
