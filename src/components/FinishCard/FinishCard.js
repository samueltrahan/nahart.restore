import React from 'react';
import './FinishCard.css';
import Customize from '../../assets/putters/Customize3.png';


export default function FinishCard() {
    return (
        <div className="product-section">
           
            <div>
                <img className="card-pic" src={Customize} alt=""></img>
                <div className="black-info">
                <h1>Customize Your Putter</h1>
                <div className="b-info">
                <p>- Repaint or Powder-coat your putter </p>
                <p>- All colors available </p>
                </div>
                </div>
            </div>
           
        </div>
    )
}
