import React from 'react';
import './FinishCard.css';
import BlackOxide from '../../assets/black-oxide.png';
import {Link} from 'react-router-dom';

export default function FinishCard() {
    return (
        <div className="product-section">
           
            <div>
                <img className="card-pic" src={BlackOxide} alt=""></img>
                <div className="black-info">
                <h1>Black Oxide Finish</h1>
                <p>- Removal of dings/dents </p>
                <p>- Shiny black oxide or Satin black oxide</p>
                <p>- Paint fill of your choice</p>
                <Link to='/contact' className="card-button">Start Your Order</Link>
                </div>
            </div>
           
        </div>
    )
}
