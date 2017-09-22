import * as API from '../Util/api'
import * as Type from './types'

//Create Post
export const createPost = post => ({
    type: Type.CREATE_POST,
    post: post
});

export const newPost = (post) => dispatch => (
    API
    .createPost(post)
    .then(post => {dispatch(createPost(post))})
);

//Update Post
export const editPost = post => ({
    type: Type.EDIT_POST,
    post: post
});

export const updatePost = (post) => dispatch => (
    API
    .updatePost(post)
    .then(post => {dispatch(createPost(post))})
);
// Get POSTS 
export const getPosts = (posts,sortType,category) => ({
    type: Type.GET_POSTS,
    posts: posts,
    sortType:sortType

});

export const fetchPosts = (sortType,category='all') => dispatch => {
    if(category ==='all'){
        return API
        .fetchPosts()
        .then(posts => dispatch(getPosts(posts,sortType)))
    }
    else{
       return API
        .fetchCategoryPosts(category)
        .then(posts => dispatch(getPosts(posts,sortType,category)))
    }
};

// Get Category POSTS 
// export const getGategoryPosts = (posts,sortType) => ({
//     type: GET_POSTS,
//     posts: posts,
//     sortType:sortType

// });

// export const fetchCategoryPosts = (category,sortType) => dispatch => (
//     API
//     .fetchCategoryPosts()
//     .then(posts => dispatch(getPosts(posts,sortType)))
// );

//Get Categories
export const getGategories = (categories) => ({
    type: Type.GET_CATEGORIES,
    categories: categories,
});

export const fetchCategories= () => dispatch => (
    API
    .fetchCategories()
    .then(categories => {dispatch(getGategories(categories))})
);

// Delete A POST 
export const deletePost = postId => ({
    type: Type.DELETE_POST,
    postId: postId
});

export const removePost = (postId) => dispatch => (
    API
    .deletePost(postId)
    .then((postId) => {dispatch(deletePost(postId))})
);

// Get A POST 
export const getPost = post => ({
    type: Type.GET_POST,
    post: post
});

export const fetchPost = (postId) => dispatch => (
    API
    .fetchPost(postId)
    .then(post => {dispatch(getPost(post))})
);

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

// Vote Post
export const updatePostVote = (postId, vote) => {

    const voteType = vote > 0? Type.UP_VOTE_POST:Type.DOWN_VOTE_POST

    return {
        type: voteType,
        postId: postId 
    }

}

export const downVotePost = postId => dispatch => {
    API
    .downVotePost(postId)
    return dispatch(updatePostVote(postId,-1))
}

export const upVotePost = postId => dispatch => {
    API
    .upVotePost(postId)
    return dispatch(updatePostVote(postId,1))
}

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