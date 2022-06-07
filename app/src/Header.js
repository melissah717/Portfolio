import React from 'react'
import Nav from './Nav'

function Header() {
    return (
        <div>
            <header>
                <title>Melissa Ho</title>
                <div className="container container-flex">
                    <div className="site-title">
                        <h1>Melly's portfolio</h1>
                    </div>
                    <Nav />
                </div>
            </header>
        </div>
    )
}

export default Header