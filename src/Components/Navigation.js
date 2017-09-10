import React from 'react'
import {Link} from 'react-router-dom'
const Navigation = () => {
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">Readable</a>
                </div>


                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li ><Link to={`/`}>Posts</Link></li>
                        <li><a href="#">Comments</a></li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navigation