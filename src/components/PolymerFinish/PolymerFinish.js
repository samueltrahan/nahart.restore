import React from 'react';
import './PolymerFinish.css';
import PolymerFinishPic from '../../assets/polymer-finish.webp';


export default function PolymerFinish() {
    return (
        <div className="product-section">
            <div className="polymer-pic-section">
                <img className="polymer-pic" src={PolymerFinishPic} alt=""></img>
            </div>
            <div className="polymer-info">
                <h1>Putter Finishes</h1>
                <p>- Black Oxide Finish</p>
                <p>- Polymer Finish</p>
                <p>- Copper Finish</p>
            </div>
        </div>
    )
}
