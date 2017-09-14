import _ from 'lodash'
import {
    DELETE_POST,
    GET_POST, 
    GET_POSTS, 
    UP_VOTE_POST, 
    DOWN_VOTE_POST, 
    sortOldToNew,
    sortNewToOld, 
    sortHighestScoreToLowest, 
    sortLowestScoreToHighest
} from '../Actions'


function PostsReducer(state={}, action){
    
        switch(action.type){

            case GET_POSTS :
                let tempSorts = [...state, ...action.posts]
    
                if (action.sortType === sortOldToNew) {
                    tempSorts = _.sortBy(tempSorts, 'timestamp')
                }
                else if (action.sortType === sortNewToOld) {
                    tempSorts = _.sortBy(tempSorts, 'timestamp').reverse()
                }
                else if(action.sortType === sortHighestScoreToLowest){
                    tempSorts = _.sortBy(tempSorts, 'voteScore').reverse()
                }
                else if(action.sortType === sortLowestScoreToHighest){
                    tempSorts = _.sortBy(tempSorts, 'voteScore')
                }
                return {               
                    ..._.mapKeys(tempSorts, 'id')
                }
            case GET_POST:
                return {
                    ...state,
                     [action.post.id]:  action.post
                    }
            case DELETE_POST:
                    return {
                        ..._.mapKeys(state, (value, key) => {
                            if (key === action.postId) {
                                value.deleted = true;
                            }   
                            return key;              
                        })
                    } 
            case UP_VOTE_POST: 
                return {
                    ...state,
                    ..._.mapKeys(state, (value, key) => {
                        if (key === action.postId) {
                            value.voteScore++
                        }
                        return key;
                    })
                }

            case DOWN_VOTE_POST: 
            return {
                ...state,
                ..._.mapKeys(state, (value, key) => {
                    if (key === action.postId) {
                        value.voteScore--
                    }
                    return key;
                })
            }
    
            default:
                return state;
        }
    }
    
    export default PostsReducer;