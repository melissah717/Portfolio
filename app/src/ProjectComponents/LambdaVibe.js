import React from 'react'

import {LambdaDescription} from '../ReadMore'
function LambdaVibe(){
    return(
        <div className="section-body">
            <h2>LambdaVibe</h2>
            <div className="subtitle">Typescript | React.js</div>
            <img src={require('./music.gif')} alt="loading..." />
            <p><LambdaDescription /></p>
        </div>
    )
}
export default LambdaVibe