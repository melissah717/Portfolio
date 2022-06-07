import React from 'react'
import Melissa from './MelissaHo.jpg'

function Sidebar(){
    return(
        <aside className="sidebar">
            <div className="sidebar-widget">
                <h2 className="title">Melissa Ho</h2>
                <img src={Melissa} alt="selfie" className="widget-image"></img>

                <p>Front-end developer<br />
                    University graduate<br />
                    Positive & Passionate<br />
                    Always learning<br />
                    <br /></p>
                <a href="mailto: melissa.h717@outlook.com" className="links">Email  </a>
                <a href="www.github.com/melissah717" className="links">    Github</a>
                <a href="www.linkedin.com/in/melissah717" className="links">    LinkedIn</a>
            </div>
        </aside>

    )
}

export default Sidebar