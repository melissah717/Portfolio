import React from 'react'
import Melissa from './MelissaHo.jpg'

function Sidebar(){
    return(
        <aside className="sidebar">
            <div className="sidebar-widget">
                <h2 className="title">Melissa Ho</h2>
                <img src={Melissa} alt="selfie" className="widget-image"></img>

                <div className="quote">"Defining myself, as opposed to being defined by others, is one of the greatest challenges I face."
                    -Carol Moseley-Braun
                </div>
                <div className="contact">
                <a href="mailto: melissa.h717@outlook.com" className="links">Email  </a>
                <a href="www.github.com/melissah717" className="links">    Github</a>
                <a href="www.linkedin.com/in/melissah717" className="links">    LinkedIn</a>
                </div>
            </div>
        </aside>

    )
}

export default Sidebar