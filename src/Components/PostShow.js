import React from 'react'
import {connect} from 'react-redux'
import {fetchPost, fetchPostComments} from '../Actions'
import Moment from 'react-moment'
import Vote from './Vote'
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
            <div className="panel">
                <div className="panel-heading">
                    <div className="text-center">
                        <div className="row">
                            <div className="col-sm-9">
                                <h3 className="pull-left">{post.title}</h3>
                                <Vote totalVote={post.voteScore} postId={post.id}></Vote>
                            </div>
                            <div className="col-sm-3">
                                
                                <h4 className="pull-right">
                                <small>author: {post.author}</small>
                                <br/>
                                <small><em><Moment format='YYYY/MM/DD'>{post.timestamp}</Moment></em></small>
                                </h4>
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
                { 
                    _.map(this.props.comments, (comment) =>(
                    <div key={comment.id} className="col-sm-offset-1 col-sm-10">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                            <strong>{comment.author}</strong> <span className="text-muted"><Moment format='YYYY/MM/DD'>{comment.timestamp}</Moment></span>
                            </div>
                            <div className="panel-body">
                            {comment.body}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        )    
    }
}

const mapStateToProps = (state, props) => {
    const { id } = props.match.params;
    
    const tempPost = state.posts.find((post) => post.id === id)
    const tempComments = _.filter(state.comments, comment => comment.parentId === id);

    return {
        post:tempPost,
        comments:tempComments
    }
    
}

const mapDispatchToProps = dispatch => {
    return {
        getPost: (id) => dispatch(fetchPost(id)),
        fetchPostComments: (id) => dispatch(fetchPostComments(id)),
    }

  }
export default connect(mapStateToProps,mapDispatchToProps)(PostShow)