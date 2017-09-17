import * as API from '../Util/api'

export const GET_POSTS = 'GET_POSTS'
export const GET_POST = 'GET_POST'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_CATEGORY_POSTS = 'GET_CATEGORY_POSTS'
export const GET_COMMENTS = 'GET_COMMENTS'

export const CREATE_POST = 'CREATE_POST'
export const CREATE_COMMENT = 'CREATE_COMMENT'

export const EDIT_POST = 'EDIT_POST'
export const EDIT_COMMENT = 'EDIT_COMMENT'

export const DELETE_POST = 'DELETE_POST'
export const DELETE_COMMENT = 'DELETE_COMMENT'

export const UP_VOTE_POST = 'UP_VOTE_POST'
export const DOWN_VOTE_POST = 'DOWN_VOTE_POST'

export const VOTE_COMMENT = 'VOTE_COMMENT'



export const sortOldToNew='OLD_TO_NEW'
export const sortNewToOld='NEW_TO_OLD'
export const sortHighestScoreToLowest='HIGHEST_SCORE_TO_LOWEST'
export const sortLowestScoreToHighest='LOWEST_SCORE_TO_HIGHEST'


//Create Post
export const createPost = post => ({
    type: CREATE_POST,
    post: post
});

export const newPost = (post) => dispatch => (
    API
    .createPost(post)
    .then(post => {dispatch(createPost(post))})
);

//Update Post
export const editPost = post => ({
    type: EDIT_POST,
    post: post
});

export const updatePost = (post) => dispatch => (
    API
    .updatePost(post)
    .then(post => {dispatch(createPost(post))})
);
// Get POSTS 
export const getPosts = (posts,sortType,category) => ({
    type: GET_POSTS,
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

// Delete A POST 
export const deletePost = postId => ({
    type: DELETE_POST,
    postId: postId
});

export const removePost = (postId) => dispatch => (
    API
    .deletePost(postId)
    .then((postId) => {dispatch(deletePost(postId))})
);

// Get A POST 
export const getPost = post => ({
    type: GET_POST,
    post: post
});

export const fetchPost = (postId) => dispatch => (
    API
    .fetchPost(postId)
    .then(post => {dispatch(getPost(post))})
);

// Get A POST Comments
export const getPostComments = comments => ({
    type: GET_COMMENTS,
    comments: comments
});

export const fetchPostComments = (postId) => dispatch => (
    API
    .fetchPostComments(postId)
    .then(comments => {dispatch(getPostComments(comments))})
);

export const editComment = comment => ({
    type: EDIT_COMMENT,
    comment: comment
});

export const updateComment = (comment) => dispatch => (
    API
    .updateComment(comment)
    .then(comment => {dispatch(editComment(comment))})
);

// Vote Post
export const updatePostVote = (postId, vote) => {

    const voteType = vote > 0? UP_VOTE_POST:DOWN_VOTE_POST

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


//Create Post
export const createComment = comment => ({
    type: CREATE_COMMENT,
    comment: comment
});

export const newComment = (comment) => dispatch => (
    API
    .createComment(comment)
    .then(comment => {dispatch(createComment(comment))})
);

export const deleteComment = commentId => ({
    type: DELETE_COMMENT,
    commentId: commentId
});

export const removeComment = (commentId) => dispatch => (
    API
    .deleteComment(commentId)
    .then(commentId => {dispatch(deleteComment(commentId))})
);