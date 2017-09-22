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
    .then(post => {dispatch(editPost(post))})
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