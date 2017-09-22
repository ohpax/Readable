import * as API from '../Util/api'
import * as Type from './types'

// Get A POST Comments
export const getPostComments = comments => ({
    type: Type.GET_COMMENTS,
    comments: comments
});

export const fetchPostComments = (postId) => dispatch => (
    API
    .fetchPostComments(postId)
    .then(comments => {dispatch(getPostComments(comments))})
);

export const editComment = comment => ({
    type: Type.EDIT_COMMENT,
    comment: comment
});

export const updateComment = (comment) => dispatch => (
    API
    .updateComment(comment)
    .then(comment => {dispatch(editComment(comment))})
);





// Vote Comment
export const updateCommentVote = (commentId, vote) => {
    const voteType = vote > 0 ? Type.UP_VOTE_COMMENT : Type.DOWN_VOTE_COMMENT
    return {
        type: voteType,
        commentId: commentId
    }
}

export const downVoteComment = commentId => dispatch => {
    API
    .downVoteComment(commentId)
    return dispatch(updateCommentVote(commentId, -1))
}

export const upVoteComment = commentId => dispatch => {
    API
    .upVoteComment(commentId)
    return dispatch(updateCommentVote(commentId, 1))
}

//Create Post
export const createComment = comment => ({
    type: Type.CREATE_COMMENT,
    comment: comment
});

export const newComment = (comment) => dispatch => (
    API
    .createComment(comment)
    .then(comment => {dispatch(createComment(comment))})
);

export const deleteComment = commentId => ({
    type: Type.DELETE_COMMENT,
    commentId: commentId
});

export const removeComment = (commentId) => dispatch => (
    API
    .deleteComment(commentId)
    .then(commentId => {dispatch(deleteComment(commentId))})
);