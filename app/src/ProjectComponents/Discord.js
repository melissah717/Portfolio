import React from 'react'
import { DiscordDescription } from '../ReadMore'

function Discord(){
    return(
        <div className="section-body">
            <h2>Discord Bot</h2>
            <div className="subtitle">SQL | Python | Workbench</div>
            <img src={require('./discord.gif')} alt="loading..." />
            <p><DiscordDescription /></p>
        </div>
    )
}
export default Discord