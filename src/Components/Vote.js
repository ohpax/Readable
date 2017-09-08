import React from 'react'
import {connect} from 'react-redux'
import {downVotePost, upVotePost} from '../Actions'
import './Vote.css';
class Vote extends React.Component {
    render() {
        return (
            <div className="vote-wrapper" >
                <i className="glyphicon glyphicon-chevron-up vote-icon" onClick={() => (this.props.upVote(this.props.postId))} />
                <span className="total-vote">{this.props.totalVote}</span>
                <i className="glyphicon glyphicon-chevron-down vote-icon" onClick={() => (this.props.downVote(this.props.postId))} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    upVote: (postId) => dispatch(upVotePost(postId)),
    downVote: (postId) => dispatch(downVotePost(postId))
})
export default connect(null,mapDispatchToProps)(Vote);