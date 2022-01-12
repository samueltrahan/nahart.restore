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
                <h1>Customize Your Putter</h1>
                <p>- Repaint or Powder-coat your putter </p>
                <p>- All colors available </p>
                </div>
            </div>
           
        </div>
    )
}
