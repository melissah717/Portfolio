import React from 'react'
import { GatorMartDescription } from '../ReadMore'
function GatorMart(){
    return(
        <div className="section-body">
            <h2>GatorMart</h2>
            <div className="subtitle">HTML5 | CSS3 | Javscript | SQL | Express | AWS</div>
            <img src={require('./gatorMart.gif')} alt="loading..." />
            <p><GatorMartDescription /></p>
        </div>
    )
}
export default GatorMart