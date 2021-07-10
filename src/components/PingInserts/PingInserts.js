import React from 'react';
import './PingInserts.css';
import Ping1 from '../../assets/inserts/pinginsert1.jpeg';
import Ping2 from '../../assets/inserts/pinginsert2.jpeg';

export default function PingInserts() {
    return (
        <div className="ping-section">
            <div className="ping-header">
                <h2>Ping Inserts</h2>
            </div>
            <div className="ping-insert-pic">
            <img className="ping-pic" src={Ping1} alt=""></img>
            <img className="ping-pic" src={Ping2} alt=""></img>
            </div>
        </div>
    )
}
