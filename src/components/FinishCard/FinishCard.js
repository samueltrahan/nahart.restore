import React from 'react';
import './FinishCard.css';
import BlackOxide from '../../assets/black-oxide.png';

export default function FinishCard() {
    return (
        <div className="product-section">
           
            <div>
                <img className="card-pic" src={BlackOxide} alt=""></img>
                <div className="black-info">
                <h1>Black Oxide</h1>
                <p>- Removal of dings/dents </p>
                <p>- Shiny black oxide or Satin black oxide</p>
                <p>- Paint fill of your choice</p>
                <button className="card-button">Start Your Order</button>
                </div>
            </div>
           
        </div>
    )
}
