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

                <a href="mailto: melissa.h717@outlook.com" className="links"> <i class="fa fa-envelope" aria-hidden="true"></i>Email  </a>
                <a href="https://www.github.com/melissah717" className="links"><i class="fa fa-github" aria-hidden="true"></i>   Github</a>
                <a href="https://www.linkedin.com/in/melissah717" className="links"><i class="fa fa-linkedin-square" aria-hidden="true"></i>    LinkedIn</a>
                </div>
            </div>
        </aside>

    )
}

export default Sidebar