import _ from 'lodash'
import {GET_POST, GET_POSTS, UP_VOTE_POST, DOWN_VOTE_POST, GET_COMMENTS} from '../Actions'

const initState = {
    posts : [],
    comments: {},
    categories: []
}

function post(state=initState, action){
    switch(action.type){
        case GET_POSTS :
            return {
                ... state,
                posts: action.posts
            }
        case GET_POST:
            return {
                    ... state,
                    posts: [... state.posts, action.post]
                }
        case GET_COMMENTS :
            return {
                ... state,
                comments: _.mapKeys(action.comments, 'id')
            }
        case UP_VOTE_POST: 
            return {
                ... state,
                posts: state.posts.map((post) => {
                    if(post.id === action.postId){
                        post.voteScore++
                        return post
                    }
                    return post
                })
            }
        case DOWN_VOTE_POST: 
        return {
            ... state,
            posts: state.posts.map((post) => {
                if(post.id === action.postId){
                    post.voteScore--
                    return post
                }
                return post
            })
        }

        default :
            return state;
    }
}

export default post;