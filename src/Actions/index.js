import * as API from '../Util/api'

export const GET_POSTS = 'GET_POSTS'
export const GET_POST = 'GET_POST'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_COMMENTS = 'GET_COMMENTS'

export const CREATE_POST = 'CREATE_POST'
export const CREATE_COMMENT = 'CREATE_COMMENT'

export const EDIT_POST = 'EDIT_POST'
export const EDIT_COMMENT = 'EDIT_COMMENT'

export const UP_VOTE_POST = 'UP_VOTE_POST'
export const DOWN_VOTE_POST = 'DOWN_VOTE_POST'

export const VOTE_COMMENT = 'VOTE_COMMENT'



export const sortOldToNew='OLD_TO_NEW'
export const sortNewToOld='NEW_TO_OLD'
export const sortHighestScoreToLowest='HIGHEST_SCORE_TO_LOWEST'
export const sortLowestScoreToHighest='LOWEST_SCORE_TO_HIGHEST'

// Get POSTS 
export const getPosts = (posts,sortType) => ({
    type: GET_POSTS,
    posts: posts,
    sortType:sortType

});

export const fetchPosts = (sortType) => dispatch => (
    API
    .fetchPosts()
    .then(posts => dispatch(getPosts(posts,sortType)))
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

