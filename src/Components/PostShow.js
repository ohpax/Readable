import React from 'react'
import {connect} from 'react-redux'
import {fetchPost} from '../Actions/PostActions'
import {fetchPostComments} from '../Actions/CommentActions'
import Moment from 'react-moment'
import Vote from './Vote'
import Header from './Header'
import Comment from './Comment'
import Comments from './Comments'
import _ from 'lodash'
import './PostShow.css';

class PostShow extends React.Component {
    
    componentWillMount(){
        const { id } = this.props.match.params;
        this.props.getPost(id)
        this.props.fetchPostComments(id)
    }

    render(){
        const {post} = this.props
        if(!post){
            return <div>Loading ...</div>
        }
        if(post.deleted){
            return <h1>This post is deleted</h1>
        }
        return (
        <div>
            <Header></Header>
            <div className="panel container">
                <div className="panel-heading">
                    <div className="text-center">
                        <div className="row">
                            <div className="col-sm-9">
                                <h3 className="pull-left post-title">{post.title}</h3>
                                
                            </div>
                            <div className="col-sm-3">
                                
                                <h4 className="pull-right">
                                <small>author: {post.author}</small>
                                <br/>
                                <small><em><Moment format='YYYY/MM/DD'>{post.timestamp}</Moment></em></small>
                                </h4>
                  
                                
                            </div>
                            <div className="pull-left">
                                <Vote className="vote-wrapper" totalVote={post.voteScore} postId={post.id}></Vote>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            <div className="panel-body">
                {post.body}
            </div>
            
            <div className="panel-footer">
                <span className="label label-default">{post.category}</span>
            </div>
        </div>
            <div className="comments-wrapper">
                <Comment parentId={post.id}></Comment>
                <Comments comments={this.props.comments}></Comments>
            </div>
        </div>

        )    
    }
}

const mapStateToProps = (state, props) => {
    const { id } = props.match.params;

    return {
        post: state.posts[id],
        comments: _.filter(state.comments, comment => comment.parentId === id)
    }
    
}

const mapDispatchToProps = dispatch => {
    return {
        getPost: (id) => dispatch(fetchPost(id)),
        fetchPostComments: (id) => dispatch(fetchPostComments(id)),
    }

  }
export default connect(mapStateToProps,mapDispatchToProps)(PostShow)