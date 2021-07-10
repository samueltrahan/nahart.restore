import React from 'react';
import './OdysseyInsert.css';
import Odyessey1 from '../../assets/inserts/putterinsertod1.jpeg';
import Odyessey2 from '../../assets/inserts/putterinsertod2.jpeg';
import Odyessey3 from '../../assets/inserts/putterinsertod3.jpeg';
import Odyessey4 from '../../assets/inserts/putterinsertod4.jpeg';
import Odyessey5 from '../../assets/inserts/putterinsertod5.jpeg';
import Odyessey6 from '../../assets/inserts/putterinsertod6.jpeg';
import Odyessey7 from '../../assets/inserts/putterinsertod7.jpeg';
import Odyessey8 from '../../assets/inserts/putterinsertod8.jpeg';
import Odyessey9 from '../../assets/inserts/putterinsertod9.jpeg';
import Odyessey10 from '../../assets/inserts/putterinsertod10.jpeg';

export default function OdysseyInsert() {
    return (
        <div className="odyssey-section">
            <div className="odyssey-header">
                <h2>Odyssey Inserts</h2>
            </div>
            <div className="odyssey-insert-pic">
            <img className="odyssey-pic" src={Odyessey1} alt=""></img>
            <img className="odyssey-pic" src={Odyessey2} alt=""></img>
            <img className="odyssey-pic" src={Odyessey3} alt=""></img>
            <img className="odyssey-pic" src={Odyessey4} alt=""></img>
            <img className="odyssey-pic" src={Odyessey5} alt=""></img>
            <img className="odyssey-pic" src={Odyessey6} alt=""></img>
            <img className="odyssey-pic" src={Odyessey7} alt=""></img>
            <img className="odyssey-pic" src={Odyessey8} alt=""></img>
            <img className="odyssey-pic" src={Odyessey9} alt=""></img>
            <img className="odyssey-pic" src={Odyessey10} alt=""></img>
            </div>
        </div>
    )
}

