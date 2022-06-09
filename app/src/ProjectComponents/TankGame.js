import React from 'react'
import { TankDescription } from '../ReadMore'

function TankGame(){
    return(
        <div className="section-body">
            <h2>Tank Wars</h2>
            <div className="subtitle">Java</div>
            <img src={require('./tankGif.gif')} alt="loading..." />
            <p><TankDescription /></p>
        </div>
    )
}
export default TankGame