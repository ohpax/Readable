import React from 'react'
import PostsList from './PostsList'
import Header from './Header'
import { connect } from 'react-redux'
import { fetchPosts, sortOldToNew,sortNewToOld, sortHighestScoreToLowest, sortLowestScoreToHighest } from '../Actions'
import _ from 'lodash'
import './Posts.css'

class Posts extends React.Component {


    constructor(props){
        super(props)

        this.sortPosts = this.sortPosts.bind(this)
    }


    componentWillMount() {
        this.props.getPosts(sortNewToOld);
    }

    sortPosts(event){
        this.props.getPosts(event.target.value);
    }
    
    render() {
        if (!this.props.posts) {
            return <div>Loading ...</div>
        }
 
        return (
            <div>
                <Header></Header>
                <div className="sort-wrapper">
                    <select onChange={this.sortPosts} className="form-control">
                        <option value={sortNewToOld}>New to old</option>
                        <option value={sortOldToNew}>Old to new</option>
                        <option value={sortHighestScoreToLowest}>Highest score to lowest</option>
                        <option value={sortLowestScoreToHighest}>Lowest score to heighest</option>
                    </select>
                </div>
                <PostsList posts={this.props.posts}></PostsList>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    posts: state.posts
});

const mapDispatchToProps = dispatch => ({
    getPosts: (sortType) => dispatch(fetchPosts(sortType))
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
