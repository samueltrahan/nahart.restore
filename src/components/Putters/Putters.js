import React from 'react';
import './Putters.css';
import PingAlly from '../../assets/putters/pingally.jpg';
import PingPal2 from '../../assets/putters/pingpal2.jpg';
import PingZing1 from '../../assets/putters/pingzing1.jpg';
import PingZing2 from '../../assets/putters/pingzing2.jpg';
import PutterBottom from '../../assets/putters/putterbottom.jpg';
import PutterFace from '../../assets/putters/putterface.jpg';
import PingABlade from '../../assets/putters/pingablade.jpg';
import PutterFace2 from '../../assets/putters/putterface2.jpg';
import ScottyNewPort from '../../assets/putters/scottynewport.jpg';
import Titleist from '../../assets/putters/titleist.jpg';
import ScottyCam from '../../assets/putters/scottycam.jpg';

export default function Putters() {
    return (
        <div className="putters">
            <h2>Restored Putters</h2>
            <div className="putter-pics">
                <img className="putt-pic" src={PingAlly} alt=""></img>
                <img className="putt-pic" src={PingPal2} alt=""></img>
                <img className="putt-pic" src={PingZing1} alt=""></img>
                <img className="putt-pic" src={PingZing2} alt=""></img>
                <img className="putt-pic" src={ScottyNewPort} alt=""></img>
                <img className="putt-pic" src={PutterBottom} alt=""></img>
                <img className="putt-pic" src={PutterFace} alt=""></img>
            </div>
            <h2>Before Putters</h2>
            <div className="before-putters">
                <img className="before-putt" src={ScottyCam} alt=""></img>
                <img className="before-putt" src={PingABlade} alt=""></img>
                <img className="before-putt" src={PutterFace2} alt=""></img>
                <img className="before-putt" src={Titleist} alt=""></img>
            </div>
        </div>
    )
}
