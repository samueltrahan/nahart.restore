import React from 'react';
import './CopperFinish.css';
import Grip from '../../assets/regrip.JPG';


export default function CopperFinish() {
    return (
        <div className="product-section">
            <div className="copper-pic-section">
            <img className="grip-pic" src={Grip} alt=""></img>
            </div>
            <div className="info-section">
                <h1>Regrip Putters</h1>
                <p> - Remove old, dirty putter grips</p>
                <p> - All name brand putter grips available</p>
                
            </div>
        </div>
    )
}
