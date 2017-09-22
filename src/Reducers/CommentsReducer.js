import _ from 'lodash'
import * as Type from '../Actions/types'


function CommentsReducer(state = {}, action) {
    let tempState = {}
    switch (action.type) {
        case Type.GET_COMMENTS:
            tempState = _.sortBy(action.comments, 'timestamp').reverse() 
            tempState = {
                ..._.mapKeys(tempState, 'id')
            }
            return tempState
        case Type.CREATE_COMMENT:
            tempState = {
                [action.comment.id]: action.comment,
                ...state
                
            } 
            return tempState
        case Type.EDIT_COMMENT:
        tempState = _.map(state,(comment) => {
                if (comment.id === action.comment.id) {
                    comment = action.comment;                  }
                return comment;
            })
            tempState = {
                ..._.mapKeys(tempState, 'id')
            }
        return tempState
        case Type.DELETE_COMMENT:
            tempState =  _.sortBy(state, 'timestamp').reverse()
            tempState = _.map(tempState,(comment) => {
                    if (comment.id === action.commentId) {
                        comment.deleted = true;                  }
                    return comment;
                })
                tempState = {
                    ..._.mapKeys(tempState, 'id')
                }
            return tempState
            case Type.UP_VOTE_COMMENT: 
            return {
                ...state,
                ..._.mapKeys(state, (value, key) => {
                    if (key === action.commentId) {
                        value.voteScore++
                    }
                    return key;
                })
            }

        case Type.DOWN_VOTE_COMMENT: 
        return {
            ...state,
            ..._.mapKeys(state, (value, key) => {
                if (key === action.commentId) {
                    value.voteScore--
                }
                return key;
            })
        }
        default:
            return state;
    }
}

export default CommentsReducer;