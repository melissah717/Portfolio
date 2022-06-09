import React from 'react'
import { HashLink as Link} from 'react-router-hash-link'

function Nav(){
    return (
        <nav className="navbar">
            <ul>
                <li><Link smooth to="#background">Background</Link></li>
                <li><Link smooth to="#languages">Technologies</Link></li>
                <li><Link smooth to="#projects">Projects</Link></li>
            </ul>
        </nav>
    )
}

export default Nav