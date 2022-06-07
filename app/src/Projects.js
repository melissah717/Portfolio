import React from 'react'


function Projects(props){

    let tankGif = require("./tankGame.gif")
    return(
        <div>
            <h3>{props.title}</h3>
            <img src={tankGif} alt="loading..." />
            <p> {props.description} </p>
        </div>
    )
}
export default Projects