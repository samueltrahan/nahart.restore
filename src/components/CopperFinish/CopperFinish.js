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
                <h1>Copper Finish</h1>
                <p className="copper-info">Add some shine to your putter with this extremely durable copper plated finish. This finish is great for carbon steel putters to help prevent rusting!</p>
                <p> - Removal of dings/dents</p>
                <p> - High buff shine OR brushed satin finish</p>
                <p> - Paint fill of your choice</p>
                <div className="button-section">
                <Link className="card-button">Start Your Order</Link>
                </div>
            </div>
        </div>
    )
}
