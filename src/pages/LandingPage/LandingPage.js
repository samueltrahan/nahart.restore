import React from "react";
import "./LandingPage.css";
import ScottyCameron from '../../assets/scotty.jpeg';
import FinishCard from '../../components/FinishCard/FinishCard';
import PolymerFinish from '../../components/PolymerFinish/PolymerFinish';
import TabMenu from '../../components/TabMenu/TabMenu';
import Banner from '../../components/BannerSection/BannerSection';


export default function LandingPage() {

  return (
    <div className="landing-page">
     
      <div className="high-region">
        <Banner />
        <img className="scotty" alt="" src={ScottyCameron}></img>
      </div>
      <div className="finish-section">
            <div className="black-oxide">
            <FinishCard />
        </div>
        <div className="polymer">
          <PolymerFinish />
        </div>
      </div>
    </div>
  );
}
