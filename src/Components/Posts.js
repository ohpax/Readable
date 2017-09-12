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
        this.state = {category:''}
        this.sortPosts = this.sortPosts.bind(this)
    }


    componentWillMount() {
        
        if(this.props.match) {
            const { category } = this.props.match.params;
            
            this.props.getPosts(sortNewToOld,category)
            this.setState({category:category});

        }else{
            this.props.getPosts(sortNewToOld);
        }
        
    }

    componentWillReceiveProps(){
        if(this.props.match) {
            const { category } = this.props.match.params;
            this.props.getPosts(sortNewToOld,category)
            this.setState({category:category});

        }
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
                <PostsList posts={this.state.category?_.filter(this.props.posts, (post) => ( post.category === this.state.category) ):this.props.posts}></PostsList>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    posts: state.posts
});

const mapDispatchToProps = dispatch => ({
    getPosts: (sortType) => dispatch(fetchPosts(sortType)),
    getCategoryPosts: (sortType,category) => dispatch(fetchPosts(sortType,category))
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
