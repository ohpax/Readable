import React from 'react'
import _ from 'lodash'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'
import { removeComment } from '../Actions'
import { connect } from 'react-redux'
import { Modal, Button,Glyphicon } from 'react-bootstrap'
import Comment from './Comment'
import CommentEdit from './CommentEdit'

class Comments extends React.Component {
    constructor(props) {
        super(props)
        this.close = this.close.bind(this)
    }

    state = { 
        showCommentEditModal: false,
        editComment:{} 
    }

    onCommentDelete(commentId) {
        this.props.removeComment(commentId)
    }
    close() {
        this.setState({ showCommentEditModal: false });
    }
    open(comment) {
        this.setState({ 
            showCommentEditModal: true,
            editComment:comment
         });
    }
    render() {
        const result = _.map(this.props.comments, (comment) => {
            if (comment.deleted)
                return;

            return (
                <div key={comment.id} className="col-sm-offset-1 col-sm-10">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <strong>{comment.author}</strong> <span className="text-muted"><Moment format='YYYY/MM/DD'>{comment.timestamp}</Moment></span>
                        </div>
                        <div className="panel-body">
                            <div className="col-sm-11">
                                {comment.body}
                            </div>

                            <div className="col-sm-1">
                                <Button bsStyle="default" bsSize="small" onClick={() => this.open.bind(this)(comment)}> 
                                    <Glyphicon glyph="pencil" />
                                </Button>
                                <Button bsStyle="danger" bsSize="small" onClick={() => this.onCommentDelete.bind(this)(comment.id)}> 
                                    <Glyphicon glyph="trash" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>)
        })
        return <div>
            <Modal show={this.state.showCommentEditModal} onHide={this.close}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CommentEdit comment={this.state.editComment} closeModal={this.close}></CommentEdit>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
            {result}
            </div>
    }
}

const mapDispatchToProps = dispatch => ({
    removeComment: (commentId) => dispatch(removeComment(commentId))
})

export default connect(null, mapDispatchToProps)(Comments);