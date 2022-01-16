import React, {useState, useEffect} from "react";
import "./LandingPage.css";
import ScottyCameron from '../../assets/newport-putter.jpeg';
import FinishCard from '../../components/FinishCard/FinishCard';
import PolymerFinish from '../../components/PolymerFinish/PolymerFinish';
import Banner from '../../components/BannerSection/BannerSection';
import RestoreFinish from '../../components/RestoreFinish/RestoreFinish';
import CopperFinish from '../../components/CopperFinish/CopperFinish';

export default function LandingPage() {



 /* if (typeof window !== "undefined") {
    return { width: 375, height: 812 };
  }
  const isSSR = typeof window != 'undefined';
  const [windowSize, setWindowSize] = useState({
    width: isSSR ? 375 : window.innerWidth,
    height: isSSR ? 812 : window.innerHeight,
  });

  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  useEffect(() => {
    window.addEventListener("resize", changeWindowSize);

    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, []);*/

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