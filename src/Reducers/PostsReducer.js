import _ from 'lodash'
import * as Type from '../Actions/types'


function PostsReducer(state={}, action){
    let tempSorts ={}

        switch(action.type){

            case Type.GET_POSTS :
                 tempSorts = {...state, ...action.posts}
    
                if (action.sortType === Type.sortOldToNew) {
                    tempSorts = _.sortBy(tempSorts, 'timestamp')
                }
                else if (action.sortType === Type.sortNewToOld) {
                    tempSorts = _.sortBy(tempSorts, 'timestamp').reverse()
                }
                else if(action.sortType === Type.sortHighestScoreToLowest){
                    tempSorts = _.sortBy(tempSorts, 'voteScore').reverse()
                }
                else if(action.sortType === Type.sortLowestScoreToHighest){
                    tempSorts = _.sortBy(tempSorts, 'voteScore')
                }
                return {               
                    ..._.mapKeys(tempSorts, 'id')
                }

            case Type.CREATE_POST:
            case Type.GET_POST:
                return {
                    ...state,
                     [action.post.id]:  action.post
                    }
            case Type.DELETE_POST:
                    return {
                        ..._.mapKeys(state, (value, key) => {
                            if (key === action.postId) {
                                value.deleted = true;
                            }   
                            return key;              
                        })
                    } 
            case Type.UP_VOTE_POST: 
                return {
                    ...state,
                    ..._.mapKeys(state, (value, key) => {
                        if (key === action.postId) {
                            value.voteScore++
                        }
                        return key;
                    })
                }

            case Type.DOWN_VOTE_POST: 
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