import React from 'react'
import {connect} from 'react-redux'
import {downVoteComment, upVoteComment} from '../Actions'
import './Vote.css';
class VoteComment extends React.Component {
    render() {
        return (
            <div className="vote-wrapper" >
                <i className="glyphicon glyphicon-chevron-up vote-icon" onClick={() => (this.props.upVote(this.props.commentId))} />
                <span className="total-vote">{this.props.totalVote}</span>
                <i className="glyphicon glyphicon-chevron-down vote-icon" onClick={() => (this.props.downVote(this.props.commentId))} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    upVote: (commentId) => dispatch(upVoteComment(commentId)),
    downVote: (commentId) => dispatch(downVoteComment(commentId))
})
export default connect(null,mapDispatchToProps)(VoteComment);