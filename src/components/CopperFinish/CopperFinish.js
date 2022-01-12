import React from 'react';
import './CopperFinish.css';
import Copper from '../../assets/copper-finish.png';
import {Link} from 'react-router-dom';

export default function CopperFinish() {
    return (
        <div className="product-section">
            <div className="copper-pic-section">
            <img className="copper-pic" src={Copper} alt=""></img>
            </div>
            <div className="info-section">
                <h1>Regrip Putters</h1>
                <p> - Remove old, dirty putter grips</p>
                <p> - All name brand putter grips available</p>
                
            </div>
        </div>
    )
}
