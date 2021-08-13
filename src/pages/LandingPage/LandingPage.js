import React from "react";
import "./LandingPage.css";
import ScottyCameron from '../../assets/newport-putter.jpeg';
import FinishCard from '../../components/FinishCard/FinishCard';
import PolymerFinish from '../../components/PolymerFinish/PolymerFinish';
import Banner from '../../components/BannerSection/BannerSection';
import RestoreFinish from '../../components/RestoreFinish/RestoreFinish';
import CopperFinish from '../../components/CopperFinish/CopperFinish';

export default function LandingPage() {

  return (
    <div className="landing-page">
     
      <div className="high-region">
        <Banner />
        <img className="scotty" alt="" src={ScottyCameron}></img>
      </div>
      <div className="finish-section">
     
          <RestoreFinish />            
       
            <FinishCard />
     
          <PolymerFinish />
      
          <CopperFinish />
    </div>
    </div>
  );
}
