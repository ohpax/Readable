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
                    <Link className="navbar-brand" to={`/`}>Readable</Link>
                </div>


                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                    <li ><Link to={`/posts/create`}>New Post</Link></li>
                        <li ><Link to={`/`}>Posts</Link></li>
                        <li ><Link to={`/react`}>React</Link></li>
                        <li ><Link to={`/redux`}>Redux</Link></li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navigation