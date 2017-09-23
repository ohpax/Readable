import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCategories } from "../Actions/CategoryActions"
import _ from 'lodash'

class Navigation extends React.Component {
    
    componentWillMount() {
        this.props.fetchCategories()
    }
    
    render() {
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
                            {_.map(this.props.categories,(category) =>(<li key={category.path} ><Link to={`/${category.path}`}>{category.name}</Link></li>))}
                        </ul>

                    </div>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = ({categories}) =>({categories})
const mapDispatchToProps = dispatch => ({
    fetchCategories: () => dispatch(fetchCategories())
})

export default connect(mapStateToProps,mapDispatchToProps)(Navigation)