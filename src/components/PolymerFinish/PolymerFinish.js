import React from 'react';
import './PolymerFinish.css';
import PolymerFinishPic from '../../assets/polymer-finish.webp';
import {Link} from 'react-router-dom';

export default function PolymerFinish() {
    return (
        <div className="product-section">
            <div className="polymer-pic-section">
                <img className="polymer-pic" src={PolymerFinishPic} alt=""></img>
            </div>
            <div className="polymer-info">
                <h1>Polymer Finish</h1>
                <p>- Removal of dings/dents</p>
                <p>- Polymer finish</p>
                <p>- Paint fill of your choice</p>
                <div className="button-section">
                <Link className="card-button">Start Your Order</Link>
                </div>
            </div>
        </div>
    )
}
