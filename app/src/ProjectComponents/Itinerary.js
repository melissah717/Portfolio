import React from 'react'
import {ItineraryDescription} from '../ReadMore'
function Itinerary(){
    return(
        <div className="section-body">
            <h2>iTinerary</h2>
            <div className="subtitle">Swift</div>
            <img src={require('./itinerary.gif')} alt="loading..." />
            <p><ItineraryDescription /></p>
        </div>
    )
}
export default Itinerary