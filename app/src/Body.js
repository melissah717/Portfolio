import React from 'react'
import Melissa from './MelissaHo.jpg'

function Main() {
    return (
        <div className="container container-flex">
            <aside className="sidebar">
                <div className="sidebar-widget">
                    <h2 className="title">Melissa Ho</h2>
                    <img src={Melissa} alt="selfie" className="widget-image"></img>

                    <p>Front-end developer<br/>
                    University graduate<br/>
                    Positive & Passionate<br/>
                    Always learning<br/>
                    <br/></p>
                    <a href="mailto: melissa.h717@outlook.com" className="links">Email  </a>
                    <a href="www.github.com/melissah717" className="links">    Github</a>
                    <a href="www.linkedin.com/in/melissah717" className="links">    LinkedIn</a>
                </div>
            </aside>


            <main className="main-container">

                <article className="section">
                    <h2 className="section-title">Background</h2>
                    <p className="article-body">Sometimes you take a shit, and it just keeps piling up and up in the toilet bowl.
                        The shit eventually starts stacking higher like a mountain. That's when you know you had too much alcohol last night. After you're done
                        you look down and it looks like a volcano. This phenomena is known as shit mountain. </p>
                </article>


                <article className="section">
                    <h2 className="section-title">Projects</h2>
                    <p className="section-body">
            
                    </p>
                </article>
            </main>
        </div>
    )
}

export default Main